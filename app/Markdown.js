"use client";
import Markdown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { createContext, useContext } from "react";
import { dracula, github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IconDownload } from "../icons/IconDownload";
import { IconCopy } from "../icons/IconCopy";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const H1 = ({ children }) => {
    return (
        <h1 className="text-5xl text-primary dark:text-primary-dark font-bold my-6 leading-tight">{children}</h1>
    );
}

const H2 = ({ children }) => {
    return (
        <h2 className="text-3xl leading-10 text-primary dark:text-primary-dark font-bold my-6">{children}</h2>
    );
}

const H3 = ({ children }) => {
    return (
        <h3 className="text-2xl leading-9 text-primary dark:text-primary-dark font-bold my-6">{children}</h3>
    );
}

const H4 = ({ children }) => {
    return (
        <h4 className="text-xl font-bold leading-9 my-4">{children}</h4>
    );
}

function downloadJSON(fileName, fileContent) {
    const element = document.createElement("a");
    const file = new Blob([fileContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}

function copyToClipboard(str) {
    navigator.clipboard.writeText(str);
    toast('Code copied to clipboard!', { hideProgressBar: true, autoClose: 2000, type: 'success' })
}

const Code = ({ className, children }) => {
    // TODO: remove this hacky way of setting the theme
    let theme = 'dark';
    if (typeof window !== 'undefined') {
        theme = localStorage.getItem('theme');
    }

    const componentName = useContext(ComponentContext);

    const language = className.replace("lang-", "");
    return (
        <div className="relative">
            <SyntaxHighlighter language={language} style={theme === 'dark' ? dracula : github} customStyle={{
                borderRadius: "0.6rem",
            }}>
                {children}
            </SyntaxHighlighter>
            {language === 'json' ? <div onClick={() => downloadJSON(`${componentName}.json`, children)}><IconDownload className="absolute top-0 right-0 m-3 cursor-pointer w-6 h-6 opacity-60 hover:opacity-95" /></div> : <div onClick={() => copyToClipboard(children) }><IconCopy className="absolute top-0 right-0 m-3 cursor-pointer w-6 h-6 opacity-60 hover:opacity-95" /></div>}
        </div>
    );
}

const ComponentContext = createContext("Text");

export default function DocMarkdown({ fileStr, component }) {
    return (
        <ComponentContext.Provider value={component}>
            <Markdown
                options={{
                    overrides: {
                        h1: H1,
                        h2: H2,
                        h3: H3,
                        h4: H4,
                        code: {
                            component: Code
                        }
                    }
                }}
            >
                {fileStr}
            </Markdown>
            <ToastContainer />
        </ComponentContext.Provider>
    );
}