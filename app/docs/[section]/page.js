import DocMarkdown from "../../Markdown";

async function readF(section) {
    const content = await import(`../../../content/docs/${section}.md`);
    return content.default;
}

export default async function Section(props) {
    const section = props.params.section;
    const fileStr = await readF(section);

    return (
        <DocMarkdown fileStr={fileStr} component={section}/>
    );
}