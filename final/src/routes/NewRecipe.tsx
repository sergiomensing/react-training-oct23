import { FormModel, RecipeForm } from '@/components/RecipeForm'
import { fetcher } from '@/utils/fetcher'
import { useNavigate } from 'react-router-dom'

export const NewRecipe = () => {
  const navigate = useNavigate()

  const handleOnCancel = () => {
    navigate('/')
  }

  const handleOnSubmit = async (data: FormModel) => {
    try {
      await fetcher(`http://localhost:8000/recipes`, {
        method: 'POST',
        body: JSON.stringify({ ...data, ingredients: [], steps: [] }),
      })

      navigate('/')
    } catch (e) {
      return e instanceof Error ? e.message : 'Something went wrong'
    }
  }

  return <RecipeForm onCancel={handleOnCancel} onSubmit={handleOnSubmit} />
}
