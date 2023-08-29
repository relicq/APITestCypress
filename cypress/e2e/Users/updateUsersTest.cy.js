describe('Response validation for updating users PUT request', () => {
    it('validates response headers for updating username with userid request', () => {
        cy.request('PUT', '/api/v1/Users/3', { "id": 3, "userName": "newUs3rname", "password": "P@ssw0rd" })
        .its('headers').its('content-type').should('equals', 'application/json; charset=utf-8; v=1.0')
    
    })

    it('validates response status code for a Bad PUT request', () => {
        cy.request({method:'PUT', url: '/api/v1/Users/10', 
        failOnStatusCode: false, 
        body: { "id": "slay", "password": "myPassword" }})
        .its('status').should('equals', 400)
        
    })

    it('validates response status code for valid PUT request', () => {
        cy.request({method:'PUT', url: '/api/v1/Users/10', 
        failOnStatusCode: false, 
        body: { "id": 0, "password": "myPassword" }})
        .its('status').should('equals', 200)
        
    })

    it('validates response body for null PUT request', () => {
        cy.request({method:'PUT', url: '/api/v1/Users/10', failOnStatusCode: false, 
        body: {}}).its('body').should('include', { "id": 0, "userName": null, "password": null })
        
    })

    it('validates response body for updating password with valid PUT request', () => {
        cy.request('PUT', '/api/v1/Users/2', { "id": 2, "userName": "User 2", "password": "newPassword" }).as('UpdatedPassword')
        cy.get('@UpdatedPassword').its('body').should('include', { "password": "newPassword" })
    })
})