import { createRoot } from 'react-dom/client'

// ----------------------------------------------------------------- //
// You can define your component below as a function
// Don't forget to render it afterwards
// ----------------------------------------------------------------- //

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  // Now render your own component instead of the div
  <div>Hello world!</div>
)

// ----------------------------------------------------------------- //
//
// HINT: Always start with a capital letter
//
// ----------------------------------------------------------------- //
//
// HINT: You can use the same syntax as in the JSX example above
//
// ----------------------------------------------------------------- //
