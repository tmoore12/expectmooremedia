# AGENTS.md

Guidance for AI agents working on this repo.

## Project
Plain HTML/CSS marketing site for **ExpectMoore Media**, a West Michigan digital media company: real estate photography and videography, drone photo and video, website development, audio production, podcast production, and content creation.

- No build step, frameworks, or dependencies. Pages are `*.html` at the repo root (`index`, `services`, `portfolio`, `about`, `contact`, `thank-you`); shared styles in `css/styles.css`; shared script in `js/main.js`; photos in `images/`.
- The header and footer are duplicated in every page. When you change one, update all pages.
- Favicons (`favicon.png`, `apple-touch-icon.png`) are made from the brand mark.

## Brand (source: `../../Pictures/TAS/TAS/Clients Master Folder/ExpectMoore/ExpectMooreMedia/Logos and Brand Kit/ExpectMooreMedia-Brand-Kit.zip`)
- Colors: Moore Blue `#4D63AE` (primary, buttons) · Moore Blue Dark `#3A4C8C` (hover) · Navy Blue `#1B2E5C` (text, header, dark sections) · Seafoam `#8ED6C1` (accent only: highlights and accents on Navy, never text on white) · Slate `#5B6275` (secondary text) · Blue Tint `#EEF0F8` (soft backgrounds) · Hairline `#D9DDEB` (borders). Defined as CSS variables at the top of `css/styles.css`.
- Type: **Helvetica Neue** for headlines (Bold), subheads (Light), and body (Regular), falling back to Inter from Google Fonts on non-Mac devices. **Poppins Medium** in letter-spaced caps for labels, buttons, and nav.
- Logos: use the supplied PNGs in `images/brand/` only. The header and footer are Navy, so they use the Reversed-Seafoam logo. Never retype, recolor, stretch, or add effects. Minimum width 150px (mark 40px); clear space equal to the height of the "E".
- Portfolio photos are resized copies (JPEG) of the user's own shoots in `../Pictures/TAS/TAS/Clients Master Folder/ExpectMoore/`.
- The contact form is set up for **Netlify Forms** (`data-netlify="true"`, hidden `form-name`, honeypot), posting to `thank-you.html`. `contact.html?service=drone` pre-checks a service.

## Version control rules (required)
1. Commit before making changes, so every change can be rolled back.
2. Commit each change separately with a clear message.
3. Never rewrite history without explicit approval.
4. Confirm before pushing to `main`.
