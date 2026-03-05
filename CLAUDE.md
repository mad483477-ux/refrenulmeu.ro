# RefrenulMeu.ro — Project Rules

## Identity
- **Brand:** RefrenulMeu.ro
- **Product:** Melodii personalizate generate instant cu AI
- **Market:** România, 100% limba română
- **Tone:** Premium dar cald. Direct, orientat pe emoție și viteză. NU corporate, NU cringe, NU exagerat. Vorbește ca un prieten care știe ce face.

## Design System
- **Background:** #0a0a0a (dark premium)
- **Text primary:** #fafafa
- **Text secondary:** #a0a0a0
- **Accent primary:** #7C3AED (violet/purple)
- **Accent hover:** #6D28D9 (violet darker)
- **Accent secondary:** #D4A843 (gold — for prices, CTAs, highlights)
- **Success:** #22C55E
- **Error:** #EF4444
- **Cards/surfaces:** #141414 or #1a1a1a with subtle border #2a2a2a
- **Font:** Inter (Google Fonts) — load weights 400, 500, 600, 700
- **Border radius:** 12px for cards, 8px for buttons, 50px for pills/badges
- **Max content width:** 1200px centered
- **Mobile-first:** Always. Breakpoints: 640px, 768px, 1024px, 1200px

## Frontend Rules
- **ALWAYS invoke the frontend-design skill before writing any frontend code. Every session. No exceptions.**
- Single file HTML+CSS+JS for landing page (index.html) and composition page (compunere.html)
- Use CSS custom properties (variables) for all colors — define them in :root
- Animations: subtle fade-in on scroll using IntersectionObserver. No heavy libraries.
- Smooth scroll between sections
- All images use lazy loading
- Forms: floating labels, inline validation with colored borders (green success, red error)
- Buttons: always have hover states with smooth transitions (0.3s ease)
- No external CSS frameworks (no Bootstrap, no Tailwind CDN). Write clean custom CSS.
- Use semantic HTML5 elements (header, nav, main, section, footer)
- Accessibility: proper aria labels, contrast ratios, focus states on interactive elements

## Screenshot Workflow
- Use Puppeteer to take screenshots after building/modifying the site
- Save screenshots to `/temp_screenshots/` folder
- After initial build: do 2 rounds of screenshot review comparing output vs intended design
- Name screenshots descriptively: `hero-section.png`, `form-section.png`, `mobile-view.png`
- For animated elements (progress bars, waveforms): SKIP screenshot comparison — just code it and let me review manually
- Delete old screenshots before starting a new review cycle

## Content Rules
- ALL copy in Romanian (limba română). No English anywhere on the site.
- Use Romanian diacritics correctly: ă, â, î, ș, ț
- Currency: always "lei" (e.g., "39.99 lei"), never RON in customer-facing text
- Phone format: 07XX XXX XXX
- Don't use emojis in body text. Emojis allowed only in: trust bar icons, section headers, feature highlights
- Testimonials should feel real — use Romanian first names with city, not full names
- FAQ answers should be concise (2-3 sentences max), not paragraphs

## Product Logic
- Base price: 39.99 lei (melodie personalizată)
- Custom lyrics addon: +10 lei (checkbox toggle)
- Dedication addon (only when style = "Manele"): variable pricing per dedication
  - 10 lei paid → "s-a primit 100 lei" in song
  - 20 lei paid → "s-a primit 500 lei" in song
  - 50 lei paid → "s-a primit 1.000 lei" in song
  - 100 lei paid → "s-a primit 5.000 lei" in song
- Multiple dedications allowed (additive)
- Total price = base + custom lyrics (if checked) + sum of dedications
- Price display updates live as user toggles options
- Musical styles: Pop, R&B, Trap, Latino, Manele, Disco, House
- Tones: Vesel, Romantic, Emoțional, Nostalgic, Energic, De petrecere

## File Structure
```
/refrenulmeu
  CLAUDE.md              ← this file
  /public
    index.html           ← main landing page (single file)
    compunere.html       ← composition progress page + audio player
    termeni.html         ← Terms & Conditions
    confidentialitate.html ← Privacy Policy (GDPR)
    cookies.html         ← Cookie Policy
    retur.html           ← Refund Policy
  /brand_assets
    brand.md             ← brand description for reference
  /emails
    confirmare-livrare.html
    followup.html
  /n8n
    workflow-complet.json
  /temp_screenshots      ← screenshots for review (gitignored)
  vercel.json
  .gitignore
  README.md
```

## Git & Deploy
- Test everything on localhost first
- NEVER push to GitHub unless I explicitly say "push to GitHub" or "deploy"
- Commit messages in English, concise, descriptive (e.g., "Add dedication pricing UI to order form")
- .gitignore must include: temp_screenshots/, node_modules/, .env, .DS_Store

## What NOT To Do
- Don't use Lorem Ipsum. Always write real Romanian copy.
- Don't use stock photo placeholder URLs. Use CSS gradients or solid colors for placeholder images.
- Don't add features I didn't ask for.
- Don't over-engineer. This is an MVP. Simple, clean, functional.
- Don't use npm packages unless absolutely necessary. Vanilla HTML/CSS/JS preferred.
- Don't create separate CSS or JS files. Keep it single-file per page.
- Don't use alert() for validation. Use inline visual feedback.
- Don't hardcode Stripe keys or API endpoints. Use placeholder comments like `<!-- STRIPE_KEY_HERE -->`.
