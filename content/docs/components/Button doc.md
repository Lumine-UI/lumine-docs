# Button doc

### Button

A button is a component that the user can interact with to perform a specific action

|  |  |
| --- | --- |

**Props:**

- `mode`
    - Type: "`text`" | "`outlined`" | "`contained`”
        - `text` - flat button without background or outline, used for the lowest priority actions, especially when presenting multiple options.
        - `outlined` - button with an outline without background, typically used for important, but not primary action – represents medium emphasis.
        - `contained` - button with a background color, used for important action, have the most visual impact and high emphasis.
- `dark`
    - Type: `boolean`
        
        Whether the color is a dark color. A dark button will render light text and vice-versa.
        
- `compact`
    - Type: `boolean`
        
        Use a compact look, useful for `text` buttons in a row.
        
- `color`
    - Type: `string`
        
        Custom text color for flat button, or background color for contained button.
        
- `loading`
    - Type: `boolean`
        
        Whether to show a loading indicator.
        
- `disabled`
    - Type: `boolean`
        
        Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
        
- `uppercase`
    - Type: `boolean`
        
        Make the label text uppercased. Note that this won't work if you pass React elements as children.
        
- `accesibilityLabel`
    - Type: `string`
        
        Accessibility label for the button. This is read by the screen reader when the user taps the button.
        
- `accessibilityHint`
    - Type: `string`
        
        Accessibility hint for the button. This is read by the screen reader when the user taps the button.
        
- `contentStyle`
    - Type: `[StyleProp<ViewStyle>](https://reactnative.dev/docs/view-style-props)`
        
        Style of button's inner content.
        
- `labelStyle`
    - Type: `[StyleProp<TextStyle>](https://reactnative.dev/docs/text-style-props)`
        
        Style for the button text.
