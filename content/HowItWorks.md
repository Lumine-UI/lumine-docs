# How Lumine Works

Lumine UI creates an abstraction layer over the React Native components, which makes it easy for the server to change the UI instantly. It has a collection of components that are rendered on the client and driven from the server.

It does so by defining the JSON layout schema for each component. That schema is then used by the server to bind the required data to it. The server sends the JSON layout to the client, which then renders the UI. The server can update the UI on the fly, and the client will render the updated UI.

<img src="/images/Methodology.png" />

Lumine’s client fetches the JSON from the server —containing the data as well as the UI logic— to render on the screen. Now, to map through the JSON to separate the UI logic from the data, the pre-defined lumine components are put to use. The native functional components take care of rendering the desired UI on the screen and thus inflate the data. The server then refers to the pre-defined Lumine components such as Text, Button, View, etc. Using the interface, some functionalities of the UI components are added and overridden (Base components act as parent components to Derived components). Finally, the essential data combines with the UI logic to create JSON responses that will be used by the client.
