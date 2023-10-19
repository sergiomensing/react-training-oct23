import { List } from '@/List'

describe('List.cy.ts', () => {
  it('should render a list with the provided labels', () => {
    cy.mount(<List labels={['a', 'b', 'c']} />)
    cy.contains('a')
    cy.contains('b')
    cy.contains('c')
    cy.get('li').should('have.length', 3)
  })
})
