import { App } from '../../src/App'

describe('App.cy.ts', () => {
  // The most basic test you can write, it just checks if the component renders without error
  // With Typescript not that useful, because the compiler should already tell you if you have a breaking error
  // That causes the component to not render
  it('should render', () => {
    cy.mount(<App />)
  })

  // This is getting more interesting, we can check if the component renders a specific HTML (yes HTML, not JSX) element
  it('should render a div', () => {
    cy.mount(<App />)
    cy.get('div').should('exist')
  })

  // With the limited functionality of the App component, the most important test is to check if the component renders the correct text
  it('should render a div with the text "Hello world!"', () => {
    cy.mount(<App />)
    cy.get('div').should('contain.text', 'Hello world!')
  })

  // You could argue that the div element is just an implementation detail,
  // so now we only check if the component renders the correct text
  // If you change the div to a span, the test will still pass
  it('should render the text "Hello World!"', () => {
    cy.mount(<App />)
    cy.contains('Hello world!')
  })
})
