describe('Response validation for DELETE author request', () => {
    it('validates response headers for delete author request', () => {
        cy.request('DELETE', '/api/v1/Authors/12').its('headers').its('content-length').should('equals', '0')
    })

    it('validates response code for delete author request', () => {
        cy.request('DELETE', '/api/v1/Authors/39').its('status').should('equals', 200) //204
    })
})