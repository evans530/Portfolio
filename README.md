# Evans Manga Portfolio

## Project Structure

```text
Portfolio/
|-- index.html
|-- assets/
|   |-- css/
|   |   `-- styles.css
|   `-- js/
|       `-- script.js
|-- images/
|-- docs/
|-- README.md
`-- SETUP_CHECKLIST.md
```

## Files

### `index.html`
- Main portfolio page
- Contains the website structure and content
- References the active stylesheet and script in `assets/`

### `assets/css/styles.css`
- Main stylesheet
- Holds layout, typography, responsive rules, and component styling

### `assets/js/script.js`
- Main JavaScript file
- Handles smooth scrolling, form validation, and the auto-updating footer year

### `images/`
- Recommended place for profile photos and future image assets

## Setup

1. Update the profile image path in `index.html` to use a project-relative file, for example:
   ```html
   <img src="./images/me.jpeg" alt="Evans Manga portrait">
   ```
2. Replace `YOUR_FORMSPREE_ID` in the contact form action with your real Formspree form ID.
3. Replace `YOUR_GOOGLE_DRIVE_CV_ID` in the CV button link with your real Google Drive file ID.
4. Update the social links and any remaining placeholder resource links.

## Notes

- Edit styles in `assets/css/styles.css`
- Edit behavior in `assets/js/script.js`
- Keep internal file references relative so deployment stays simple
