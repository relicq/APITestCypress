describe('Response validation for PUT covr photo request', () => {
    it('validates response headers for updating coverphoto reqeust by id', () => {
        cy.request('PUT', '/api/v1/CoverPhotos/27', {"id" : 27, "idBook": 100, "url": null})
        .its('headers').its('content-type').should('equals', 'application/json; charset=utf-8; v=1.0')
    })

    it('validates response code for updating photo idBook with  PUT request', () => {
        cy.request('PUT', '/api/v1/CoverPhotos/27', {"id": 27, "idBook": 868, "url": null })
        .its('status').should('equals', 200)
    
    })

    it('validates response body for updating photo with null PUT request', () => {
        cy.request('PUT', '/api/v1/CoverPhotos/11', {}).its('body').should('include', {"id": 0, "idBook": 0, "url": null })
    })

    it('validates response body for updating photo id and url with valid PUT request', () => {
        cy.request('PUT', '/api/v1/CoverPhotos/44', {"id": 27, "idBook": 868, "url": null }).its('body').should('include', { "url": null })
    })
})