# Minecraft 2D

A small browser-based 2D Minecraft-inspired mining and building game. Explore a randomly generated block world, collect resources, and place blocks using a simple tool and inventory system.

## Play

**[Open Minecraft 2D](https://treusg.github.io/Minecraft/)**

> If the link does not work yet, enable GitHub Pages for this repository using the instructions below.

## Features

- Randomly generated terrain with hills, sandy areas, trees, and underground caves
- Mine different blocks, including stone, dirt, sand, ores, and wood
- Choose the right tool for each block
- Collect mined blocks in your inventory
- Place collected blocks back into empty spaces
- Generate a fresh world whenever you want
- Pixel-style visuals, a tutorial, and optional menu music

## Controls

| Key / Action | What it does |
| --- | --- |
| `1` | Select the axe |
| `2` | Select the pickaxe |
| `3` | Select the shovel |
| `Esc` | Clear the current selection |
| Click a block | Mine it with the correct selected tool |
| Select an inventory item, then click an empty tile | Place that block |
| `↻` button | Generate a new world |
| `🏠` button | Return to the main menu |

## Run locally

No build tools or package installation are required.

1. Download or clone this repository.
2. Open `index.html` in a browser.

For the most reliable local testing, you can also start a simple static server from the project folder:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Built with

- HTML
- CSS
- Vanilla JavaScript

## GitHub Pages

This repository is configured to deploy as a static site with GitHub Actions.

1. Push the project files to the `main` branch.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow to finish.
5. Visit: <https://treusg.github.io/Minecraft/>

The workflow publishes the repository root, where `index.html` is located. Every new push to `main` triggers another deployment.

## Notes

This is a fan-made browser project inspired by Minecraft. It is not an official Minecraft product and is not affiliated with or endorsed by Mojang or Microsoft.
