# Dyscroller
A chrome extension that help the users focus on their tasks by being  prevent the user from doomscrolling.

## Features

- [X] Adding unconventional ways to prevent doom scrolling to the browser via extension.
- [X] Adding "easy" and "hard" modes 
- [X] Adding various messages for personalities <(")
- [ ] Adding UI for completed tasks
- [ ] Adding reminder to add tasks when first opened browser
- [ ] Adding data report UI for user to see their doom-scroll stats


## Technologies

Dyscroller uses a number of open source projects to work properly:

- ReactJS - HTML enhanced for web apps!
- NodeJS - handlers for the backend.
- Webpack - Convert into raw code for browse- [Dyscroller](#dyscroller)

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

## User Guide
| Description | Index |
| --- | --- |
| How to add doomscroll URLs? | [Section]((#how-to-add-doomscroll-urls)) |
| How long before it triggers the alert? | [Section]((#how-long-before-it-triggers-the-alert)) |
| What are the differences between "Easy" and "Hard" mode? | [Section]((#mode)) |
| How do I send suggestions for the developer? | [Section]((#Suggestions)) |
### How to add doomscroll URLs
1. Open the "URLs" tab in Dyscroller extension window.
2. Add the website that you are addicted to doom-scroll (i.e Tiktok, Youtube, etc.).
3. Users do not need to find the main page of the doom-scroll website. Dyscroller will remember the domains of these URL so the users can enter any URLs from the doom-scroll website. Thus, Dyscroller will work as long as the user enters the domain of the doom-scroll websites.

### How long before it triggers the alert
The durations before Dyscroller alert messages trigger will based on the user's setting.
1. Open "Preferences" tab in Dyscroller extension window.
2. Under "Editing doom-scroll limit" will show the user the time they have before Dyscroll regconizes it as doom-scrolling and start sending alert messages.
3. To adjust this duration, the user can choose among three options: "1" , "2" or "5" minutes.

### Mode
Dyscroller has two modes:
- **Easy** - Dyscroller will only send reminder messages (approximately 10 alert messages) to remind the users to focus on their tasks before doom-scroll.
- **Hard** - Dyscroller will indefinitely send countless reminder messages and render the users unable to continue with that doom-scroll website, forcing the user to close that doom-scroll website. (Good for those who have low self-control ;) ).
### Suggestions
For any errors, bugs or features suggestions, feel free to send email to Dyscroller developers at **d4nhle02@gmail.com**.


## Authors
Danh Le
Nhat Trinh

@2024 - Dyscroller
