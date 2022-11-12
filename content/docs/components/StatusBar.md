# StatusBar

A component that allows you to configure your status bar.

### ****Usage in creating custom components****

```jsx
import { StatusBar } from 'lumine-ui'

const CustomComponent = () => {
   return (
      <StatusBar barStyle = " " hidden = { } backgroundColor = " "/>
   );
};

```

### Props

- `animated`
    - type: `boolean`
    
    If the transition between status bar property changes should be animated.
    
- `barStyle`
    - type: `StatusBarStyle`
    
    Sets the color of the status bar text.
    
- `hidden`
    - type: `boolean`
    
    If the status bar is hidden.
