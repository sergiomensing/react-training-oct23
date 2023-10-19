import { App } from './App'
import { createRoot } from 'react-dom/client'

// ----------------------------------------------------------------- //
//
// Oh no! The custom component is not here anymore..
// You can find it in `src/App.tsx`
// For it to be testable you can't import it from `src/index.tsx`
//
// Start cypress by running `yarn cypress`
// It will open the Cypress Test Runner
// Select Component Testing
// Select Chrome and click Start Component Testing in Chrome
// You should now see an overview of all your tests, for now only App.cy.tsx
// The test is still empty, time to get to work!
//
// Navigate to `cypress/component/App.cy.tsx` and follow the instructions there
//
// ----------------------------------------------------------------- //

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
