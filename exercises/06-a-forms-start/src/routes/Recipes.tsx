import { useLoaderData, useNavigate } from 'react-router-dom'
import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Recipe } from '@/types/Recipe'
import { fetcher } from '@/utils/fetcher'
import { RecipeCard } from '@/components/RecipeCard'

export const loader = () => fetcher('http://localhost:8000/recipes')

export const Recipes = () => {
  const recipes = useLoaderData() as Recipe[]

  const navigate = useNavigate()

  const onAddRecipe = () => {
    navigate('/recipe/new')
  }

  const onDeleteRecipe = (id: number) => () => {
    // TODO: Implement this through the api
  }

  const onEditRecipe = (id: number) => () => {
    navigate(`/recipe/${id}/edit`)
  }

  const onViewRecipe = (id: number) => () => {
    navigate(`/recipe/${id}`)
  }

  return (
    <>
      <Fab
        color="primary"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        onClick={onAddRecipe}
      >
        <AddIcon />
      </Fab>
      <Box display="flex" flexWrap="wrap">
        {recipes.map((x) => (
          <RecipeCard
            key={x.id}
            recipe={x}
            deleteRecipe={onDeleteRecipe}
            editRecipe={onEditRecipe}
            viewRecipe={onViewRecipe}
          />
        ))}
      </Box>
    </>
  )
}
