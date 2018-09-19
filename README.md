# @pokkur/Forkme

Stick a 'Fork Me On GitHub' ribbon onto the page.

## Usage

### npm

```js
import forkme from '@pokkur/forkme'
```

or

### browser

```html
<script src="https://cdn.jsdelivr.net/npm/@pokkur/forkme@1.0.1/dist/forkme.min.js"></script>
```

```js
const Ribbon = new Forkme('pokkur/forkme', 'right')
```

### You can add Forkme custom style

```css
[class^="forkme--"] {
    &:hover {
        opacity: .1 !important;
        color: yellow !important;
    }
}
```

# License

MIT © Pokkur
