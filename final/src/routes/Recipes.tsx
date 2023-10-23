import { useLoaderData, useNavigate, useRevalidator } from 'react-router-dom'
import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Recipe } from '@/types/Recipe'
import { fetcher } from '@/utils/fetcher'
import { RecipeCard } from '@/components/RecipeCard'

export const loader = () => fetcher('http://localhost:8000/recipes')

export const Recipes = () => {
  const revalidator = useRevalidator()
  const recipes = useLoaderData() as Recipe[]

  const navigate = useNavigate()

  const onAddRecipe = () => {
    navigate('/recipe/new')
  }

  const onDeleteRecipe = async (id: number) => {
    try {
      await fetcher(`http://localhost:8000/recipes/${id}`, { method: 'DELETE' })
      revalidator.revalidate()
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Something went wrong')
    }
  }

  const onEditRecipe = (id: number) => {
    navigate(`/recipe/${id}/edit`)
  }

  const onViewRecipe = (id: number) => {
    navigate(`/recipe/${id}`)
  }

  return (
    <>
      <Fab
        color="primary"
        data-cy="add-recipe"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={onAddRecipe}
      >
        <AddIcon />
      </Fab>
      <Box display="flex" flexWrap="wrap">
        {recipes.map((x) => (
          <RecipeCard
            key={x.id}
            recipe={x}
            deleteRecipe={() => onDeleteRecipe(x.id)}
            editRecipe={() => onEditRecipe(x.id)}
            viewRecipe={() => onViewRecipe(x.id)}
          />
        ))}
      </Box>
    </>
  )
}
