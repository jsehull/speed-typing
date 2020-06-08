import React, {useContext} from 'react'
import useProgram from './hooks/useProgram'
import ThemeButton from './ThemeButton'
import {ThemeContext} from './hooks/themeContext'

const App = () => {
  const {theme} = useContext(ThemeContext)
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
    <main className={`theme ${theme}-theme`}>
      <ThemeButton />
      <br />
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        ref={textareaRef}
        disabled={!isTimerOn} />
      <h4>Time remaining: {timer}/{startingTime}</h4>
      <button
        className="start"
        onClick={startProgram}
        disabled={isTimerOn}
      >
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </main>
  )
}

export default App
