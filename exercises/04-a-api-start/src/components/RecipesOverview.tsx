import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { RecipeCard } from '@/components/RecipeCard'
import { Recipe } from '@/types/Recipe'

type Props = {
  recipes: Recipe[]
}

export const RecipesOverview = ({ recipes }: Props) => {
  const addRecipe = () => {
    // TODO: Implement this through the api
  }

  const deleteRecipe = (id: number) => {
    // TODO: Implement this through the api
  }

  return (
    <>
      <Fab
        color="primary"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        onClick={addRecipe}
      >
        <AddIcon />
      </Fab>
      <Box display="flex" flexWrap="wrap">
        {recipes.map((x) => (
          <RecipeCard
            key={x.id}
            recipe={x}
            deleteRecipe={() => deleteRecipe(x.id)}
          />
        ))}
      </Box>
    </>
  )
}
