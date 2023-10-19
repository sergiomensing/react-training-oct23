import { RecipeForm } from '@/components/RecipeForm'
import { Recipe } from '@/types/Recipe'
import { useNavigate } from 'react-router-dom'

export const NewRecipe = () => {
  const navigate = useNavigate()

  const handleOnCancel = () => {
    navigate('/')
  }

  const handleOnSubmit = async (recipe: Omit<Recipe, 'id'>) => {
    const response = await fetch('http://localhost:8000/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    })

    const json = await response.json()

    if (!response.ok) {
      return alert(json.message)
    }

    navigate('/')
  }

  return <RecipeForm onCancel={handleOnCancel} onSubmit={handleOnSubmit} />
}
