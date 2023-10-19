import { App } from '../../src/App'

describe('App.cy.ts', () => {
  it('should render the text "Hello World!"', () => {
    cy.mount(<App />)
    cy.contains('Hello world!')
  })
})
