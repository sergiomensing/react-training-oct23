import { Card, CardContent, CardActions, Button } from '@mui/material'
import { Recipe } from '@/types/Recipe'

type Props = {
  editRecipe: () => void
  viewRecipe: () => void
  deleteRecipe: () => void
  recipe: Recipe
}

export const RecipeCard = ({
  recipe,
  deleteRecipe,
  editRecipe,
  viewRecipe,
}: Props) => (
  <Card sx={{ margin: 1, width: 280 }} data-cy="recipe-card">
    <CardContent>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </CardContent>
    <CardActions>
      <Button onClick={deleteRecipe}>Delete</Button>
      <Button onClick={editRecipe}>Edit</Button>
      <Button onClick={viewRecipe}>View</Button>
    </CardActions>
  </Card>
)
