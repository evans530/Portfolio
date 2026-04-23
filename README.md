# Evans Manga Portfolio - Project Structure

## Folder Organization

```
Portfolio/
├── Evans.html              # Main HTML file
├── css/
│   └── styles.css         # All stylesheet rules
├── js/
│   └── script.js          # All JavaScript functionality
├── images/                # Image assets folder (for future use)
├── assets/                # Additional assets folder (for future use)
└── README.md              # This file
```

## Files Description

### Evans.html
- Main portfolio website file
- Contains HTML structure with references to external CSS and JS
- Update your CV Google Drive ID and Formspree form ID here

### css/styles.css
- Centralized stylesheet
- Contains all styling for layout, colors, typography, animations
- Responsive design rules for mobile devices
- Easy to maintain and update

### js/script.js
- All JavaScript functionality
- Smooth scroll navigation
- Form validation and Formspree integration
- Interactive features

### images/
- Placeholder folder for your images
- Currently stores profile picture (me.jpeg)
- Can add more images here for gallery sections

### assets/
- General assets folder
- Can store fonts, icons, documents, PDFs, etc.

## Setup Instructions

1. **Profile Picture**: Place your `me.jpeg` in the `images/` folder, then update the path in Evans.html from:
   ```html
   <img src="C:\Users\USER\Downloads\me.jpeg" alt="Evans Manga portrait">
   ```
   to:
   ```html
   <img src="./images/me.jpeg" alt="Evans Manga portrait">
   ```

2. **Formspree Setup**: 
   - Visit https://formspree.io
   - Create a new form
   - Replace `YOUR_FORMSPREE_ID` in Evans.html with your actual ID

3. **CV Download Link**:
   - Upload your CV to Google Drive
   - Get the file ID
   - Replace `YOUR_GOOGLE_DRIVE_CV_ID` in Evans.html with your actual ID

## File Structure Benefits

- **Maintainability**: CSS and JS are separate, easier to update
- **Performance**: External stylesheets load faster than inline styles
- **Scalability**: Easy to add more pages or sections
- **Organization**: Clear folder structure for images and assets
- **Professional**: Follows web development best practices

## Deployment

When deploying to web hosting:
1. Upload entire Portfolio folder to your hosting server
2. File paths (./css/, ./js/, ./images/) will work correctly
3. Ensure all files are in the same relative structure

## Notes

- Always maintain the folder structure when uploading files
- Keep external links updated (Formspree, Google Drive, social media)
- Test all functionality before deploying to production
