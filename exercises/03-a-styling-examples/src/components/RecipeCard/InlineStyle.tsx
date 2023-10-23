import { Recipe } from '@/types/Recipe'

type Props = {
  deleteRecipe: () => void
  recipe: Recipe
}

export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <div style={{ borderRadius: 6, border: '1px solid #d1d1d1', padding: 16 }}>
    <div>
      <h2 style={{ fontWeight: 600, fontSize: 24 }}>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
    <div style={{ marginTop: 16 }}>
      <button
        style={{ textTransform: 'uppercase', color: 'blue' }}
        onClick={deleteRecipe}
      >
        Delete
      </button>
    </div>
  </div>
)
