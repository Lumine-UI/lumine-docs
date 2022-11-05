import Markdown from "markdown-to-jsx";
import fs from "fs";

const prefixPath = "./content/docs/components/";

export default function Component(props) {
    const component = props.params.component;

    const file = fs.readFileSync(`${prefixPath}${component}.md`, "utf8");

    return (
        <Markdown>
            {file}
        </Markdown>
    )
}