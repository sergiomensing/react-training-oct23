import { RecipeForm } from '@/components/RecipeForm'
import { Recipe } from '@/types/Recipe'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const EditRecipe = () => {
  const navigate = useNavigate()
  const recipe = useLoaderData() as Recipe

  const handleOnCancel = () => {
    navigate('/')
  }

  const handleOnSubmit = async (updatedRecipe: Omit<Recipe, 'id'>) => {
    const response = await fetch(`http://localhost:8000/recipes/${recipe.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRecipe),
    })

    const json = await response.json()

    if (!response.ok) {
      return alert(json.message)
    }

    navigate('/')
  }

  return (
    <RecipeForm
      recipe={recipe}
      onCancel={handleOnCancel}
      onSubmit={handleOnSubmit}
    />
  )
}
