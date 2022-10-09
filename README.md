<a href="https://github.com/tanstack/table" target="\_parent">
  <img alt="" src="https://img.shields.io/github/stars/matsmello/react-mobile-animated-banner.svg?style=social&label=Star" />
</a>
<a href="https://twitter.com/msmello_" target="\_parent">
  <img alt="" src="https://img.shields.io/twitter/follow/msmello_.svg?style=social&label=Follow" />
</a>
<a href="https://www.linkedin.com/in/matheus-da-silveira-mello/" target="\_parent">
  <img alt="" height="19" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

### React-mobile-animated-banner

This react component allows you to add the mobile banner to your application. It is really helpful when you need to refer your mobile application from your website.
### Contents
- [React-mobile-animated-banner](#react-mobile-animated-banner)
- [Contents](#contents)
- [Support](#support)
- [Preview](#preview)
- [How to install?](#how-to-install)
- [How to use it?](#how-to-use-it)
- [Available options](#available-options)
- [Goals](#goals)
- [More Preview](#more-preview)

### Support
If you need any support or want to suggest improvements to the react-mobile-animated-banner repository, please open an issue at issues section or contact me via [LinkedIn](https://www.linkedin.com/in/matheus-da-silveira-mello/).

### Preview

![Showing the preview of the react-mobile-animated-banner using horizontal iPhone XR ](src/assets/images/iphone_top_horizontal.png 'Horizontal iPhone XR')

### How to install?
Using yarn:
```
yarn add react-mobile-animated-banner
```

Using NPM:
```
npm install react-mobile-animated-banner
```

### How to use it?

```
import { GetTheAppBanner } from 'react-mobile-animated-banner';

function YourApp() {
  return (
    ...
      <GetTheAppBanner />
    ...
    )
}
```

### Available options
**Here you will find all options available for the `GetTheAppBanner` component. Available options are:**

```
hideBannerInitialValue?: boolean
defaultValue = undefined;
```
  It will hide the banner if the value is set to `true`
___

```
onlyIOS?: boolean
defaultValue = false;
```
  It will render the component only on IOS devices

___
```
onlyAndroid?: boolean
defaultValue = false;
```
It will render the component only on Android devices
___
```
onlyOnMobile?: boolean
defaultValue = false;
```
It will render the component only on Android or iOS devices
___

```
reviewText?: string
defaultValue = '200+ reviews';
```
It will change the text on the right side of the stars
___
```
closeIcon?: string
defaultValue = 'image closing icon';
```
It will change the image used to render the `X` icon
___
```
appLogo?: string
defaultValue = 'image youtube logo';
```
It will change the image used to render the app logo
___
```
companyLogo?: string
defaultValue = 'image youtube company logo';
```
It will change the image used to render the company logo
___
```
appRating?: string
defaultValue = 'image of some stars filled';
```
It will change the image used to render the reviews rating
___

```
buttonLabel?: string
defaultValue = 'Get the App';
```
It will change the button CTA label
___

```
startFrom?: 'top' | 'bottom'
defaultValue = 'top';
```
It will render the banner on the top or bottom of the screen.
___

```
maxWidth?: number
defaultValue = undefined;
```
It will render the banner until the user device width is lower than `maxWidth`
___
```
universalLink?: string
defaultValue = '';
```
It will redirect the user to this link
___
```
onClosingCallback?: () => void
defaultValue = undefined;
```
It will call after closing the banner component
___
```
onMountingCallback?: () => void
defaultValue = undefined;
```
It will call after mounting the banner component
___
```
onCTACallback?: () => void
defaultValue = undefined;
```
It will call when the user clicks on the CTA button

### Goals

- [x] Adding props to render only on iOS.
- [x] Adding props to render only on Android.
- [x] Adding props to render only in a specific screen width range, lower than X to Z.
- [x] Adding props to accept app logo, company logo, custom reviews, custom stars, CTA label.
- [ ] Adding props to accept custom numbers of stars.
- [x] Adding props to render on top or bottom of the screen
- [x] Adding props to render only for mobile devices.
- [ ] Adding props to accept custom styles on all different components.
- [ ] Adding animation to fade in and out, slide in up/right/left/down.
- [ ] Retrieving app information from the app stores instead of being only hardcoded.
- [x] Adding onClosing, onCTA and onComponentDidMount callback.
- [x] Adding documentation for each prop.
- [x] Creating and populating the README.md file.
- [ ] Adding tests.

### More Preview
<div align="center">

![Showing the preview of the react-mobile-animated-banner on the top side using iPhone XR ](src/assets/images/iphone_top.png 'iPhone XR')

*iPhone XR with the react-mobile-animated-banner on top side*

___

![Showing the preview of the react-mobile-animated-banner on the bottom side using iPhone XR ](src/assets/images/mobile_bottom.png 'iPhone XR')

*iPhone XR with the react-mobile-animated-banner on bottom side*

___

![Showing the preview of the react-mobile-animated-banner on the top side using an IPad Air](src/assets/images/tablet_top.png 'IPad Air')

*IPad Air with the react-mobile-animated-banner on top side*


</div>