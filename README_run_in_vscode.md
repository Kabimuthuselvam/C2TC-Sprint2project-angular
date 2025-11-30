
# Student Certificate Collecting - Angular Project

This folder contains an Angular project. Below are steps to run it in VS Code.

## Prerequisites
- Node.js (LTS recommended, e.g. 16 or 18). Check with `node -v`.
- npm (comes with Node). Check with `npm -v`.
- (Optional) Angular CLI globally: `npm install -g @angular/cli` or you can use `npx ng`.

## Quick steps (recommended)
1. Open VS Code.
2. `File -> Open Folder...` and select this project root:
   `/mnt/data/C2TC_Sprint2Project-main/C2TC_Sprint2Project-main`
3. Open a terminal in VS Code (``Ctrl+` ``).
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the dev server:
   ```bash
   npm start
   # or: npx ng serve --open
   ```
6. The app should open at `http://localhost:4200`.

## VS Code helper tasks and debugger
- A task for `npm install` and `npm start` was added to `.vscode/tasks.json`.
- A debug configuration `Launch Chrome (ng serve)` is in `.vscode/launch.json`.
  Use Run & Debug -> Start Debugging (F5) after dependencies are installed.

## Troubleshooting
- If `npm install` fails, check Node version and network connectivity.
- If `ng` command not found, run `npx ng serve` or install `@angular/cli`.
- If port 4200 is busy, run: `npx ng serve --port 4300`.

