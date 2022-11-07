import DocMarkdown from "../../Markdown";

async function readF(section) {
    try {
        const content = await import(`../../../content/contribute/${section}.md`);
        return content.default;
    }
    catch(e) {
        console.error(e);
    }
}

export default async function Section(props) {
    const section = props.params.section;
    const fileStr = await readF(section);

    return (
        <DocMarkdown fileStr={fileStr} component={section}/>
    );
}