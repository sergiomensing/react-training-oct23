import { Recipe } from '@/types/Recipe'
import styled from 'styled-components'

type Props = {
  deleteRecipe: () => void
  recipe: Recipe
}

const Card = styled.div`
  border-radius: 6px;
  border: 1px solid #d1d1d1;
  padding: 16px;
`

const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
`

const CardActions = styled.div`
  margin-top: 16px;
`

const Button = styled.button`
  text-transform: uppercase;
  color: blue;

  &:hover {
    color: hotpink;
  }
`

export const RecipeCard = ({ recipe, deleteRecipe }: Props) => (
  <Card>
    <div>
      <CardTitle>{recipe.title}</CardTitle>
      <p>{recipe.description}</p>
    </div>
    <CardActions>
      <Button onClick={deleteRecipe}>Delete</Button>
    </CardActions>
  </Card>
)
