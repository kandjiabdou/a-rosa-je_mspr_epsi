# vue3-image-uploader
Image loader for Vue 3, displays image previews and the ability to switch multiple modes

## Install

```bash
$ npm install --save vue3-image-uploader
```

```bash
$ yarn add vue3-image-uploader
```

## Using
```js
import { createApp } from 'vue'
import App from './App.vue'
import ImageUploader from 'vue3-image-uploader'

createApp(App)
  ...
  .component('ImageUploader', ImageUploader)
  .mount('#app')

```

In component
```js
import ImageUploader from 'vue3-image-uploader'

export default {
  ...
  components: { ImageUploader },
  ...
}
```
