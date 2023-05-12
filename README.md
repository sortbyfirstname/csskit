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

## Rainbow

Rainbow takes all the colours (Hex, RGB and HSL) from your uploaded stylesheets and present them as dots on the screen. This is useful to visualise your "colour stack" and have an easy way to share it with interested parties.

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

<br/>

<p align="center" >
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="static/nanonow-white.svg">
        <source media="(prefers-color-scheme: light)" srcset="static/nanonow.svg">
        <img alt="CSSkit logo" src="static/nanonow.svg" height="50">
    </picture>
</p>

## nanonow

nanonow (na▪no▪now) is a simple, pre-configured, portable way to minify your CSS. The tool uses postcss + cssnano to perform the minification, using preset configuration provided by cssnano.

<br/>

<p align="center" >
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="static/remmy-white.svg">
        <source media="(prefers-color-scheme: light)" srcset="static/remmy.svg">
        <img alt="CSSkit logo" src="static/remmy.svg" height="50">
    </picture>
</p>

## Remmy

Remmy is a tool that converts the pixel and point values found in your stylesheets to rem values, and returns you a downloadable converted stylesheet. This is useful if you are aiming to start introducing responsiveness into a legacy app, as incrementally introducing responsiveness with rem values when amongst pixel and point values can cause more harm than good.

<br />

---

<br />

## [Coming soon] Propper

Propper will be able to replace all the colours found in your CSS with custom properties (aka CSS variables), present you with an editable list of the custom properties, and then allow you to download your CSS with the replaced custom properties and your new stylesheet containing your custom properties.

This is to provide an easy way to manage colours across a large number of stylesheets, and extend how you need to going.

<br />

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

This project also uses:
- [ColorTranslator](https://github.com/elchininet/ColorTranslator) to convert parsed colours to HSL for effective deduping
- [cssnano](https://github.com/cssnano/cssnano) to perform CSS minification in the nanonow tool
- [PostCSS](https://github.com/postcss/postcss) for the app itself as well as running the minification as a plugin in the nanonow tool

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
