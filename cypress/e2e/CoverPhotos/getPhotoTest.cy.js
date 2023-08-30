describe('Response validation for GET photo request', () => {
    it('validates response header for getting list of coverphoto request', () => {
        cy.request('GET', '/api/v1/CoverPhotos').its('headers').its('content-type').should('equals', 'application/json; charset=utf-8; v=1.0')
    })
    it('validates response code for GET request by invalid id', () => {
      cy.request({method:'GET', url:'/api/v1/CoverPhotos/012909', failOnStatusCode: false}).its('status').should('equals', 404)
    })
    it('validates response code for GET request by valid id', () => {
       cy.request('GET', '/api/v1/CoverPhotos/23').its('status').should('equals', 200)
    })
    it('validates response code for GET request by invalid idBook', () => {
        cy.request({method: 'GET', url: '/api/v1/CoverPhotos/books/covers/10000000000000', failOnStatusCode: false}).its('status').should('equals', 400)

    })
    it('validates response code for GET request by valid idBook', () => {
        cy.request({method: 'GET', url: '/api/v1/CoverPhotos/books/covers/20', failOnStatusCode: false}).its('status').should('equals', 200)

    })
    it('validates response body for GET request by idBook', () => {
       cy.request('GET', '/api/v1/Coverphotos/books/covers/129').its('body[0]').should('include', { "url": "https://placeholdit.imgix.net/~text?txtsize=33&txt=Book 129&w=250&h=350" })  
    })
    it('validates response body for GET request by id', () => {
       cy.request('GET', '/api/v1/Coverphotos/129').its('body').should('include', { "url": "https://placeholdit.imgix.net/~text?txtsize=33&txt=Book 129&w=250&h=350" })  

    })
})