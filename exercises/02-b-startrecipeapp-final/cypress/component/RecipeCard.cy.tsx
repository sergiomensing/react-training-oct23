import { RecipeCard } from '@/components/RecipeCard'

const testRecipe = {
  id: 1,
  title: `New Recipe - 1`,
  description: 'A description',
}

const deleteStub = (id: number) => () => {}

describe('RecipeCard', () => {
  it('should render the RecipeCard with the title, description and a delete button', () => {
    cy.mount(<RecipeCard recipe={testRecipe} deleteRecipe={deleteStub} />)
    cy.contains('New Recipe - 1')
    cy.contains('A description')
    cy.get('button').should('have.text', 'Delete')
  })

  it('should call the deleteRecipe function when the delete button is clicked', () => {
    const deleteRecipe = cy.stub()
    cy.mount(<RecipeCard recipe={testRecipe} deleteRecipe={deleteRecipe} />)
    cy.get('button').click()
    cy.wrap(deleteRecipe).should('have.been.calledOnce')
  })
})
