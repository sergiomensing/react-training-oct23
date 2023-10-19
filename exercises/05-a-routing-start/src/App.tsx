import { useState } from 'react'
import { Box, Drawer } from '@mui/material'
import { AppBar } from '@/components/AppBar'
import { Content } from '@/components/Content'
import { Recipes } from '@/views/Recipes'

// --- STEP 1 ------------------------------------------------------ //
//
// Make sure the recipe-overview only renders on the path "/".
// Note that the Recipes-component already exists, just add the route.
//
// --- STEP 2 ------------------------------------------------------ //
//
// Add a component that will be shown when the user clicks on the Open-button.
// Make sure to pass the id via the url and show the id in this component, e.g. with an h1-tag.
// Programmatically handle the event and navigate in the event-handler to this view-recipe-component.
//
// HINTS:
// 1- use the useNavigate-hook of React-router to navigate
// 2- use the useParam-hook of React-router to read url-parameters
//
// --- STEP 3 ------------------------------------------------------ //
//
// Load the data from a single recipe in the view-recipe-component component by fetching it from the api.
// Use the id you passed via the url to load the recipe.
//
// --- STEP 4 ------------------------------------------------------ //
//
// Add a dummy component that will be shown when the user clicks on the Edit-button.
// Programmatically handle the event and navigate in the event-handler to this edit-recipe-component.
//
// --- STEP 5 ------------------------------------------------------ //
//
// Add a dummy component that will be shown when the user clicks on the Add-button ("+"), which is the Floating Action Button (FAB) in the Recipes-component.
// Programmatically handle the event and navigate in the event-handler to this new-recipe-component.
//
// --- BONUS STEP ------------------------------------------------------ //
//
// Try to use the `loader` function from react-router-dom to replace the useFetch hook.
// https://reactrouter.com/en/main/route/loader
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
