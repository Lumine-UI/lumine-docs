import Markdown from "markdown-to-jsx";
import fs from "fs";

function getFileString(component) {
    const prefixPath = "./content/docs/components/";
    return fs.readFileSync(`${prefixPath}${component}.md`, "utf8");
}

export default function Component(props) {
    const component = props.params.component;
    // const file = getFileString(component);

    return (
        <Markdown>
            {/* {file} */}
            {`# ${component} Component`}
        </Markdown>
    )
}