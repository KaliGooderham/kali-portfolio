# Kali Gooderham Website Portfolio

## Description

I wanted to create something to show my projects, as well as to get some more experience with using React, Typescript, and HTML/CSS.
Another goal of mine was to get this website containerized and set up with a Jenkins pipeline for more practice, and get an idea of what works locally and what breaks the pipeline.

## Running Locally

[Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) must be installed before being able to run on [Vite's](https://vite.dev/) server for automatic updates on changes.
Once this is installed, run `npm run dev` within the repository's main folder to get it up-and-running. Vite will let you know which port the site is being used on localhost, but the default is `5173`, with the full URL being `http://localhost:5173`.

## Running with Docker Container

In order to run the Docker container, Docker must be installed, logged in to, and running. While in a terminal at the highest level of the repository (which is holding the `Dockerfile`), run:

`docker build -t portfolio . && docker run -it -p 5173:5173 portfolio`

In this command, `portfolio` is the image ID (this could be changed to anything), and the `-p` flag inside the `docker run` command is mapping the port inside the container to a port outside the container, so the developer can go to `localhost:5173` and find the website hosted there. The `-p` syntax is `-p <HOST>:<CONTAINER>`. If the developer's port 5173 is in use, change the flag to reflect a new one:

`-p <NEW_PORT>:5173`

This web application uses Vite for development, and port 5173 is Vite's default port.

Currently, even with volume mounting the `src` folder into the container, Docker does not detect changes made to code automatically. This means that making changes in your IDE/Editor to the `src` file, and expecting them to reflect in your locally-hosted site if running through the container, will not happen.

## Jenkins Instructions to Trigger on Push

- Install ngrok via terminal
- Run `ngrok http 8080`
- Copy what is given into the `payload URL` section of the GitHub webhook addition: `http://<server-ip>:8080/github-webhook`
- Set up webhook on GitHub to trigger a build with a push to a repo

## Hosting on GitHub Pages

Changes are already made to `package.json` in order to be published on GitHub Pages.

If for some reason site needs to be published again, run `npm build deploy` and the script will be run to get it hosted.

URL: `https://kaligooderham.github.io/kali-portfolio/`

## Unused Pieces

Within `App.tsx`, there is a component which is commeneted out called `<ThemeSwitch>`. Commenting this back in is going to add a small button in the bottom-righthand side of the screen, which would allow the user to switch the colors of the site when they want. The colors are determined in `App.css`, with light theme colors being denoted as `root`, and dark theme colors as `darktheme`. These use variables as shown in the CSS file to define the colors. If the developer wants to use this, the current `:root` chunk will have to be commented out, and the pieces holding the variables will have to be commented back in. The root currently is holding the dark theme colors.
