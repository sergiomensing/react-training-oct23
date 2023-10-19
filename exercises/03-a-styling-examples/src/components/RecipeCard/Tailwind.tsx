import { Recipe } from '@/types/Recipe'

type Props = {
  deleteRecipe: (id: number) => () => void
  recipe: Recipe
}

export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <div className="rounded-md border border-gray-200 p-4">
    <div>
      <h2 className="font-semibold text-2xl">{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
    <div className="mt-4">
      <button
        className="uppercase text-blue-600 hover:text-pink-600"
        onClick={deleteRecipe(recipe.id)}
      >
        Delete
      </button>
    </div>
  </div>
)
