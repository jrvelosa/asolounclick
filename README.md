
## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Documentation
The documentation for the Argon Design System Angular is hosted at our [website](https://demos.creative-tim.com/argon-design-system-angular/documentation/tutorial?ref=adsa-github-readme).


## File Structure
Within the download you'll find the following directories and files:

```
argon-design-system-angular
├── CHANGELOG.md
├── ISSUES_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── e2e
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── home
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   ├── home.component.ts
│   │   │   └── home.module.ts
│   │   ├── landing
│   │   │   ├── landing.component.html
│   │   │   ├── landing.component.scss
│   │   │   ├── landing.component.spec.ts
│   │   │   └── landing.component.ts
│   │   ├── login
│   │   │   ├── login.component.css
│   │   │   ├── login.component.html
│   │   │   ├── login.component.spec.ts
│   │   │   └── login.component.ts
│   │   ├── profile
│   │   │   ├── profile.component.html
│   │   │   ├── profile.component.scss
│   │   │   ├── profile.component.spec.ts
│   │   │   └── profile.component.ts
│   │   ├── sections
│   │   │   ├── alerts-section
│   │   │   │   ├── alerts-section.component.css
│   │   │   │   ├── alerts-section.component.html
│   │   │   │   ├── alerts-section.component.spec.ts
│   │   │   │   └── alerts-section.component.ts
│   │   │   ├── angular-section
│   │   │   │   ├── angular-section.component.css
│   │   │   │   ├── angular-section.component.html
│   │   │   │   ├── angular-section.component.spec.ts
│   │   │   │   └── angular-section.component.ts
│   │   │   ├── buttons-section
│   │   │   │   ├── buttons-section.component.css
│   │   │   │   ├── buttons-section.component.html
│   │   │   │   ├── buttons-section.component.spec.ts
│   │   │   │   └── buttons-section.component.ts
│   │   │   ├── crs-section
│   │   │   │   ├── crs-section.component.css
│   │   │   │   ├── crs-section.component.html
│   │   │   │   ├── crs-section.component.spec.ts
│   │   │   │   └── crs-section.component.ts
│   │   │   ├── inputs-section
│   │   │   │   ├── inputs-section.component.css
│   │   │   │   ├── inputs-section.component.html
│   │   │   │   ├── inputs-section.component.spec.ts
│   │   │   │   └── inputs-section.component.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.html
│   │   │   │   ├── modal.component.scss
│   │   │   │   ├── modal.component.spec.ts
│   │   │   │   └── modal.component.ts
│   │   │   ├── navigation-section
│   │   │   │   ├── navigation-section.component.css
│   │   │   │   ├── navigation-section.component.html
│   │   │   │   ├── navigation-section.component.spec.ts
│   │   │   │   └── navigation-section.component.ts
│   │   │   ├── nucleo-section
│   │   │   │   ├── nucleo-section.component.css
│   │   │   │   ├── nucleo-section.component.html
│   │   │   │   ├── nucleo-section.component.spec.ts
│   │   │   │   └── nucleo-section.component.ts
│   │   │   ├── sections.component.css
│   │   │   ├── sections.component.html
│   │   │   ├── sections.component.spec.ts
│   │   │   ├── sections.component.ts
│   │   │   ├── sections.module.ts
│   │   │   ├── tabs-section
│   │   │   │   ├── tabs-section.component.css
│   │   │   │   ├── tabs-section.component.html
│   │   │   │   ├── tabs-section.component.spec.ts
│   │   │   │   └── tabs-section.component.ts
│   │   │   ├── typography-section
│   │   │   │   ├── typography-section.component.css
│   │   │   │   ├── typography-section.component.html
│   │   │   │   ├── typography-section.component.spec.ts
│   │   │   │   └── typography-section.component.ts
│   │   │   └── versions-section
│   │   │       ├── versions-section.component.css
│   │   │       ├── versions-section.component.html
│   │   │       ├── versions-section.component.spec.ts
│   │   │       └── versions-section.component.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.scss
│   │   │       ├── navbar.component.spec.ts
│   │   │       └── navbar.component.ts
│   │   └── signup
│   │       ├── signup.component.html
│   │       ├── signup.component.scss
│   │       ├── signup.component.spec.ts
│   │       └── signup.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   ├── js
│   │   ├── scss
│   │   │   ├── angular
│   │   │   ├── argon.scss
│   │   │   ├── bootstrap
│   │   │   └── custom
│   │   └── vendor
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json

```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Reporting Issues

We use GitHub Issues as the official bug tracker for the Argon Design System Angular. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Argon Design System Angular. Check the CHANGELOG from your kit on our [website](https://www.creative-tim.com/?ref=ada-github-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/?ref=adsa-github-readme)

- Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)
