import React, { useState, useEffect } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const [timer, setTimer] = useState(2)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const handleChange = e => {
    const {value} = e.target

    setText(value)
  }

  const startProgram = () => {
    setText('')
    setIsTimerOn(true)
  }

  useEffect(() => {
    if (timer > 0 && isTimerOn === true) {
      const timeout = setTimeout(() => {
        setTimer(time => time - 1)
      }, 1000)

      return () => clearTimeout(timeout)
    } else if(timer === 0 ) {
      setIsTimerOn(false)
      getWordCount(text)
    }
  }, [isTimerOn, timer])

  const getWordCount = text => {
    text === '' || null ? setWordCount(0) : setWordCount(text.match(/(\w+)/g).length)
  }

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text} />
      <h4>Time remaining: {timer}</h4>
      <button onClick={startProgram}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}

export default App
