import { useState, useEffect, useRef } from 'react'

const useProgram = (startingTime = 2) => {
  const [text, setText] = useState('')
  const [timer, setTimer] = useState(startingTime)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textareaRef = useRef(null)

  const handleChange = e => {
    const {value} = e.target

    setText(value)
  }

  const startProgram = () => {
    setText('')
    setTimer(startingTime)
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

  return {
    handleChange,
    text,
    textareaRef,
    isTimerOn,
    timer,
    startingTime,
    startProgram,
    wordCount
  }
}

export default useProgram