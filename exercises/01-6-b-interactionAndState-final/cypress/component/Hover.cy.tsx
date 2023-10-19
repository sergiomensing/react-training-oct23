import { Hover } from '@/App'

describe('Hover.cy.ts', () => {
  it('should render the hover text', () => {
    cy.mount(<Hover />)
    cy.get('[data-cy="HoverComponent"]').should('contain', 'Hover over me!')
    cy.get('[data-cy="HoverComponent"]').should('not.contain', '👋')
  })

  it('should render the 👋 when hovered and stop rendering it when not hovered anymore', () => {
    cy.mount(<Hover />)
    cy.contains('Hover over me!').trigger('mouseover')
    cy.get('[data-cy="HoverComponent"]').should('contain', '👋')
    cy.contains('Hover over me!').trigger('mouseout')
    cy.get('[data-cy="HoverComponent"]').should('not.contain', '👋')
  })
})
