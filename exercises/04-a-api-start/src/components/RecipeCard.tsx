import { Card, CardContent, CardActions, Button } from '@mui/material'
import { Recipe } from '@/types/Recipe'

type Props = {
  deleteRecipe: () => void
  recipe: Recipe
}

export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <Card sx={{ margin: 1, width: 280 }}>
    <CardContent>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </CardContent>
    <CardActions>
      <Button onClick={deleteRecipe}>Delete</Button>
    </CardActions>
  </Card>
)
