import React, { useContext } from 'react'
import {ThemeContext} from './hooks/themeContext'

function ThemeButton() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <button
      className={`toggler ${theme}-theme`}
      onClick={toggleTheme}
    >
      Toggle {`${theme === 'light' ? 'dark' : 'light'}`}
    </button>
  )
}

export default ThemeButton