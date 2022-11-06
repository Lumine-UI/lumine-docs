import DocMarkdown from "../../../Markdown";

async function readF(component) {
    try {
        const content = await import(`../../../../content/docs/components/${component}.md`);
        return content.default;
    }
    catch (e) {
        console.error(e);
    }
}

export default async function Component(props) {
    const component = props.params.component;
    const fileStr = await readF(component);

    return (
        <DocMarkdown fileStr={fileStr} component={component}/>
    );
}