# react-range-slider

> Package for react where you can make single and multi range slider easily. Easily usable and also able to modify styles customly

[![NPM](https://img.shields.io/npm/v/react-range-slider.svg)](https://www.npmjs.com/package/react-range-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-range-slider
```

## Usage

```jsx
import React, { useState } from 'react'

import 'react-range-slider/dist/index.css'
import Sliders from 'react-range-slider'

const App = () => {
  // for single range slider
  const [output, setOutput] = useState(10)


  // for multi range slider
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  
  return (
    <>
    {/* for single range slider */}
      <Sliders.SingleSlider setOutput={setOutput} />
      <div>{output}</div>



      {/* for multi range slider */}
      <Sliders.MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }) => { setMin(min); setMax(max); }}
      />
      <div>Min Value{min}</div>
      <div>Max Value{max}</div>
    </>

  )
}

export default App

```

## License

MIT © [Shahed](https://github.com/Shahed)
