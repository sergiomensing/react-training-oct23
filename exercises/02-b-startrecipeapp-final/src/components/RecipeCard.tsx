import { Card, CardContent, CardActions, Button } from '@mui/material'
import { Recipe } from '@/types/Recipe'

type Props = {
  deleteRecipe: (id: number) => () => void
  recipe: Recipe
}

export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <Card sx={{ margin: 1, width: 280 }}>
    <CardContent>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </CardContent>
    <CardActions>
      <Button
        data-cy={`delete-recipe-${recipe.id}`}
        onClick={deleteRecipe(recipe.id)}
      >
        Delete
      </Button>
    </CardActions>
  </Card>
)
