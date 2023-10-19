import { App } from '../../src/App'

describe('App.cy.ts', () => {
  it('should render the text "Hello World!!1!"', () => {
    cy.mount(<App />)
    cy.contains('Hello World!!1!')
  })
})
