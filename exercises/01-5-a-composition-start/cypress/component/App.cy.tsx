import { App } from '../../src/App'

describe('App.cy.ts', () => {
  it('should render the text "Goodbye Placeholder" with the provided endings by default', () => {
    cy.mount(<App endings={['!']} />)
    cy.contains('Goodbye Placeholder!')
  })

  it('should render Hello instead of Goodbye when the greeting prop is true', () => {
    cy.mount(<App greeting endings={['!']} />)
    cy.contains('Hello Placeholder!')
  })

  it('should render the provided label instead of "World" when the label prop is provided', () => {
    cy.mount(<App label="everybody" endings={['!']} />)
    cy.contains('Goodbye everybody!')
  })
})
