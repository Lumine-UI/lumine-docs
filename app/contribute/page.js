import DocMarkdown from "../Markdown";

async function readF() {
    const content = await import(`../../content/contribute/index.md`);
    return content.default;
}

export default async function HomePage() {
    const fileStr = await readF();

    return (
        <DocMarkdown fileStr={fileStr} component={'Contribute'}/>
    );
}