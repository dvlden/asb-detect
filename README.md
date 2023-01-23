# Android Stock-Browser Detect

![GitHub package.json version](https://img.shields.io/github/package-json/v/dvlden/asb-detect?color=86c7ff&style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@dvlden/asb-detect?color=%2386c7ff&style=flat-square)

**ASB-Detect** has only one purpose – to detect any **Android Stock-Browser** and redirect visitor to download _Google Chrome_ from the Android Market directly. There's simply no reason why anyone would use Stock-Browser that comes with older Android's, if there's _Google Chrome_ for those devices. _Google Chrome_ is default browser on **newer** Android devices...

<br>

## Installation

Use your favourite package manager... In my case that's `pnpm`.

```bash
pnpm i @dvlden/asb-detect
```

<br>

## Usage

**Browser**

```ts
import { asb } from '@dvlden/asb-detect'

asb.detect()
```

**Node**

```ts
const { asb } = require('@dvlden/asb-detect')

asb.detect()
```

<br>

## Options

You can write your own logic for detection with access to `isStock` property.

```ts
if (asb.isStock) {
  // do something...
}
```

You can pass an optional message to the `detect()` function. If you want to omit the default one.

```ts
asb.detect('Your custom message, instead?')
```
