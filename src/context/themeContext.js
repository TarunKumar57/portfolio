import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
})

export default ThemeContext
