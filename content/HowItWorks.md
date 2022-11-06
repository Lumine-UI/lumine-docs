# How Lumine Works

Lumine UI creates an abstraction layer over the React Native components, which makes it easy for the server to change the UI instantly. It has a collection of components that are rendered on the client and driven from the server.

<br>

It does so by defining the JSON layout schema for each component. That schema is then used by the server to bind the required data to it. The server sends the JSON layout to the client, which then renders the UI. The server can update the UI on the fly, and the client will render the updated UI.

<br>

### Server

<br>

### Client