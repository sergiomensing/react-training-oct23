import { Card, CardContent, CardActions, Button } from '@mui/material'
import { Recipe } from '@/types/Recipe'

type Props = {
  editRecipe: (id: number) => () => void
  viewRecipe: (id: number) => () => void
  deleteRecipe: (id: number) => () => void
  recipe: Recipe
}

export const RecipeCard = ({
  recipe,
  deleteRecipe,
  editRecipe,
  viewRecipe,
}: Props) => (
  <Card sx={{ margin: 1, width: 280 }}>
    <CardContent>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </CardContent>
    <CardActions>
      <Button onClick={deleteRecipe(recipe.id)}>Delete</Button>
      <Button onClick={editRecipe(recipe.id)}>Edit</Button>
      <Button onClick={viewRecipe(recipe.id)}>View</Button>
    </CardActions>
  </Card>
)
