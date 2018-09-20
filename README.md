# @pokkur/Forkme

Stick a 'Fork Me On GitHub' ribbon onto the page.  
> [demo](https://pokkur.github.io/forkme/)

## Setup

### npm

```js
import Forkme from '@pokkur/forkme'
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

## Next

- [ ] Light Color

# License

MIT © Pokkur
