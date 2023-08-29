describe('Response validation for DELETE books request', () => {
    it('validates response headers for DELETE book request', () => {
        cy.request('DELETE', '/api/v1/Books/34').its('headers')
        .its('content-length').should('equals', '0')
    })

    it('validates response code for DELETE boooks request', () => {
        cy.request('DELETE', '/api/v1/Books/44').its('status').should('equals', 200) //204
    })
})