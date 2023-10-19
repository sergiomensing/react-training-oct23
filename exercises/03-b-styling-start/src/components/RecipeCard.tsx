import { Recipe } from '@/types/Recipe'

type Props = {
  deleteRecipe: (id: number) => () => void
  recipe: Recipe
}

export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <div>
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
    <div>
      <button onClick={deleteRecipe(recipe.id)}>Delete</button>
    </div>
  </div>
)
