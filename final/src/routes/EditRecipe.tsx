import { FormModel, RecipeForm } from '@/components/RecipeForm'
import { Recipe } from '@/types/Recipe'
import { fetcher } from '@/utils/fetcher'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const EditRecipe = () => {
  const navigate = useNavigate()
  const recipe = useLoaderData() as Recipe

  const handleOnCancel = () => {
    navigate('/')
  }

  const handleOnSubmit = async (data: FormModel) => {
    try {
      await fetcher(`http://localhost:8000/recipes/${recipe.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...recipe, ...data }),
      })

      navigate('/')
    } catch (e) {
      return e instanceof Error ? e.message : 'Something went wrong'
    }
  }

  return (
    <RecipeForm
      recipe={recipe}
      onCancel={handleOnCancel}
      onSubmit={handleOnSubmit}
    />
  )
}
