import { useState } from 'react'
import { Box, Drawer } from '@mui/material'
import { AppBar } from '@/components/AppBar'
import { Content } from '@/components/Content'
import { Recipes } from '@/views/Recipes'

export const App = () => {
  const [menuIsOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen((prevState) => !prevState)

  return (
    <>
      <AppBar toggleMenu={toggleMenu} />
      <Drawer onClose={() => setMenuOpen(false)} open={menuIsOpen}>
        <Box width={280}>Menu</Box>
      </Drawer>
      <Content>
        <Recipes />
      </Content>
    </>
  )
}
