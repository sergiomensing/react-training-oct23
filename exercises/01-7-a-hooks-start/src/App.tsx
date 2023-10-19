import { useState } from 'react'

// --- STEP 1 ------------------------------------------------------ //
//
// In this excercise, we're going to create a custom hook that will
// allow us to use the hover functionality in multiple components.
// create a new hook that will encapsulate the logic for the hover
// functionality. Remember that the hook name should start with `use`!
//
// Use this hook in the Hover component instead of the useState and event
// handlers that are currently there.
//
// --- STEP 2 ------------------------------------------------------ //
//
// When the isHovering state is changing, we want to update the document
// title to reflect that. Try to solve this with a side effect.
//
// --- STEP 3 ------------------------------------------------------ //
//
// Check if the `Hover.cy.tsx` test is passing. They should, because you only changed
// the implementation, not the functionality.
//
// --- STEP 4 ------------------------------------------------------ //
//
// Create a new  component that will use the `useHover` hook.
// This component should also render a h3 element with a different text
// than the one in the original Hover component.
//
// It should change the background color of the h3 element to red when
// the user hovers over it. You can use the special `style` prop to do this.
// Example: <h3 style={{ background: 'red' }}>...</h3>
// Style is just an ordinary object so you can use expressions in it to determine the value.
//
// --- BONUS STEP -------------------------------------------------- //
//
// Write a test for the new component that checks if the background color
// changes when the user hovers over it.
//
// ----------------------------------------------------------------- //

export const Hover = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div data-cy="HoverComponent">
      <h3
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        Hover over me!
      </h3>
      {isHover && <p>👋</p>}
    </div>
  )
}

export const App = () => {
  return (
    <div>
      <Hover />
    </div>
  )
}

// ----------------------------------------------------------------- //
//
// HINT: use useEffect to create side effects
//
// HINT: use the window.document.title property to change the document title
//
// HINT: The return value of a custom hook can be anything you want.
//       It can be an object, a function, a string, a number, a boolean, etc.
//       For multiple values, you can return an object or a tuple.
//
// ----------------------------------------------------------------- //
