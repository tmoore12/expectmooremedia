# AGENTS.md

Guidance for AI agents working on this repo.

## Project
Plain HTML/CSS marketing site for **ExpectMoore Media**, a West Michigan digital media company: real estate photography and videography, drone photo and video, website development, audio production, podcast production, and content creation.

- No build step, frameworks, or dependencies. Pages are `*.html` at the repo root (`index`, `services`, `portfolio`, `about`, `contact`, `thank-you`); shared styles in `css/styles.css`; shared script in `js/main.js`; photos in `images/`.
- The header and footer are duplicated in every page. When you change one, update all pages.
- Fonts: Montserrat (headings) and Inter (body) from Google Fonts. Accent blue `#4A5DB8` matches the ExpectMoore family brand.
- The logo is a text wordmark with an "EM" circle until a real logo file is supplied.
- Portfolio photos are resized copies (JPEG) of the user's own shoots in `../Pictures/TAS/TAS/Clients Master Folder/ExpectMoore/`.
- The contact form is set up for **Netlify Forms** (`data-netlify="true"`, hidden `form-name`, honeypot), posting to `thank-you.html`. `contact.html?service=drone` pre-checks a service.

## Version control rules (required)
1. Commit before making changes, so every change can be rolled back.
2. Commit each change separately with a clear message.
3. Never rewrite history without explicit approval.
4. Confirm before pushing to `main`.
