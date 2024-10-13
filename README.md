# Dyscroller
A chrome extension that help the users focus on their tasks by being  prevent the user from doomscrolling.

## Features

- [X] Adding unconventional ways to prevent doom scrolling to the browser via extension.
- [X] Adding "easy" and "hard" modes 
- [X] Adding various messages for personalities <(")
- [ ] Adding UI for completed tasks

## Technologies

Dyscroller uses a number of open source projects to work properly:

- ReactJS - HTML enhanced for web apps!
- NodeJS - handlers for the backend.
- Webpack - Convert into raw code for browse- [Dyscroller](#dyscroller)


## User Guide
| Description |
| --- |
| [How to add doomscroll URLs?](#how-to-add-doomscroll-urls) | 
| [How long before it triggers the alert?](#how-long-before-it-triggers-the-alert) | 
| [What are the differences between "Easy" and "Hard" mode?](#mode) |
### How to add doomscroll URLs

### How long before it triggers the alert

### Mode

## Local Installation

1. Dyscroller requires [Node.js](https://nodejs.org/) v18.15.0+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm run build
```

2. Adding the development application into chrome extension:

- Open Chrome  > Mange Extensions
- Enable Developer Mode
- Click "Load Unpacked"
- Select the generated **dist** folder.

To enter the extension page, put the following URL into the search bar:
**chrome-extension://<app_id>/app.html**

3. Experiencing Dyscroller

- Add the urls that you need Dyscroller to watch out for you, it will reminds you with notifications in **chrome-extension://<app_id>/app.html** when it detects you are doomscrolling while having tasks left.
- (In the future, notifications will alert straight on the active tabs.

## Author
Danh Le
Nhat Trinh

@2024 - Dyscroller
