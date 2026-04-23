# Portfolio Setup Checklist

## Structure

```text
f:\Portfolio\
|-- index.html
|-- assets\
|   |-- css\
|   |   `-- styles.css
|   `-- js\
|       `-- script.js
|-- images\
|-- docs\
|-- README.md
`-- SETUP_CHECKLIST.md
```

## Next Steps

### 1. Profile Picture
- [ ] Copy your profile picture (`me.jpeg`) to the `images/` folder
- [ ] Update the image path in `index.html`:
  ```html
  <img src="./images/me.jpeg" alt="Evans Manga portrait">
  ```

### 2. Contact Form Setup
- [ ] Go to https://formspree.io
- [ ] Create a form and copy its ID
- [ ] Replace `YOUR_FORMSPREE_ID` in `index.html`

### 3. CV Download Button
- [ ] Upload your CV to Google Drive
- [ ] Copy the file ID from the share URL
- [ ] Replace `YOUR_GOOGLE_DRIVE_CV_ID` in `index.html`

### 4. Links and Content
- [ ] Update LinkedIn, Facebook, and YouTube links
- [ ] Replace placeholder resource links with real ones

## Editing Guide

- HTML: `index.html`
- CSS: `assets/css/styles.css`
- JavaScript: `assets/js/script.js`
