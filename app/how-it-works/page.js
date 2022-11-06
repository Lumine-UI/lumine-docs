import DocMarkdown from "../Markdown";

async function readF() {
    const content = await import(`../../content/HowItWorks.md`);
    return content.default;
}

export default async function HowItWorks(props) {
    const fileStr = await readF();

    return (
        <DocMarkdown fileStr={fileStr} component={'HowItWorks'}/>
    );
}