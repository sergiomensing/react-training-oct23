import { Recipes } from '@/views/Recipes'

describe('Recipes', () => {
  it('should render the Recipes with the initial recipe', () => {
    cy.mount(<Recipes />)
    cy.contains('New Recipe - 1')
  })

  it('should render the Recipes with the new recipe', () => {
    cy.mount(<Recipes />)
    cy.get('[data-cy="add-recipe"]').click()
    cy.contains('New Recipe - 2')
  })

  it('should not render the deleted recipe', () => {
    cy.mount(<Recipes />)
    cy.get('[data-cy="add-recipe"]').click()
    cy.get('[data-cy="delete-recipe-1"]').click()
    cy.contains('New Recipe - 1').should('not.exist')
  })
})
