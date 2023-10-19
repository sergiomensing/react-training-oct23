import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  // In here you can insert JSX elements
  // Every html tag is also supported
  // So you can write <div> or <span> or <h1> etc.
  // For example:
  <div>Hello world!</div>
  // Exercise: Try for to insert an unordered list with 3 items inside the div
)
