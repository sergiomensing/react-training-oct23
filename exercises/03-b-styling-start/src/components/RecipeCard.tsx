import { Recipe } from '@/types/Recipe'

type Props = {
  deleteRecipe: () => void
  recipe: Recipe
}

export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <div>
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
    <div>
      <button onClick={deleteRecipe}>Delete</button>
    </div>
  </div>
)
