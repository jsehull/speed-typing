import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  // const [time, setTime] = useState(60)
  // const [wordCount, setWordCount] = useState(0)

  const handleChange = e => {
    const {value} = e.target

    setText(value)
    // setTime(() => {
    //   timer
    // })
  }
  console.log(text)

  // const countdownTimer = time => (
  //   setInterval(() => {
  //     // setTime(time--)
  //   }, 1000)
  // )

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleChange} />
      {/* <h4>Time Remaining: {countdownTimer(time)}</h4> */}
      <h4>Time Remaining: {handleChange}</h4>
      <button>Start</button>
      <h1>Word Count: 0</h1>
    </>
  )
}

export default App
