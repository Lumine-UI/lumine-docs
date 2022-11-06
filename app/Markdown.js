"use client";
import Markdown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { createContext, useContext } from "react";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IconDownload } from "../icons/IconDownload";
import { IconCopy } from "../icons/IconCopy";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    const language = className?.replace("lang-", "");

    if (!language) {
        return <code className="prose-code:before:hidden prose-code:after:hidden after">{children}</code>
    }

    const componentName = useContext(ComponentContext);

    return (
        <div className="relative">
            <SyntaxHighlighter language={language} style={dracula} customStyle={{
                background: "transparent"
            }}>
                {children}
            </SyntaxHighlighter>
            {language === 'json' ? <div onClick={() => downloadJSON(`${componentName}.json`, children)}><IconDownload className="absolute top-0 right-0 cursor-pointer w-6 h-6 opacity-60 hover:opacity-95" /></div> : <div onClick={() => copyToClipboard(children)}><IconCopy className="absolute top-0 right-0 m-3 cursor-pointer w-6 h-6 opacity-60 hover:opacity-95" /></div>}
        </div>
    )
}

const ComponentContext = createContext("Text");

const markdownOverrides = {
    h1: {
        component: "h1",
        props: {
            className: "text-5xl text-primary dark:text-primary-dark font-bold my-6 leading-tight"
        }
    },
    h2: {
        component: "h2",
        props: {
            className: "text-3xl leading-10 text-primary dark:text-primary-dark font-bold my-6"
        }
    },
    h3: {
        component: "h3",
        props: {
            className: "text-2xl leading-9 text-primary dark:text-primary-dark font-bold my-6"
        }
    },
    h4: {
        component: "h4",
        props: {
            className: "text-xl font-bold leading-9 my-4 text-primary dark:text-primary-dark"
        }
    },
    p: {
        component: "p",
        props: {
            className: "text-primary dark:text-primary-dark"
        }
    },
    a: {
        component: "a",
        props: {
            className: "text-link border-link dark:text-link-dark dark:border-link-dark font-bold"
        }
    },
    code: Code
}

export default function DocMarkdown({ fileStr, component }) {
    return (
        <ComponentContext.Provider value={component}>
            <Markdown
                className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden"
                options={{
                    overrides: markdownOverrides
                }}
            >
                {fileStr}
            </Markdown>
            <ToastContainer />
        </ComponentContext.Provider>
    );
}