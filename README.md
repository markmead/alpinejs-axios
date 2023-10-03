# Alpine JS Axios

Alpine JS magic methods wrapper for Axios API methods 📨

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-axios@latest/dist/api.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-axios

npm install -D alpinejs-axios
```

```js
import Alpine from 'alpinejs'
import api from 'alpinejs-axios'

Alpine.plugin(api)

Alpine.start()
```

## Example

### GET

```html
<div x-data="{ productData: {} }">
  <button @click="productData = await $get('https://dummyjson.com/products/1')">
    Get
  </button>

  <pre x-text="JSON.stringify(productData, null, 2)"></pre>
</div>
```

### POST

```html
<div x-data="{ productData: {} }">
  <button
    @click="productData = await $post('https://dummyjson.com/products/add', { title: 'BMW Pencil' })"
  >
    Create
  </button>

  <pre x-text="JSON.stringify(productData, null, 2)"></pre>
</div>
```

### PUT/PATCH

```html
<div x-data="{ productData: {} }">
  <!-- You can also use $patch -->
  <button
    @click="productData = await $put('https://dummyjson.com/products/1', { title: 'iPhone Galaxy +1' })"
  >
    Update
  </button>

  <pre x-text="JSON.stringify(productData, null, 2)"></pre>
</div>
```

### DELETE

```html
<div x-data="{ productData: {} }">
  <button
    @click="productData = await $delete('https://dummyjson.com/products/1')"
  >
    Delete
  </button>

  <pre x-text="JSON.stringify(productData, null, 2)"></pre>
</div>
```

## Filtering the Response

A lot of the times you only need a property from the response object, this is
usually `data`. You'll see/write stuff like this:

```js
const { data } = axios.get('https://dummyjson.com/products/1')
```

With this package you can do that by adding `[data]` to the end of the URL.

```html
<div x-data="{ productData: {} }">
  <button
    @click="productData = await $get('https://dummyjson.com/products/1[data]')"
  >
    Get
  </button>

  <pre x-text="JSON.stringify(productData, null, 2)"></pre>
</div>
```

This works for all the requests and isn't limited to the `data` property.
Anything that is part of the response object can be used to filter the response.
For example, `[status]`.

_Heads up! Syntax is important, the filter property key must be place in square
brackets `[x]`._

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-axios)
![](https://img.shields.io/npm/v/alpinejs-axios)
![](https://img.shields.io/npm/dt/alpinejs-axios)
![](https://img.shields.io/github/license/markmead/alpinejs-axios)
