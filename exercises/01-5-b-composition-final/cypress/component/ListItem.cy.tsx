import { ListItem } from '@/ListItem'

describe('ListItem.cy.ts', () => {
  it('should render the provided label', () => {
    const testlabel = 'this is a test label'
    cy.mount(<ListItem label={testlabel} />)
    cy.get('li').should('have.text', testlabel)
  })
})
