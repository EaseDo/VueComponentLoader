# vue-tsx-loader

A webpack loader to compiles ts to vue file and auto append template html

## Getting Started

To begin, you'll need to install vue-loader and vue-tsx-loader:

```npm install vue-loader vue-tsx-loader --save-dev```

##### or

```yarn add vue-loader vue-tsx-loader --save-dev```

Then add the loader to your webpack config. For example:

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        user: "vue-loader",
      },
      {
        test: /\.tsx$/,
        use: ["vue-loader", "vue-tsx-loader"],
      },
    ],
  },
};
```

## Example
##### app.html
```
<div>Component</div>
```

##### app.tsx
```
import { defineComponent } from 'vue';
import './app.less'

export default defineComponent({
    
})
```

## Jade Support

you'll need to install jade `npm install jade --save-dev` and rename app.html to app.jade

#####
webpack.config.js

```
{
  test: /\.tsx$/,
  use: ["vue-loader", "vue-tsx-loader?template=jade"],
}

```
vue-tsx-loader set options template=jade


