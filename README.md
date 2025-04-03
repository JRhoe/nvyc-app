# NVYC APP

This brief documentation will give you an overview of what was used to create this app. It assumes you already have an understanding of app development. Therefore, you will need to do your own research to learn how to use these tools.

## Tech Stack

- [React Native](https://reactnative.dev/)
- HTML/CSS
- JavaScript (TypeScript)
- [Expo](https://expo.dev/)
- [Tailwind CSS](https://tailwindcss.com/) ([Nativewind](https://www.nativewind.dev/))
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Environment Setup

- [Visual Studio Code](https://code.visualstudio.com/)
  The following are some plugins I used to make coding in visual studio easier. If you do not plan on using visual studio, you can skip to the next environment setup
  - **Tailwind CSS IntelliSense** For writing tailwind css faster
  - **JS JSX Snippets** Usefull snipets such as "rnfc" to quickly type a react native js component
  - **Prettier - Code formatter** Formats code to make it more readable (prettier)
- [Node.js](https://nodejs.org/en)
  Required to run all npm/npx commands
- [EAS CLI](https://docs.expo.dev/eas-update/getting-started/#install-the-latest-eas-cli)
  Required to run all update and build commands for expo
  Install with:

  ```bash
  npm install --global eas-cli
  ```

## Access to Expo

To trigger builds and updates you will need access to the expo account that owns the project.
You will need to contact James Rhoe to get access. Contact info can be gotten from Mike Moyer

## App Updates

This app has been set up using expo-updates because of this you will be able to push updates to the app (Android and IOS simultaneously) without needing app store approval. It's important to understand that this does have limitations. **You can only update javascript components.**

This means that you will be able to update the following without appstore approval

- Add and delete pages (including navigation tabs)
- Change and add text/images
- Make styling changes (text size/color)
- Change logic for components (Image carousel)
- Anything else Javascript based...

You will not be able to change anything that effects the native code of the app. Any changes to the native code will require you to submit a new build to the app store.

- App icon and name
- Splash screen
- Add or remove expo packages
- see [Expo Updates docs](https://docs.expo.dev/eas-update/introduction/) for more information

To trigger an update run:

```bash
eas update --branch preview --message "update message"
```

- The branch can either be:
  - "preview" if you are pushing updates to a preview build
  - "production" if you are pushing it to the published app
- The message is for internal use only. It will not be shown to the user

Once an update has been triggered the user will be faced with an update button the next time they open the app. To change this functionality see [app/_layout.tsx](./app/_layout.tsx).

## New appstore builds

**You only need to trigger a new appstore build if the native code has been changed. Otherwise see [App Updates](#app-updates)**

The app build code get auto incremented by expo there is no need to change it manually. However the app version will need to be updated in [app.config.ts](./app.config.ts) if you are releasing a new version of the app.

To trigger a new build run:

```bash
eas build
```

It will take you through the setup to trigger a build
