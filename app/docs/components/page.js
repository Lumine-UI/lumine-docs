import DocMarkdown from "../../Markdown";

async function readF() {
    const content = await import(`../../../content/docs/components/index.md`);
    return content.default;
}

export default async function HomePage(props) {
    const fileStr = await readF();

    return (
        <DocMarkdown fileStr={fileStr} component={'Components'}/>
    );
}