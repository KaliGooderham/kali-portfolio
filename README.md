# Kali Gooderham Website Portfolio

## Description

I wanted to create something to show my projects, as well as to get some more experience with using React, Typescript, and HTML/CSS.
Another goal of mine was to get this website containerized and set up with a Jenkins pipeline for more practice, and get an idea of what works locally and what breaks the pipeline.

## Running Locally

[Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) must be installed before being able to run on [Vite's](https://vite.dev/) server for automatic updates on changes.
Once this is installed, run `npm run dev` within the repository's main folder to get it up-and-running. Vite will let you know which port the site is being used on localhost, but the default is `5173`, with the full URL being `http://localhost:5173`.

## Running with the container

blah blah blah running with container docker build docker run lalala

## Jenkins Instructions to Trigger on Push

- Install ngrok via terminal
- Run `ngrok http 8080`
- Copy what is given into the `payload URL` section of the GitHub webhook addition: `http://<server-ip>:8080/github-webhook`
- Set up webhook on GitHub to trigger a build with a push to a repo

## Unused Pieces

Within `App.tsx`, there is a component which is commeneted out called `<ThemeSwitch>`. Commenting this back in is going to add a small button in the bottom-righthand side of the screen, which would allow the user to switch the colors of the site when they want. The colors are determined in `App.css`, with light theme colors being denoted as `root`, and dark theme colors as `darktheme`. These use variables as shown in the CSS file to define the colors. If the developer wants to use this, the current `:root` chunk will have to be commented out, and the pieces holding the variables will have to be commented back in. The root currently is holding the dark theme colors.
