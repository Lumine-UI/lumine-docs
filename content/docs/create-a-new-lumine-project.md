# Create a new Lumine project

## Using lumine-ui template

To create a new react-native (expo) app with lumine-ui, run the following command in a `bash` terminal. 

**Note:** Use git bash to run it on Windows.

```sh
npx create-lumine-app <app_name>
```

## Adding to an existing expo app

To add lumine-ui to an already existing expo app, install the package by using the following command.

```sh
npm install lumine-ui
```

To get started, paste the code below in `App.tsx` file of your expo app.

```js
import { Presentation, PresentationData, NavHost } from "lumine-ui";
import React from "react";

// Replace the url below with your sever URL
const SERVER_URL = "https://raw.githubusercontent.com/Lumine-UI/server-samples/main/counter.json";

const defaultPresentation: PresentationData = {
  components: [],
};

export default function App() {
  const [presentationData, setPresentationData] =
    React.useState<PresentationData>(defaultPresentation);

  React.useEffect(() => {
    async function init() {
      try {
        const response = await fetch(SERVER_URL);
        const data = await response.json();
        console.log(data);
        setPresentationData(data);
      } catch (error) {
        console.error(error);
      }
    }
    init();
  }, []);
  return (
    <NavHost>
      <Presentation components={presentationData.components} />
    </NavHost>
  );
}
```

You can run your server locally (for example, at `http://localhost:5000/`) or host it on the web that responds in the format specified by [Lumine UI](https://lumineui.vercel.app/). Once that is done, simply copy your `url` and paste it as `SERVER_URL` in the code above to start using Lumine UI.

This will initialize a react-native (expo) based counter app.

## NOTE

If you want to use navigation in lumine, you need to install `react-native-screens` and `react-native-safe-area-context`. Run the following command in the app's root directory:

```sh
npx expo install react-native-screens react-native-safe-area-context
```

## Next Steps

1. [Running a Lumine Project](/docs/running-a-lumine-project)