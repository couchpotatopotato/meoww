# meow

Meow is a web app to view cats of the world!

## Contents

- [Technologies](#technologies)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key packages used](#key-packages-used)
- [Design Considerations](#design-considerations)

## Technologies

Frontend Framework: Vue 3

Router: Vue Router

CSS Framework: Tailwind CSS

Testing Framework: Jest

## Running the Project

### Installing prerequisites

Ensure that you have Node.js v18.14.0 (LTS).

If you do not have installed Node.js on your machine previously, it is recommended to install Node.js from their site [here](https://nodejs.org/en/). This will not only install the latest version of Node.js but npm as well.

### Yarn

Once you have Node installed, install Yarn:

```sh
npm install -g yarn
```

### Installation

First, clone the repository:

```sh
git clone https://github.com/couchpotatopotato/meoww.git
```

Navigate to the project root and install dependencies:

```sh
cd meoww
yarn install
```

Sign up for an API key from [The Cat Api](https://thecatapi.com/signup) and paste the key under the field `VUE_APP_API_KEY` in `.env` file

Start the development environment by running:

```sh
yarn serve
```

## Project structure

The current project structure is as shown below:

```bash
meoww
├─public/
└─src/
  │ App.vue
  ├─assets/
  ├─components/
  ├─contexts/
  ├─lib/
  ├─router/
  ├─types/
  ├─utils/
  └─views/
```

### `assets/` directory

Contains images.

### `components/` directory

Contains reusable components.

### `contexts/` directory

Contains contexts providing hooks that can be used by Vue components.

### `lib/` directory

Contains API function calls.

### `router/` directory

Defines routes used in the application.

### `types/` directory

Contains interfaces for Typescript.
### `utils/` directory

Contains helper functions for usage around the application. Also initialises Axios API function to be reused for API calls.

## Key packages used

### `axios`

A HTTP client to make HTTP requests to API.

### `typescript`

Allows for types in JavaScript. Helps detect errors in compile-time.

### `eslint`, `prettier`

These two dependencies are a linter and formatter respectively, and helps ensure code follow a strict style and formatting.

## Design Considerations

### Abstraction of API calls to its individual methods
The main API URL is defined globally in `.env` and each path is defined within each function. In the event the URL is updated e.g. v1 to v2, we do not have to go to every Vue component to update the URL.

### Caching cat data in `sessionStorage`
Cat data does not change often. Each page refresh would require a complete fetching of all cats and their images again, which is an expensive operation. Storing data in `sessionStorage` eliminates repeat API calls.
### Creation of Custom Hook for storage
Storage is used in multiple components. To enhance code reusability, a custom hook `useStorage` is used to store data.

### Lazy Loading of Cat Breeds
Cat breeds are lazy loaded and only `limit` number of cats are fetched each time. This allows for faster page loads without the user having to wait for all cats to be fetched before content renders.

