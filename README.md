<p align="center">
    <img src="https://www.csskit.dev/csskit.svg" height="250" />
</p>

CSSKit is a toolbox for stylesheets. The purpose of this is to provide ways to get manipulate and visualise parts of your CSS. This has been built very much from the perspective of a having a lot of large, legacy stylesheets. The project is a work in progress and very early in development, the existing tools will be extended and new tools will be added, as well as general improvements made to the site as and when I get time.

<br/>

<p align="center" >
    <img src="https://www.csskit.dev/rainbow.svg" height="50" />
</p>

## [Beta] Rainbow

Rainbow takes all the colours (Hex, RGB and HSL) from your uploaded stylesheets and present them as dots on the screen. This is useful to visualise your "colour stack" and have an easy way to share it with interested parties.

### Ideas for future development:

- Extend validation on colours
- Support more colour types (eg. named colours)
- Support alpha channels on colours
- Add the ability to download a visualisation of the colours (PDF or image)
- Add the ability to change how the colours are visualised, maybe as a rainbow for starters

## [Coming soon] Propper

Propper will be able to replace all the colours found in your CSS with custom properties (aka CSS variables), present you with an editable list of the custom properties, and then allow you to download your CSS with the replaced custom properties and your new stylesheet containing your custom properties.

This is to provide an easy way to manage colours across a large number of stylesheets, and extend how you need to going.

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
