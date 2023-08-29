describe('Response validation for GET authors request', () => {
    it('validates response header for getting author list request', () => {
        cy.request('GET', '/api/v1/Authors').its('headers').its('content-type')
        .should('equals', 'application/json; charset=utf-8; v=1.0')
    })

    it('validates response code for getting author by valid id request', () => {
        cy.request('GET', '/api/v1/Authors/200').its('status').should('equals', 200)
    })

    it('validates response code for getting author by valid idBook request', () => {
        cy.request('GET', '/api/v1/Authors/authors/books/120').its('status').should('equals', 200)
    })

    it('validates response body for getting author by id request', () => {
        cy.request('GET', '/api/v1/Authors/376').its('body').should('include', { "idBook": 121 })
    })

    it('validates response body for getting author by idBook request', () => {
        cy.request('GET', '/api/v1/Authors/authors/books/120').as('BookIDList')
        cy.get('@BookIDList').its('body[0].id').should('equals', '357')
        cy.get('@BookIDList').its('body[1].id').should('equals', '334')
    })
})