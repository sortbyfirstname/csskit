<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="static/csskit-white.svg">
        <source media="(prefers-color-scheme: light)" srcset="static/csskit.svg">
        <img alt="CSSkit logo" src="static/csskit.svg" height="250">
    </picture>
</p>

CSSKit is a toolbox for stylesheets. The purpose of this is to provide ways to get manipulate and visualise parts of your CSS. This has been built very much from the perspective of a having a lot of large, legacy stylesheets. The project is a work in progress and very early in development, the existing tools will be extended and new tools will be added, as well as general improvements made to the site as and when I get time.

<br/>

<p align="center" >
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="static/rainbow-white.svg">
        <source media="(prefers-color-scheme: light)" srcset="static/rainbow.svg">
        <img alt="CSSkit logo" src="static/rainbow.svg" height="50">
    </picture>
</p>

## [Beta] Rainbow

Rainbow takes all the colours (Hex, RGB and HSL) from your uploaded stylesheets and present them as dots on the screen. This is useful to visualise your "colour stack" and have an easy way to share it with interested parties.

### Ideas for future development:

- ~~Extend validation on colours~~ | Done
- Support named colours
- ~~Support alpha channels on colours~~ | Done
- Add the ability to download a visualisation of the colours (PDF or image)
- Add the ability to change how the colours are visualised, maybe as a rainbow for starters

<br/>

<p align="center" >
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="static/coco-white.svg">
        <source media="(prefers-color-scheme: light)" srcset="static/coco.svg">
        <img alt="CSSkit logo" src="static/coco.svg" height="50">
    </picture>
</p>

## CoCo - Contextless Comments

CoCo is a very simple tool the extracts and displays all comments found in your stylesheets, with a total count. The comments are displayed without any context in regards to where they are in the stylesheet, hence the name. This tool was only created as a side effect of creating the comment parser really, but hey, someone may find it useful.

## [Coming soon] Propper

Propper will be able to replace all the colours found in your CSS with custom properties (aka CSS variables), present you with an editable list of the custom properties, and then allow you to download your CSS with the replaced custom properties and your new stylesheet containing your custom properties.

This is to provide an easy way to manage colours across a large number of stylesheets, and extend how you need to going.

---

## Technologies used

<p align="center" >
    <a href="https://github.com/sveltejs/svelte">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="static/ext/svelte-logo-text-white.svg">
            <source media="(prefers-color-scheme: light)" srcset="static/ext/svelte-logo-text.svg">
            <img alt="Svelte logo" src="static/svelte-logo-text.svg" height="50">
        </picture>
    </a>
    <br/>
    <a href="https://github.com/microsoft/TypeScript">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="static/ext/typescript-logo-text-white.svg">
            <source media="(prefers-color-scheme: light)" srcset="static/ext/typescript-logo-text.svg">
            <img alt="TypeScript logo" src="static/typescript-logo-text.svg" height="50">
        </picture>
    </a>
    <br/>
    <a href="https://github.com/colinhacks/zod">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="static/ext/zod-logo-text-white.svg">
            <source media="(prefers-color-scheme: light)" srcset="static/ext/zod-logo-text.svg">
            <img alt="Zod logo" src="static/zod-logo-text.svg" height="50">
        </picture>
    </a>
    <br/>
    <a href="https://github.com/tailwindlabs/tailwindcss">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="static/ext/tailwindcss-logo-text-white.svg">
            <source media="(prefers-color-scheme: light)" srcset="static/ext/tailwindcss-logo-text.svg">
            <img alt="TailwindCSS logo" src="static/tailwindcss-logo-text.svg" height="50">
        </picture>
    </a>
    <br/>
    <a href="https://github.com/saadeghi/daisyui">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="static/ext/daisyui-logo-text-white.svg">
            <source media="(prefers-color-scheme: light)" srcset="static/ext/daisyui-logo-text.svg">
            <img alt="DaisyUI logo" src="static/daisyui-logo-text.svg" height="50">
        </picture>
    </a>
    <br/>
    <a href="https://github.com/vitejs/vite">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="static/ext/vite-logo-text-white.svg">
            <source media="(prefers-color-scheme: light)" srcset="static/ext/vite-logo-text.svg">
            <img alt="Vite logo" src="static/vite-logo-text.svg" height="50">
        </picture>
    </a>
</p>

This project also uses [ColorTranslator](https://github.com/elchininet/ColorTranslator) to convert parsed colours to HSL for effective deduping.

---

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
