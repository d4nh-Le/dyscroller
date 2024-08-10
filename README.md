# Dyscroller

## Features

- [ ] Adding unconventional ways to prevent doom scrolling to the browser via extension.

## Todos:

- [ ] Coming up with new features
- [ ] Adding CI pipeline into Github Actions
- More...

## Tech

Dyscroller uses a number of open source projects to work properly:

- ReactJS - HTML enhanced for web apps!
- NodeJS - handlers for the backend.
- Webpack - Convert into raw code for browser.
- 

## Installation

1. Dyscroller requires [Node.js](https://nodejs.org/) v18.15.0+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dyscroller
npm install
npm run dev
```

2. Adding the development application into chrome extension:

- Open Chrome  > Mange Extensions
- Enable Developer Mode
- Click "Load Unpacked"
- Select the generated **dist** folder.

Note: For live development, put the following URL into the search bar:
**chrome-extension://<app_id>/app.html**

3. For production environments:

```sh
npm run build
```

## Author
Danh Le
Nhat Trinh
Benson Tran

@2024 - Dyscroller
