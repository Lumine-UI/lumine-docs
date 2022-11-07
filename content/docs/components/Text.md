# Text

Text is a component that renders text.
It is a wrapper around the [Text component](https://facebook.github.io/react-native/docs/text.html) from React Native.


### Usage in creating custom components

```jsx
import { Text } from 'lumine-ui';

const CustomComponent = () => {
    return (
        <Text>Some text</Text>
    );
};
```

### JSON Template


```json
{
    id: "some-id",
    name: "Some name",
    text: "Some text",
    style: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold"
    }
}
```
<br>