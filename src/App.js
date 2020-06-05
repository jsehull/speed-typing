import React from 'react'
import useProgram from './hooks/useProgram'

const App = () => {
  const {
    handleChange,
    text,
    textareaRef,
    isTimerOn,
    timer,
    startingTime,
    startProgram,
    wordCount
  } = useProgram(5)

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        ref={textareaRef}
        disabled={!isTimerOn} />
      <h4>Time remaining: {timer}/{startingTime}</h4>
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
