import { Hover2 } from '@/App'

describe('Hover2.cy.tsx', () => {
  it('should render the hover text', () => {
    cy.mount(<Hover2 />)
    cy.get('[data-cy="Hover2Component"]')
      .get('h3')
      .should('contain', 'You can hover over me as well!')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('should have a red background when hovered', () => {
    cy.mount(<Hover2 />)
    cy.contains('You can hover over me as well!').trigger('mouseover')
    cy.get('[data-cy="Hover2Component"]')
      .get('h3')
      .should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
})
