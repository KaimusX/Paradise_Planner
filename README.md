# Paradise_Planner

A pure vanilla HTML/CSS/JS project — no framework, no build step required.

## Structure

```
my-project/
├── index.html          # Entry point
├── css/                # Styles (reset, variables, global, components)
├── js/                 # Scripts (main entry, components, utils, data)
├── assets/             # Images, fonts, icons
├── pages/              # Extra HTML pages
```

## Running locally

Because `js/main.js` is loaded as an ES module (`type="module"`), you need to
serve the files over HTTP rather than opening `index.html` directly via
`file://` (browsers block module imports over `file://`).

Easiest options:

```bash
# Using Python (built in on most systems)
python3 -m http.server 8000

# Or using Node's live-server (auto-reload)
npx live-server
```

Then open `http://localhost:8000` in your browser.

## Adding new components

1. Add a JS module in `js/components/`.
2. Add matching styles in `css/components/`.
3. Import the JS module in `js/main.js` and link the CSS file in `index.html`.

## Adding new pages

Add a new `.html` file inside `pages/`, copying the `<head>` link structure
from `pages/about.html` (paths use `../` since pages live one level deep).