import { Content } from '@/components/Content'

describe('Context', () => {
  it('should render the Content', () => {
    cy.mount(<Content>Content</Content>)
    cy.contains('Content')
  })
})
