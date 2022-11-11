# Image

The **Image** component is used to display the image on the screen.

### ****Usage in creating custom components****

```
import { Image } from 'lumine-ui';

const CustomComponent = () => {
   return (
      <ImagesExample/>
   );
};
```

### Props

- `onError`
    - type: `({ nativeEvent: { error } }
    ) => void`
    
    Invoked on load error.
    
- `onLoad`
    - type: `({ nativeEvent: ImageLoadEvent
     }) => void`
    
    Invoked when load completes successfully.
    
- `onLoadEnd`
    - type: `() => void`
    
    Invoked when load either succeeds or fails.
    
- `onLoadStart`
    - `() => void`
    
    invoked on load start
    
- `onLayout`
    - type: `({ nativeEvent: LayoutEvent
     }) => void`
    
    Invoked on mount and on layout changes.
    
- `onPartialLoad`
    - type: `() => void`
    
    Invoked when a partial load of the image is complete. 
    
- `onProgress`
    - type: `({ nativeEvent: { loaded, total } }
    ) => void`
    
    Invoked on download progress.
