"use client";
import Markdown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import {useEffect, useState} from "react";
import { dracula, github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({className, children}) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(localStorage) {
            const theme = localStorage.getItem("theme");
            if(theme) {
                setTheme(theme);
            }
        }
    }, []);

    const language = className.replace("lang-", "");
    return (
        <SyntaxHighlighter language={language} style={theme === 'dark' ? dracula : github}>
            {children}
        </SyntaxHighlighter>
    );
}

export default function DocMarkdown({ fileStr }) {
    return (
        <Markdown
            options={{
                overrides: {
                    code: {
                        component: Code
                    }
                }
            }}
        >
            {fileStr}
        </Markdown>
    );
}