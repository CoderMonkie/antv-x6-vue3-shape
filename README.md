# @antv/x6-vue-shape

> x6 shape for rendering vue3 components

based from [x6-vue-shape](https://github.com/antvis/X6/tree/master/packages/x6-vue-shape), removed `vue-demi` for pure vue3 environment.

## Installation

```shell
# npm
$ npm install antv-x6-vue-shape --save

# yarn
$ yarn add antv-x6-vue-shape
```

## Usage

```ts
import { Graph } from '@antv/x6'
import 'antv-x6-vue-shape'
import HelloWord from './HelloWord.vue'

// render
graph.addNode({
  shape: 'vue-shape',
  x: 32,
  y: 48,
  width: 180,
  height: 40,
  component: {
    template: `<hello-world :name="name"></hello-world>`,
    data() {
      return {
        name: 'x6',
      }
    },
    components: {
      HelloWorld,
    },
  },
})
```
