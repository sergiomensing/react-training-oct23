import { Recipe } from '@/types/Recipe'

type Props = {
  deleteRecipe: () => void
  recipe: Recipe
}

// see src/style.scss for the style definitions
export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <div className="card">
    <div>
      <h2 className="card__title">{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
    <div className="card__actions">
      <button className="button" onClick={deleteRecipe}>
        Delete
      </button>
    </div>
  </div>
)
