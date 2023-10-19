import { CircularProgress } from '@mui/material'
import { Recipe } from '@/types/Recipe'
import { useFetch } from '@/hooks/useFetch'
import { RecipesOverview } from '@/components/RecipesOverview'

export const Recipes = () => {
  const {
    data: recipes,
    isLoading,
    error,
  } = useFetch<Recipe[]>('http://localhost:8000/recipes')

  return (
    <>
      {error && <h5 style={{ background: 'red' }}>Error fetching</h5>}
      {isLoading && <CircularProgress />}
      {recipes && <RecipesOverview recipes={recipes} />}
    </>
  )
}
