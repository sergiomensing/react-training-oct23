import { useState } from 'react'
import { Box, Drawer } from '@mui/material'
import { AppBar } from '@/components/AppBar'
import { Content } from '@/components/Content'
import { Recipes } from '@/views/Recipes'

// --- STEP 1 ------------------------------------------------------ //
//
// Let's add some custom styling changes to the RecipeCard-component.
//
// Try not to use the component library.
//
// The nicest design wins everlasting Internet-points, amazing!
//
// HINTS;
// - Take a look at the 03-a-styling-examples folder for different
//   implementations of the same styling.
//
// - Try different implementations to get a feel for what they are like.
//
// ----------------------------------------------------------------- //

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
