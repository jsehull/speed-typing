import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  // const [time, setTime] = useState(60)
  const [wordCount, setWordCount] = useState(0)

  const handleChange = e => {
    const {value} = e.target

    setText(value)
    // setTime(() => {
    //   timer
    // })
  }

  // const countdownTimer = time => (
  //   setInterval(() => {
  //     // setTime(time--)
  //   }, 1000)
  // )

  const getWordCount = text => {
    text === '' || null
      ? setWordCount(0)
      : setWordCount(text.match(/(\w+)/g).length)
  }

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text} />
      {/* <h4>Time Remaining: {time}</h4> */}
      <button onClick={() => getWordCount(text)}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}

export default App
