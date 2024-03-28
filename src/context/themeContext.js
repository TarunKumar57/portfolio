import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: true,
  changeTheme: () => {},
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
})

export default ThemeContext
