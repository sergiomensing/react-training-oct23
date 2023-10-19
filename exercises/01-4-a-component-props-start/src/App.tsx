const greeting = true
const label = 'World'
const endings = ['!', '!', '1', '!']

// --- STEP 1 ------------------------------------------------------ //
//
// Using the above hardcoded values, the component isn't really useful.
// So, let's make it more useful by using props.
//
// Convert the above hardcoded values into props that are passed into the component.
//
// --- STEP 2 ------------------------------------------------------ //
//
// You'll notice that the typescript compiler is complaining
// That the props are implicitly any. This is because we haven't defined
// the types for the props yet. Let's do that now.
//
// --- STEP 3 ------------------------------------------------------ //
//
// Typescript happy? Nope, it's will still give an error that not all
// the required props are being passed in. Go to the index.tsx file
// and pass in the (required) props.
// Experiment with different values to see how the component behaves.
//
// --- STEP 4 ------------------------------------------------------ //
//
// Now that we have a component that is useful, let's add some tests.
// Go to your cypress/component/App.cy.tsx file and follow the instructions there.
//
// ----------------------------------------------------------------- //

export const App = () => {
  return (
    <div>
      {greeting ? 'Hello' : 'Goodbye'} {label ?? 'Placeholder'}
      {endings.map((ending) => (
        <span>{ending}</span>
      ))}
    </div>
  )
}

// ----------------------------------------------------------------- //
//
// HINT: The react component is a function, so you can pass arguments into it.
//       But remember, the arguments are always a single object (props).
//
// ----------------------------------------------------------------- //
//
// HINT: Since it's an object, you can destructure it: { greeting, label, endings } vs props.greeting, props.label, etc..
//
// ----------------------------------------------------------------- //
//
// HINT: use type <name> = { <property>: <type> } to define the types for the props.
//
// ----------------------------------------------------------------- //
