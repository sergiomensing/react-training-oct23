import { Greeting } from '@/Greeting'

describe('Greeting.cy.ts', () => {
  it('should render the a "Goodbye Placeholder" with the provided endings by default', () => {
    cy.mount(<Greeting endings={['!']} />)
    cy.contains('Goodbye Placeholder!')
  })

  it('should render Hello instead of Goodbye when the greeting prop is true', () => {
    cy.mount(<Greeting greeting endings={['!']} />)
    cy.contains('Hello Placeholder!')
  })

  it('should render the provided label instead of "World" when the label prop is provided', () => {
    cy.mount(<Greeting label="everybody" endings={['!']} />)
    cy.contains('Goodbye everybody!')
  })
})
