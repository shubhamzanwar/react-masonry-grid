# react masonry grid

![downloads](https://img.shields.io/npm/dm/react-masonry-grid.svg) ![version](https://img.shields.io/npm/v/react-masonry-grid) ![size](https://img.shields.io/bundlephobia/min/react-masonry-grid)

This helpful little package allows you to easily render masonry(space-efficient) grids using react.

> **What** is a masonry grid?

<sub>Have a look :D</sub>

![masonry grid](https://raw.githubusercontent.com/shubhamzanwar/react-masonry-grid/master/docs/masonry.png)

#### Demo:

Clone this repo and run the following:

```shell
npm install
```

To see the demo for images in the grid:

```shell
npm run demo:images
```

To see the demo for textual content:

```shell
npm run demo:text
```

#### Installation

This package is availanle as a npm module. To install it:

```shell
npm install react-masonry-grid
```

#### Usage

Use it in your app

```js

const images = [
    'https://media0.giphy.com/media/i67uIY4a61ejm/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
    'https://media1.giphy.com/media/Z5W9H5DtCWN4k/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
    'https://media3.giphy.com/media/443jTSLWYgLJQysB1z/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
    'https://media3.giphy.com/media/SVqgwI1EIrjLfZyyfD/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif',
    'https://media0.giphy.com/media/iCiyEytDbvR62GFfbb/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif'
]

<Grid gutter={10} columnWidth={200} rowHeight={10}>
    {images.map((image) => (
        <GridItem>
            <img src={image} {{width: '100%' }}/>
        </GridItem>
    ))}
</Grid>
```

### Props

The `Grid` component takes the following props:

- `gutter`: The gap, in `px`,  between each row and each column of the grid
- `columnWidth`: The width, in `px`, of each individual column
- `rowHeight`: The height, in `px`, of each row.
**Note**: Each `GridItem` may span multiple rows. `rowHeight` is the minimum height of one such row.

The `GridItem` component takes no props but is needed to be used as it watches its children and recalculates it's height whenever the children load.

