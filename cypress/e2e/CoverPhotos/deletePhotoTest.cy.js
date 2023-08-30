describe('Response validation for DELETE cover photo request', () => {
    it('validates response header for deleting photo by id request', () => {
        cy.request('DELETE', '/api/v1/CoverPhotos/23').its('headers').its('content-length')
        .should('equals', '0')
    })

    it('validates response code for deleting photo by id request', () => {
       cy.request('DELETE', '/api/v1/CoverPhotos/1009').its('status').should('equals', 200) //204
    })
})