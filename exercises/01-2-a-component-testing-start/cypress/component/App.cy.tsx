import { App } from '../../src/App'

// ------------------------------------------------------------------//
//
// Write a test that checks if the component renders the text "Goodbye world!" Be declarative in your test name.
// it('should ...', () => {...})
//
// The test should fail, because the component doesn't render that text
// This is a good practice to write tests that fail first, so you can see the test fail and that you're not accidentally passing the test
//
// You can use the cy.contains command to check if the component renders the text
// Alternatively you can use the cy.get command to check if the component renders a specific HTML element (or attribute of that element)
// and then check if that element contains the text with the .should('contain.text', 'Goodbye world!') command
//
// ------------------------------------------------------------------//

describe('App.cy.ts', () => {
  it('should render', () => {
    cy.mount(<App />)
    // cy.mount is always required to mount the component so you can test it
    // Remember that it's mounted in the actual DOM, so you're asserting on HTML elements, CSS styles, real events, etc.
  })
})
