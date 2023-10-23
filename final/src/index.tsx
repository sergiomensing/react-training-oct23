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
