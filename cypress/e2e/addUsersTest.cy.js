describe('Response validation for POST user request', () =>{
    it('validates response header for adding user request', () => {
        cy.request('POST', '/api/v1/Users', { "id": 14, "userName": "testuser", "password": "myPassword" }).as('TestUser')
        cy.get('@TestUser').its('headers').its('transfer-encoding').should('equals', 'chunked')
        cy.get('@TestUser').its('headers').its('server').should('equals', 'Kestrel')
    })

    it('validates response status code for creating new user request', () => {
        cy.request('POST', '/api/v1/Users', { "id": 12, "userName": "NewUser", "password": "P@ssw0rd" }).as('NewUser')
        cy.get('@NewUser').its('status').should('equals', 200) //201
    })
    it('validates response body for new user request', () => {
        cy.request('POST', '/api/v1/Users', { "id": 11, "userName": "Giovanni", "password": "veryLongPassword" } ).as('AddedUser')
        cy.get('@AddedUser').its('body').should('include', {
            "id": 11,
            "userName": "Giovanni",
            "password": "veryLongPassword"
          })
    })
   
})