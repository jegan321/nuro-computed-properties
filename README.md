# nuro-computed-properties

A plugin for Nuro that allows you to easily create computed proprties that won't re-compute for the same inputs

## Install
```bash
npm install nuro-computed-properties
```
or
```html
<script src="path/to/nuro-computed-properties.js"></script>
```

## Usage
First install NuroComputedProperties as a plugin
```js
import { NuroComputedProperties } from 'nuro-computed-properties'
Nuro.install(NuroComputedProperties)
```

Then create a computed property in your `beforeMount` hook
```js
class App {
  first = 'John'
  last = 'Smith'
  $template = `
    <div>
      {{ fullName() }}
    </div>
  `
  beforeMount() {
    this.fullName = this.$computed(function() {
      return 'Mr. ' + this.last + ', ' + this.first
    })
  }
}
```

Now the fullName value will only be calculated once for 'John' and 'Smith' even on subsequent renders. But if first is changed to 'Joseph' then the compute function will run again.