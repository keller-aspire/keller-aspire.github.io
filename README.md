# ASPIRE Lab Website
[Live Site Here](aspirelab.co)

## Theme: Titan Core - Modern Astro Theme
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Titan Core** is a high-performance, feature-rich theme for Astro JS, designed for modern websites, blogs, and portfolios. With beautiful UI components, multiple theme options, and a focus on performance, Titan Core helps you build stunning websites quickly.

[Live Demo](https://titan-core.netlify.app)

[Github Repo](https://github.com/rspisarski/titan-core)

## Site Editing

```bash
# clone this repository
git clone https://github.com/keller-aspire/keller-aspire.github.io.git keller-aspire.github.io
cd keller-aspire.github.io
npm install
npm run dev
Ctrl + C (to exit)
```

Push changes to main to update on live site

## 📁 Project Structure

```
/
├── public/             # Static assets
│   └── favicon.ico
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # UI components
│   │   ├── blog/       # Blog-specific components
│   │   ├── forms/      # Form components
│   │   ├── icons/      # Icon components
│   │   ├── sections/   # Page section components
│   │   ├── team/       # Team components
│   │   └── ui/         # Basic UI components
│   ├── content/        # Content collections (easily editable markdown)
│   ├── data/           # Configuration and data files
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page routes (edit page layouts and content in HTLM/Astro)
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
└── package.json
```

## ⚙️ Configuration

Customize your site by editing the configuration files in the `src/data/` directory:

- `config.ts` - Site-wide configuration including company info and SEO settings
- `menu.ts` - Navigation menu structure
- `features.ts` - Feature section content
- `faqs.ts` - FAQ content
- `logos.ts` - Partner/client logos
- `stats.ts` - Statistics display data
- `categories.ts` - Blog categories

## 🎨 Theming

Titan Core comes with 10 beautiful pre-configured themes inspired by Greek mythology. Developers can choose a single theme for their site by editing the `themeSetting` object in `src/data/config.ts`:

```typescript
export const themeSetting = {
  theme: 'zeus' // Choose one of the 10 available themes
}
```

### Available Themes:

1. `zeus` - Sky & Thunder theme
2. `poseidon` - Ocean & Seas theme
3. `hades` - Underworld theme
4. `apollo` - Sun & Light theme
5. `artemis` - Moon & Hunt theme
6. `ares` - War & Fire theme
7. `athena` - Wisdom theme
8. `hermes` - Speed theme
9. `dionysus` - Festivity theme
10. `demeter` - Nature theme
11. `aspire` – Custom ASPIRE Lab Theme

### Removing the Theme Switcher

By default, Titan Core includes a theme switcher component that allows users to change themes. For projects where you want to use a single consistent theme, you can remove the theme switcher by:

1. Open `src/layouts/Layout.astro`
2. Remove or comment out the ThemeSwitcher import:
   ```astro
   // Remove this line
   import ThemeSwitcher from "../components/ThemeSwitcher.astro";
   ```
3. Remove the ThemeSwitcher component from the body:
   ```astro
   <body data-theme={theme}>
     <Header />
     <slot />
     <Footer footerCta={footerCta} />
     <!-- Remove this line -->W
     <ThemeSwitcher />
     
     <script>
       import AOS from 'aos';
       AOS.init({
         duration: 800,
         once: true,
       });
     </script>
   </body>
   ```

This will ensure your site uses only the theme specified in your configuration.

## 📝 Content Management

Titan Core uses Astro's content collections for blog posts and other content. Add your content to the `src/content/` directory.

## 🧩 Components

Titan Core includes a wide range of components:

- **Layout Components**: Hero, Features, Split Panel, CTA Banner, etc.
- **UI Components**: Buttons, Forms, Cards, etc.
- **Blog Components**: Post cards, category pills, etc.
- **Team Components**: Team grid, member cards, etc.

## 🛠️ Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                            |
| `npm run dev`          | Start local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

- Built with [Astro](https://astro.build)
- Animations by [AOS](https://michalsnik.github.io/aos/)
- Icons from [Lucide](https://lucide.dev)
