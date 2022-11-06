import DocMarkdown from "../../../Markdown";

async function readF(component) {
    const content = await import(`../../../../content/docs/components/${component}.md`);
    return content.default;
}

export default async function Component(props) {
    const component = props.params.component;
    const fileStr = await readF(component);

    return (
        <DocMarkdown fileStr={fileStr} component={component}/>
    );
}