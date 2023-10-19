import { RecipesOverview } from '@/components/RecipesOverview'

// --- STEP 1 ------------------------------------------------------ //
//
// Retrieve all the recipes via the API
//
// --- STEP 2 ------------------------------------------------------ //
//
// Handle all the different loading-states from a fetch (loading, error, data)
//
// ----------------------------------------------------------------- //

export const Recipes = () => {
  return (
    <>
      <RecipesOverview recipes={[]} />
    </>
  )
}
