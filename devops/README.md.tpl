# native-x-icon

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Icon package

## Install

### Yarn

```sh
yarn add native-x-icon
```

### NPM

```sh
npm install native-x-icon
```

## Usage

```tsx
import { HomeOutlineIcon } from 'native-x-icon'

function MyComponent() {
return (
<Stack>
  ...
  <HomeOutlineIcon />
  ...
</Stack>
)
}
```

## API

| Property | Default Value | Usage |
| --------------------- | --------------- |
-------------------------------------------------------------------------------------------------- |
| color?: string | COLOR.SECONDARY | Color of the icon |
| size?: Size or number | 'normal' | Valid values: 'xx-small', 'x-small', 'small', 'normal',
'large', 'x-large', 'xx-large' or a number |

## List of Icon
| Icon | Component
| ---- | ---------------
{{#icons}}
| ![{{iconName}}](./icons/{{iconName}}.svg) | `<{{componentName}} />`
{{/icons}}


## Automatic Release

Here is an example of the release type that will be done based on a commit messages:

| Commit message | Release type |
| ------------------- | --------------------- |
| fix: [comment] | Patch Release |
| feat: [comment] | Minor Feature Release |
| perf: [comment] | Major Feature Release |
| doc: [comment] | No Release |
| refactor: [comment] | No Release |
| chore: [comment] | No Release |