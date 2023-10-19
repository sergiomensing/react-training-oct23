import { AppBar } from '@/components/AppBar'

describe('AppBar', () => {
  it('should render the AppBar', () => {
    cy.mount(<AppBar toggleMenu={() => {}} />)
    cy.contains('BereHonger')
  })

  it('should render the menu icon', () => {
    cy.mount(<AppBar toggleMenu={() => {}} />)
    cy.get('button').should('exist')
  })

  it('should call the toggleMenu function when the menu icon is clicked', () => {
    const toggleMenu = cy.stub()
    cy.mount(<AppBar toggleMenu={toggleMenu} />)
    cy.get('button').click()
    cy.wrap(toggleMenu).should('have.been.calledOnce')
  })
})
