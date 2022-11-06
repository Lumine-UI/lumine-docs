# LUMINE UI documentation

|  |  |
| --- | --- |

# **Introduction**

### What is Lumine?

Lumine, the framework aims at the creation of apps where the developers can choose any set of lumine components to create their own SDUI apps. It relies on the concept of building reactive apps with native UI where the server is responsible for showing and controlling the components on the front end. To sum it up, Lumine assists in building a generic layout engine for server-driven UI that will work across all platforms i.e. Android, Web, and iOS.

|  |  |
| --- | --- |
|  |  |
|  |  |

### Need of Lumine

Updating the app every time in terms of UI changes & releasing it to the app store is a tedious job due to the time taken. Also, it’s uncertain whether a user wishes to update their app. With the problem in hand, the experience becomes inconsistent for users and laborious for the developers.

But with the help of Lumine, developers can seamlessly deliver updates directly to the client app. The need for constant redeployment and updating of the app is minimized. The framework thus promises to ship new features faster and build new screens with defined components, making it very efficient for rapidly changing business requirements.

### Benefits of Lumine

- Lumine’s framework allows applications to be developed on multiple platforms, with their layouts dynamically updated from the server, without redeploying web applications or launching new updates on Google Play or the App Store.
- It provides better performance and scalability without affecting the application size.
- The UI always stays up-to-date and consistent across all devices, ensuring users a more consistent experience.

### How Lumine works

Lumine’s client fetches the JSON from the server —containing the data as well as the UI logic— to render on the screen.  Now, to map through the JSON to separate the UI logic from the data, the pre-defined lumine components are put to use. The native functional components take care of rendering the desired UI on the screen and thus inflate the data. The server then refers to the pre-defined Lumine components such as Text, Button, View, etc. Using the interface, some functionalities of the UI components are added and overridden (Base components act as parent components to Derived components). Finally, the essential data combines with the UI logic to create JSON responses that will be used by the client.

|  |  |
| --- | --- |

### Operating environment

Lumine UI works on all React Native applications along with React Native for Web support. The minimum supported OS versions for React Native (Expo) are

- Android 5+ (API level 21)
- iOS 10+

The web version depends on React Native for the Web. The browsers with known support include Chrome 60+ Safari 10.1+ / iOS Safari 10.1+

Internet connection is required on both the client and server side.

---

# **Documentation for developers**

## Getting started

### **Set up Android**

- Install [Android studio](https://developer.android.com/studio).
- Android development environment: Follow the [official docs](https://reactnative.dev/docs/environment-setup). Select the "Expo Go Quickstart" tab

### **Set up iOS**

- Download the latest version of Xcode. You can find all available versions of Xcode at [Apple's Developer Portal](http://developer.apple.com/download/more/).

### **Install**

- Clone this repo

```
   git clone https://github.com/Lumine-UI/lumine-expo.git
   cd lumine-expo
```

- Run the app

```
   npm run web   //For web
   npm run android   //For Android
   npm run ios   //For iOS
```

## Components

- Basic components
    
    <aside>
    📌 Text, Image, Spinner, Icon, Toast, Snackbar, List, TextInput
    
    </aside>
    
- Complex components
    
    <aside>
    📌 Card, Bottom navigation, Carousel, Button, Read more text, Rating
    
    </aside>
    
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
