# Setup

```sh
git clone https://github.com/Lumine-UI/lumine-ui.git
cd lumine-ui
```

### Install dependencies of package

```sh
npm install
```

### Prepare the package

```sh
npm run prepare
```

### Pack the package

```sh
npm pack
```

### Installing the package

```sh
cd example
npm install ../lumine-ui-0.0.1.tgz
```

### NOTE
If you want to use lumine for navigation, you need to install `react-native-screens` and `react-native-safe-area-context`. Run the following command:

```sh
npx expo install react-native-screens react-native-safe-area-context
```

### Running the example app

First go to `lumine-ui` directory and run the following command:

```sh
yarn example web
```