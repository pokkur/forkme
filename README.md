# @pokkur/Forkme

Stick a 'Fork Me On GitHub' ribbon onto the page.

## Setup

### npm

```js
import forkme from '@pokkur/forkme'
```

or

### browser

```html
<script src="https://cdn.jsdelivr.net/npm/@pokkur/forkme@latest/dist/forkme.min.js"></script>
```

## Usage

```js
const Ribbon = new Forkme('pokkur/forkme', 'right')
```

### You can add Forkme custom style

```scss
[class^="forkme--"] {
    &:hover {
        opacity: .1 !important;
        color: yellow !important;
    }
}
```

# License

MIT © Pokkur
