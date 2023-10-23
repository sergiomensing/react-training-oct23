import { Box } from '@mui/material'

import { RecipeCard as InlineStyleRecipeCard } from '@/components/RecipeCard/InlineStyle'
import { RecipeCard as StyledComponentsRecipeCard } from '@/components/RecipeCard/StyledComponents'
import { RecipeCard as TailwindRecipeCard } from '@/components/RecipeCard/Tailwind'
import { RecipeCard as CSSRecipeCard } from '@/components/RecipeCard/CSS'
import { RecipeCard as CSSModulesRecipeCard } from '@/components/RecipeCard/CSSModules'

const recipe = {
  id: 1,
  title: `New Recipe - 1`,
  description: 'A description',
}

export const Recipes = () => {
  const deleteRecipe = (id: number) => {}

  return (
    <>
      <Box display="flex" flexWrap="wrap" gap={2}>
        <InlineStyleRecipeCard
          recipe={recipe}
          deleteRecipe={() => deleteRecipe(recipe.id)}
        />
        <StyledComponentsRecipeCard
          recipe={recipe}
          deleteRecipe={() => deleteRecipe(recipe.id)}
        />
        <TailwindRecipeCard
          recipe={recipe}
          deleteRecipe={() => deleteRecipe(recipe.id)}
        />
        <CSSRecipeCard
          recipe={recipe}
          deleteRecipe={() => deleteRecipe(recipe.id)}
        />
        <CSSModulesRecipeCard
          recipe={recipe}
          deleteRecipe={() => deleteRecipe(recipe.id)}
        />
      </Box>
    </>
  )
}
