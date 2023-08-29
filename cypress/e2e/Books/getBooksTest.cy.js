describe('Response validation for GET books request', () => {
    it('validates response header for getting list of book request', () => {
        cy.request('GET', '/api/v1/Books').its('headers').its('content-type').should('include', 'application/json')
    })

    it('validates response code for getting book by invalid id request', () => {
        cy.request({method: 'GET', url: '/api/v1/Books/32910', failOnStatusCode: false}).its('status').should('equals', 404)
    })

    it('validates response code for getting book by valid id request', () => {
        cy.request({method: 'GET', url: '/api/v1/Books/110', failOnStatusCode: false}).its('status').should('equals', 200)
    })
})