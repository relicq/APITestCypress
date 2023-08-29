describe('Response validation for DELETE activities request', () => {
    it('validates response headers for deleting activity request', () => {
       cy.request('DELETE', '/api/v1/activities/17').its('headers').
       its('content-length').should('equals', '0')

    })

    it('validates response codes for deleting activity request', () => {
        cy.request('DELETE', '/api/v1/Activities/13').its('status').should('equals', 200) //204
    })
})