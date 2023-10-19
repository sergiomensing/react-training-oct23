import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { CssBaseline } from '@mui/material'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/components/RootLayout'
import { Error } from '@/components/Error'
import { Recipes, loader as recipesLoader } from '@/routes/Recipes'
import { Recipe, loader as recipeLoader } from '@/routes/Recipe'
import { NewRecipe } from '@/routes/NewRecipe'
import { EditRecipe } from '@/routes/EditRecipe'

// --- STEP 1 ------------------------------------------------------ //
//
// Create an form to edit a recipe. Display the form on the EditRecipe route.
//
// HINTS:
// - Think about components and how we can use components to our advantage.
// - In REST 'PUT' is used to indicate an UPDATE-action.
// - For styling, check out MUI's TEXTFIELD.
// - For form-data-management, you're free to use whatever you like, however,
//   using Controlled Components is generally recommended.
//
// --- STEP 2 ------------------------------------------------------ //
//
// In the routes-folder, implement the NewRecipe route to show a form to create a recipe.
//
// HINTS;
// - If you made the edit-form a seperate component, you can actually re-use the edit-form
//   and will only need to implement the requests for adding this new recipe.
// - In REST 'POST' is used to indicate an INSERT-action.
//
// ----------------------------------------------------------------- //

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Recipes />,
        errorElement: <Error />,
        loader: recipesLoader,
      },
      {
        path: '/recipe/:id',
        element: <Recipe />,
        loader: recipeLoader,
      },
      {
        path: '/recipe/:id/edit',
        element: <EditRecipe />,
        loader: recipeLoader,
      },
      {
        path: '/recipe/new',
        element: <NewRecipe />,
      },
    ],
  },
])

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
)
