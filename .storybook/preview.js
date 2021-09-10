// MyComponent.stories.js | MyComponent.stories.ts | MyComponent.stories.jsx | MyComponent.stories.tsx
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: "twitter",
    values: [
      {
        name: "twitter",
        value: "#00aced",
      },
      {
        name: "facebook",
        value: "#3b5998",
      },
    ],
  },
};

// import React from "react";
// import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

// import "../src/index.css"; //👈 The app's CSS file goes here

// //👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   viewport: {
//     viewports: {
//       ...MINIMAL_VIEWPORTS,
//       ...customViewports,
//     },
//   },
// };

// const customViewports = {
//   kindleFire2: {
//     name: "Kindle Fire 2",
//     styles: {
//       width: "600px",
//       height: "963px",
//     },
//   },
//   kindleFireHD: {
//     name: "Kindle Fire HD",
//     styles: {
//       width: "533px",
//       height: "801px",
//     },
//   },
// };

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
