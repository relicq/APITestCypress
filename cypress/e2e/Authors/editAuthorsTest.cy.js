describe('Response validation for PUT authors request', () => {
    it('validates response headers for editing author request', () => {
        cy.request('PUT', '/api/v1/Authors/192', {
            "id": 91,
            "idBook": 588,
            "firstName": "Selena",
            "lastName": "Queen"
          }). its('headers').its('content-type').should('include', 'application/json')
    })

    it('validates response code for invalid PUT author request', () => {
        cy.request({method: 'PUT', url: '/api/v1/Authors/333', failOnStatusCode: false,
        body:{"id": "",
            "idBook": "",
            "firstName": "Nicki",
            "lastName": "Barbie"
        }}). its('status').should('equals', 400)

    })

    it('validates response code for valid PUT author request', () => {
        cy.request('PUT', '/api/v1/Authors/121', {
            "id": 121,
            "idBook": 505,
            "firstName": "Giovanni",
            "lastName": "Saucer"
          }). its('status').should('equals', 200)

    })

    it('validates reponse body for empty PUT author request', () => {
        cy.request('PUT', '/api/v1/Authors/3', {}).its('body').should('include', {
            "id": 0,
            "idBook": 0,
            "firstName": null,
            "lastName": null
          })
    })

    it('validates response body for valid PUT author request', () => {
        cy.request('PUT', '/api/v1/Authors/200', {
            "id": 200,
            "idBook": 1313,
            "firstName": "Keaton",
            "lastName": "Janson"
          }).its('body').should('include', { "idBook": 1313 })
    })
})