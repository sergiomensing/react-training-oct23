describe('NewRecipes.cy.ts', () => {
  it('Can create recipe', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="add-recipe"]').click()

    cy.location('pathname').should('equal', '/recipe/new')

    cy.get('input[name="title"]').type('Test Recipe')
    cy.get('input[name="description"]').type('Test Description')
    cy.get('input[name="img"]').type('abc.jpg')

    cy.get('button[type="submit"]').click()

    cy.location('pathname').should('equal', '/')

    cy.contains('Test Recipe')

    // cleanup
    cy.get('[data-cy=recipe-card]:contains("Test Recipe")')
      .contains('Delete')
      .click()
  })
})
