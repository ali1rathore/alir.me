# Ali Rathore - Hugo Website

This is the Hugo version of Ali Rathore's AI consulting website.

## Structure

```
hugo-site/
├── content/           # Markdown content files
│   └── _index.md     # Homepage content
├── layouts/          # Template files
│   ├── _default/     # Default templates
│   │   └── baseof.html
│   ├── partials/     # Reusable components
│   │   ├── navigation.html
│   │   ├── footer.html
│   │   ├── expertise.html
│   │   ├── services.html
│   │   ├── portfolio.html
│   │   └── contact.html
│   └── index.html    # Homepage template
├── static/           # Static assets
│   ├── css/         # Stylesheets
│   │   └── styles.css
│   └── js/          # JavaScript files
│       └── script.js
└── hugo.toml        # Hugo configuration
```

## Development

To run the development server:

```bash
cd hugo-site
hugo server -D
```

The site will be available at http://localhost:1313 (or another port if 1313 is in use).

## Building for Production

To build the static site:

```bash
hugo
```

The built site will be in the `public/` directory.

## Deployment

To deploy the site, upload the contents of the `public/` directory to your web server or hosting service.

## Features

- **Responsive Design**: Mobile-first responsive layout
- **AI-focused Content**: Showcasing AI consulting services
- **Portfolio Section**: Highlighting completed projects
- **Contact Form**: Lead generation form
- **Modern Animations**: Smooth transitions and effects

## Configuration

Main configuration is in `hugo.toml`. Update the `baseURL` when deploying to production:

```toml
baseURL = 'https://alir.me/'
```

## Content Management

- To modify the homepage sections, edit the partials in `layouts/partials/`
- To add new pages, create markdown files in the `content/` directory
- Static assets (CSS, JS, images) go in the `static/` directory