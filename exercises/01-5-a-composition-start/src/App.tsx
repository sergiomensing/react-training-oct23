// --- STEP 1 ------------------------------------------------------ //
//
// It's not really maintainable to have all the JSX in one file. Let's split it up.
// Extract the current App component into a new component called Greeting in a separate file
// and let the App component render the Greeting component with the props that are currently
// set on the App component in index.tsx.
//
// --- STEP 2 ------------------------------------------------------ //
//
// Afterwards move your App.cy.tsx tests to a new file called Greeting.cy.tsx
// Just make sure the App.cy.tsx is still containing one test:
/*
    it('should render the app', () => {
        cy.mount(<App />)
    }
*/
//
// --- STEP 3 ------------------------------------------------------ //
//
// Time to create a component that renders multiple components based on the props it receives.
// Create a List component with the following specs:
// - It should render a ul element
// - It accepts labels as a prop of type string[]
// - It should render a ListItem (see below) for each item in the labels prop
//
// also create a ListItem component with the following props:
// - It should render a li element
// - It accepts label as a prop of type string
// - It should render the label prop as text
//
// HINT: Notice that the specs are pretty much written as a test already.
//
// --- STEP 4 ------------------------------------------------------ //
//
// Render the List component in the App component and pass the labels prop to it.
//
// --- BONUS STEP -------------------------------------------------- //
//
// Create tests for the List component in a new file called List.cy.tsx
// Create tests for the ListItem component in a new file called ListItem.cy.tsx
//
// ----------------------------------------------------------------- //

type Props = {
  greeting?: boolean
  // A type with a question mark after it means that the property is optional
  label?: string
  endings: string[]
}

export const App = ({ greeting, label, endings }: Props) => {
  return (
    <div>
      {greeting ? 'Hello' : 'Goodbye'} {label ?? 'Placeholder'}
      {endings.map((ending) => (
        <span>{ending}</span>
      ))}
    </div>
  )
}
