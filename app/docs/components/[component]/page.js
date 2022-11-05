import Markdown from "markdown-to-jsx";

async function readDir(path) {
    const fs = require('fs');
  const files= await fs.promises.readdir(path);
  console.log(files); // array of file names
}

async function getFileString(component) {
    const fs = require('fs')
    const path = require('path');
    const prefixPath = "../../../../../../content/docs/components/";
    const fileStr = await fs.promises.readFile(path.resolve(__dirname, `${prefixPath}${component}.md`), 'utf8');
    // const fileStr = await fs.promises.readFile(`${prefixPath}${component}.md`, "utf8");
    return fileStr;
}

export default async function Component(props) {
    const component = props.params.component;
    // const fileStr = await getFileString(component);
    await readDir("./");
    return (
        <Markdown>
            {/* {fileStr} */}
            {`# ${component} Component`}
        </Markdown>
    )
}