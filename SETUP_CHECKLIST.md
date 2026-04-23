# Portfolio Setup Checklist

## ✅ Structure is Complete!

Your portfolio now has a professional file organization:

```
f:\Portfolio\
├── Evans.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/          (for photos)
├── assets/          (for documents, PDFs, etc.)
└── README.md
```

## 📋 Next Steps

### 1. Profile Picture
- [ ] Copy your profile picture (me.jpeg) to the `images/` folder
- [ ] Update the image path in Evans.html:
  ```html
  <img src="./images/me.jpeg" alt="Evans Manga portrait">
  ```

### 2. Contact Form Setup (Formspree)
- [ ] Go to https://formspree.io
- [ ] Sign up for a free account
- [ ] Create a new form
- [ ] Copy your form ID
- [ ] In Evans.html, find this line:
  ```html
  <form id="contactForm" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
  ```
- [ ] Replace `YOUR_FORMSPREE_ID` with your actual ID

### 3. CV Download Button
- [ ] Upload your CV to Google Drive
- [ ] Right-click the file → Share → Change to "Anyone with the link can view"
- [ ] Get the file ID from the URL (the long string between /d/ and /view)
- [ ] In Evans.html, find:
  ```html
  href="https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_CV_ID/view"
  ```
- [ ] Replace `YOUR_GOOGLE_DRIVE_CV_ID` with your actual ID

### 4. Social Media Links
- [ ] Update LinkedIn URL (currently: linkedin.com/in/evans-manga)
- [ ] Update Facebook URL (currently: facebook.com/evans-manga)
- [ ] Add YouTube channel link (in Resources section)

### 5. Teaching Resources Links
- [ ] Update placeholder links in the Resources section
- [ ] Add actual links to your materials/resources

### 6. Gallery Images (Optional)
- [ ] Replace the placeholder gradient icons with actual classroom photos
- [ ] Add images to `images/` folder
- [ ] Update gallery HTML to use real images

## 📁 Folder Usage Guide

| Folder | Purpose | Example Files |
|--------|---------|---|
| `images/` | Profile pic, gallery images | me.jpeg, classroom-photos/ |
| `css/` | Stylesheets | styles.css |
| `js/` | JavaScript files | script.js, additional-features.js |
| `assets/` | Docs, PDFs, downloads | resume.pdf, lesson-plans.pdf |

## 🚀 Ready to Deploy?

When you're ready to put your portfolio online:

1. Copy the entire `Portfolio/` folder to your web hosting
2. Point your domain to the folder
3. Your portfolio will work with all relative paths intact

## 💡 Pro Tips

- Keep CSS organized in one file (styles.css)
- Update JavaScript in js/script.js
- Store all images in images/ folder
- Use ./relative/paths for all internal links
- Test on mobile before deploying

## ❓ Need Help?

- Edit Evans.html in VS Code
- CSS changes: edit css/styles.css
- JavaScript changes: edit js/script.js
- Always maintain folder structure

---

**Status**: Your portfolio structure is now professional and scalable! 🎉
