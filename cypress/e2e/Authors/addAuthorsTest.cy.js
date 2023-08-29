describe('Response validation for POST authors request', () => {
    it('validates response headers for adding author request', () => {
        cy.request('POST', '/api/v1/Authors', {
            "id": 20,
            "idBook": 330,
            "firstName": "Homer",
            "lastName": "Elms"
          }). its('headers').its('content-type').should('include', 'application/json')
    })

    it('validates response code for invalid POST author request', () => {
        cy.request({method: 'POST', url: '/api/v1/Authors', failOnStatusCode: false,
        body:{"id": "",
            "idBook": "nameIT",
            "firstName": "Homer",
            "lastName": "Elms"
        }}). its('status').should('equals', 400)

    })

    it('validates response code for valid POST author request', () => {
        cy.request('POST', '/api/v1/Authors', {
            "id": 30,
            "idBook": 113,
            "firstName": "Homer",
            "lastName": "Elms"
          }). its('status').should('equals', 200)

    })

    it('validates reponse body for empty POST author request', () => {
        cy.request('POST', '/api/v1/Authors', {}).its('body').should('include', {
            "id": 0,
            "idBook": 0,
            "firstName": null,
            "lastName": null
          })
    })

    it('validates response body for valid POST author request', () => {
        cy.request('POST', '/api/v1/Authors', {
            "id": 20,
            "idBook": 103,
            "firstName": "Keaton",
            "lastName": "Janson"
          }).its('body').should('include', { "idBook": 103 })
    })
})