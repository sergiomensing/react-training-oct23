// --- STEP 1 ------------------------------------------------------ //
//
// Change the static 'Hello World!' text into a dynamic text
// using the following variables:
// - greeting: a boolean that determines whether to say 'Hello' or 'Goodbye'
// - label: a string that determines what to say hello or goodbye to
// - endings: an array of strings that are appended to the greeting
//
// --- STEP 2 ------------------------------------------------------ //
//
// Done? Awesome! But now your tests are failing. That's because you
// changed the text. Let's fix that. Open the file 'cypress/component/App.cy.tsx' again
// and make sure that your fancy new greeting component is passing all tests.
//
// ----------------------------------------------------------------- //

export const App = () => {
  return <div>Hello world!</div>
}

// ----------------------------------------------------------------- //
//
// HINT: Define a variable with const <variable name> = <value>
//
// ----------------------------------------------------------------- //
//
// HINT: Use curly braces to insert a variable into JSX (e.g. {<variable name>})
//
// ----------------------------------------------------------------- //
//
// HINT: Use the ternary operator to conditionally render JSX (e.g. {<condition> ? <true> : <false>})
//
// ----------------------------------------------------------------- //
//
// HINT: Use the nullish coalescing operator to conditionally render JSX (e.g. {<variable name> ?? <fallback>})
//
// ----------------------------------------------------------------- //
//
// HINT: Use the map function to render an array of JSX (e.g. {<array name>.map((<item name>) => (<JSX>))}). Don't forgot to add a key to the JSX.
//
// ----------------------------------------------------------------- //
