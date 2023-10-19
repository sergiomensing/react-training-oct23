// --- STEP 1 ------------------------------------------------------ //
//
// We're back to a completely blank canvas. Our previous components weren't
// very interactive, so let's start with something that is. We'll start with
// a simple counter.
//
// Create a new component called Counter. For simplicity's sake, just put in this file.
// It has the following specs:
// - It should render a h2 element with the current count
// - It should render two buttons, one to increment and one to decrement the count
// - It should start at 0
// - It should increment the count by 1 when the increment button is clicked
// - It should decrement the count by 1 when the decrement button is clicked
//
// --- STEP 2 ------------------------------------------------------ //
//
// Create a test for the Counter component in a new file called Counter.cy.tsx
// Test the increment and decrement functionality.
//
// --- STEP 3 ------------------------------------------------------ //
//
// Create a new component called Hover, again, just in this file.
// It has the following specs:
// - It should render a h3 element with the text "Hover over me!"
// - It should render something conditionally when the user hovers over the h3 element
//
// --- STEP 4 ------------------------------------------------------ //
//
// Create a test for the Hover component in a new file called Hover.cy.tsx
// Test the hover functionality.
//
// ----------------------------------------------------------------- //

export const App = () => {
  return <div>Hello World!</div>
}

// ----------------------------------------------------------------- //
//
// HINT: use the useState function to keep track of your counter & hover state
//
// HINT: use the data-cy attribute to select elements in your tests
//
// HINT: Some events in React are called a bit differently than in the DOM.
// For example, the onClick event in React is called onClick, but in the DOM it's called click.
//
// HINT: With the hover functionality, you have to use 2 different events, with different callbacks.
//
// HINT: You can use the Cypress command cy.get() to select elements in your tests.
//
// HINT: Don't mutate state directly, but use the setter function returned by useState.
