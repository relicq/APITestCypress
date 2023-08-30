describe('Response validation for POST photo request', () => {
    it('validates response headers for POST photo  request', () => {
        cy.request('POST', '/api/v1/CoverPhotos', {"id": 23,
            "idBook" : 303,
            "url": null,
            }).its('headers').its('content-type').should('include', 'application/json')
    })

    it('validates response code for invalid POST photo request', () => {
        cy.request({ method: 'POST', url: '/api/v1/CoverPhotos', failOnStatusCode: false, body:  {"id": '23',
        "idBook" : "",
        "url": null,}}).its('status').should('equals', 400)
    })
    it('validates response code for valid POST photo request', () => {
        cy.request({ method: 'POST', url: '/api/v1/CoverPhotos', failOnStatusCode: false, body:  {"id": 45,
        "idBook" : 545,
        "url": null,}}).its('status').should('equals', 200)
    })

    it('validates response body for null POST photo request', () => {
        cy.request('POST', '/api/v1/CoverPhotos', {}).its('body').should('include', {
            "id": 0,
            "idBook": 0,
            "url": null
          })
    })

    it('validates response body for POST photo request', () => {
        cy.request('POST', '/api/v1/CoverPhotos', {"id": 10, "idBook": 371, "url": "https:/coverphotos/logo.png"})
        .its('body').should('include', { "url":"https:/coverphotos/logo.png" })
    })
})