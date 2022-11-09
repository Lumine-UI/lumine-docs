# Overview

Lumine, the library aims at the creation of apps where the developers can choose any set of lumine components to create their own SDUI apps. It relies on the concept of building reactive apps with native UI where the server is responsible for showing and controlling the components on the front end. To sum it up, Lumine assists in building a generic layout engine for server-driven UI that will work across all platforms i.e. Android, Web, and iOS.

## Server-Driven UI
Various applications are built by establishing a client & a server, where the server provides data via REST API, and the client consumes it to render the UI. Whereas some web apps are built by sending the direct HTML file to render on requesting a particular URL. However, Server-driven UI uses a hybrid approach where the server controls and sends data along with the UI layout information in a declarative format like JSON. This enables rapid development and the iteration of UI components. After receiving the response, the client-side draws the UI. The current state of server-driven UI libraries is such that they are either difficult to use or do not support multiple platforms. 

## Lumine UI
Lumine is a server-driven UI library that makes it easy for developers to create and iterate on applications quickly, providing a better way to build server-driven UI applications that are easy to use while supporting multiple platforms. Layout updates are done on the fly, and updating the app on either the app store or play store is not required to see the dynamically updated components. In addition, it provides better performance and scalability since the server can add multiple pages on the fly without affecting the application size. The UI always stays up-to-date and consistent across all devices, ensuring users a more consistent experience. Lumine’s library allows applications to be developed on multiple platforms, with their layouts dynamically updated from the server, without redeploying web applications or launching new updates on Google Play or the App Store. It can test different theories for improving the product by running A/B experiments. The library promises to ship new features faster and build new screens with defined components.

## Need of Lumine
Updating the app every time in terms of UI changes & releasing it to the app store is a tedious job due to the time taken. Also, it’s uncertain whether a user wishes to update their app. With the problem in hand, the experience becomes inconsistent for users and laborious for the developers.

But with the help of Lumine, developers can seamlessly deliver updates directly to the client app. The need for constant redeployment and updating of the app is minimized. The library thus promises to ship new features faster and build new screens with defined components, making it very efficient for rapidly changing business requirements.

## Benefits of Lumine
- Lumine’s library allows applications to be developed on multiple platforms, with their layouts dynamically updated from the server, without redeploying web applications or launching new updates on Google Play or the App Store.
- It provides better performance and scalability without affecting the application size.
- The UI always stays up-to-date and consistent across all devices, ensuring users a more consistent experience.

[See how Lumine works](/how-it-works)