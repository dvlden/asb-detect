# Android Stock-Browser Detect

**ASB-Detect** has only one purpose – to detect any **Android Stock-Browser** and redirect visitor to download _Google Chrome_ from the Android Market directly. There's simply no reason why anyone would use Stock-Browser that comes with older Android's, if there's _Google Chrome_ for those devices. _Google Chrome_ is default browser on **newer** Android devices...

## Installation (pick one)

- `npm i @dvlden/asb-detect`
- `pnpm i @dvlden/asb-detect`
- `yarn add @dvlden/asb-detect`


## Usage

```typescript
import { asb } from '@dvlden/asb-detect'

asb.detect()
```

## Options

You can write your own logic for detection with access to `isStock` property.

```typescript
if (asb.isStock) {
  // do something...
}
```

You can pass an optional message to the `detect()` function. If you want to omit the default one.

```typescript
asb.detect('Your custom message, instead?')
```
