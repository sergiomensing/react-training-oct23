import { Recipe } from '@/types/Recipe'
import { Link, useLoaderData } from 'react-router-dom'

export const EditRecipe = () => {
  const recipe = useLoaderData() as Recipe

  return (
    <div>
      <h1>Editing the recipe with name: {recipe.title}</h1>
      <Link to="/">Back to home</Link>
    </div>
  )
}
