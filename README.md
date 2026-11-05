# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Contact form email delivery

The contact form is sent by a Cloudflare Pages Function at
`functions/api/contact.ts`. It delivers enquiries to
`info@aasthafurniture.in` through the Resend email API.

To enable delivery in Cloudflare:

1. Add and verify `aasthafurniture.in` in Resend, and add its sending
   authentication records (such as SPF/DKIM) in Cloudflare. Keep the existing
   email-routing MX records intact. Email forwarding alone does not authorize
   outgoing email.
2. In the Cloudflare Pages project, add `RESEND_API_KEY` as a secret and
   `CONTACT_FROM_EMAIL` as an environment variable. Set the sender to an address
   on the verified domain, such as `Aastha Furniture <info@aasthafurniture.in>`.
   Add both variables to production and preview environments if both need to send.
3. Deploy the site as a Cloudflare Pages project with the repository root as the
   build directory and `dist` as the build output directory. Keep the top-level
   `functions` directory in the deployed repository so Cloudflare deploys the
   `/api/contact` function with the static site.
