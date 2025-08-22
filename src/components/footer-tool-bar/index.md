# FooterToolbar Bottom toolbar

Toolbar fixed at the bottom。

## When to use

Fixed at the bottom of the content area，Does not move with the scroll bar，Often used for data collection and submission on long pages。

## Code demonstration

```html
<footer-tool-bar right="Extended information prompt">
  <a-button type="primary" @click="validate" :loading="loading">Submit</a-button>
</footer-tool-bar>
```
