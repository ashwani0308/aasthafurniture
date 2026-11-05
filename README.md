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
`iamashwanisharma@gmail.com` through the Resend email API.

To enable delivery in Cloudflare:

1. In the Cloudflare Pages project, add `RESEND_API_KEY` as a secret using a
   Resend API key. Add it to production and preview environments if both need
   to send. Never put the key in source code.
2. The function currently uses Resend's `onboarding@resend.dev` sender, which
   is intended for testing and may only deliver to a recipient verified in
   your Resend account. For regular delivery, verify your own domain in Resend,
   configure its sending authentication records, and change the `from` address
   in `functions/api/contact.ts` to an address on that domain.
3. Deploy the site as a Cloudflare Pages project with the repository root as the
   build directory and `dist` as the build output directory. Keep the top-level
   `functions` directory in the deployed repository so Cloudflare deploys the
   `/api/contact` function with the static site.
4. After adding or changing the secret, trigger a new production deployment.

If a submission fails, the form now displays the server's configuration error.
For other provider errors, check the Cloudflare Pages function logs and Resend's
email logs for the matching submission time.
