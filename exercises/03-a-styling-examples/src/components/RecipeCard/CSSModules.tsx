import { Recipe } from '@/types/Recipe'
import styles from './CSSModules.module.css'

type Props = {
  deleteRecipe: (id: number) => () => void
  recipe: Recipe
}

export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <div className={styles.card}>
    <div>
      <h2 className="card__title">{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
    <div className="card__actions">
      <button className="button" onClick={deleteRecipe(recipe.id)}>
        Delete
      </button>
    </div>
  </div>
)
