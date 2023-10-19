import { App } from '../../src/App'

// --- STEP 1 ------------------------------------------------------ //
//
// Start by providing the App component ONLY the required props, just like you did in index.tsx
// Fix the test so the result matches the expected result
//
// --- STEP 2 ------------------------------------------------------ //
//
// Now that the test is passing, let's add some more tests.
// For every test change the props to test a different scenario.
//
// ----------------------------------------------------------------- //

describe('App.cy.ts', () => {
  it('should render the text "Hello World!!1!"', () => {
    cy.mount(<App />)
    cy.contains('Hello World!!1!')
  })
})
