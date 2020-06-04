import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const STARTING_TIME = 60

  const [text, setText] = useState('')
  const [timer, setTimer] = useState(STARTING_TIME)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textareaRef = useRef(null)

  const handleChange = e => {
    const {value} = e.target

    setText(value)
  }

  const startProgram = () => {
    setText('')
    setTimer(STARTING_TIME)
    setIsTimerOn(true)
    textareaRef.current.disabled = false
    textareaRef.current.focus()
  }

  const endProgram = () => {
    setIsTimerOn(false)
    getWordCount(text)
  }

  const getWordCount = text => {
    text === '' || null ? setWordCount(0) : setWordCount(text.match(/(\w+)/g).length)
  }

  useEffect(() => {
    if (timer > 0 && isTimerOn === true) {
      const timeout = setTimeout(() => {
        setTimer(time => time - 1)
      }, 1000)

      return () => clearTimeout(timeout)
    } else if(timer <= 0) {
      endProgram()
    }
  }, [isTimerOn, timer])

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        ref={textareaRef}
        disabled={!isTimerOn} />
      <h4>Time remaining: {timer}/{STARTING_TIME}</h4>
      <button
        onClick={startProgram}
        disabled={isTimerOn}
      >
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}

export default App
