describe('Response Validation for DELETE user request', () => {
    it('validates response headers for delete user request', () => {
        cy.request('DELETE', '/api/v1/Users/20').its('headers').its('content-length').should('equals', '0')
    })

    it('validates response code for deleting user request', () => {
        cy.request('DELETE', '/api/v1/Users/9').its('status').should('equals', 200) //204
    })
})