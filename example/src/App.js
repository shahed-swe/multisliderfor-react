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
