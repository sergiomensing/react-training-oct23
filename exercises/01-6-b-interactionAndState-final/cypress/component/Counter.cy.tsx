import { Counter } from '@/App'

describe('Counter.cy.ts', () => {
  it('should render the counter', () => {
    cy.mount(<Counter />)
    cy.contains('0')
  })

  it('should increment the counter when the increment button is clicked', () => {
    cy.mount(<Counter />)
    cy.contains('0')
    cy.contains('Increment').click()
    cy.contains('1')
  })

  it('should decrement the counter when the decrement button is clicked', () => {
    cy.mount(<Counter />)
    cy.contains('0')
    cy.contains('Decrement').click()
    cy.contains('-1')
  })
})
