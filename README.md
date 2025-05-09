# Project Summary

## Tech Stack Used

### Languages, libraries and frameworks

- React
- Bootstrap
- Sass

### Package managers

- Vite
- NPM

### Additional tools

- Font Awesome (for icons)
- React Bootstrap Icons (for icons)
- Concurrently (for running multiple commands altogether)

## Folder structure

- All the React components are in the `src` folder

  - The naming convention in the given Figma layout is followed throughout the project except some cases
  - Each of the `jsx` files that are direct child of the `src` folder contains the section of the webpage with the name same as that of the component itself (e.g., `top.jsx` contains the contents of the "top" section of the webpage, etc.)
  - Each of the sub-folders under the `src` directory contains the components of the section having the name similar to the one of the sub-folder (e.g., "top" sub-folder contains the components of the top section, etc.)
  - Each direct child `jsx` components of the `src` directory contains the components in the sub-directory with the same name as it has (e.g., `top.jsx` contains the components of the "top" sub-directory)
  - The `reusables` folder contains the components reused throughout the whole project
  - The `portfolio` folder contains the components of the "recent works" section of the webpage, and the `portfolio.jsx` component contains the components of that folder

- All the Sass files are in the `sass` folder

  - A partial is created for each of the section
  - All the partials are put in the `sections` sub-directory
  - All the partials are integrated into the `style.scss` file
  - The `bootstrap` partial contains the Bootstrap classes
  - The `style.scss` file is compiled to a CSS file under `css` folder, which is linked to the HTML file. It contains all the partials and some universal design properties

- All the images are in the `public` folder
