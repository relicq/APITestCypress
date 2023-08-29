describe('Response validation for Get activity request', () => {
    it('validates response headers for getting list of activity request', () => {
        cy.request('GET', '/api/v1/Activities').as('ActvList')
        cy.get('@ActvList').its('headers').its('content-type').should('include', 'application/json')
    })

    it('validates response code for getting activity by valid id request', () => {
        cy.request('GET', '/api/v1/Activities/12').its('status').should('equals', 200) 
    })

    it('validates response code for getting activity by invalid id request', () => {
        cy.request({method:'GET', url: '/api/v1/Activities/1122', failOnStatusCode: false}).its('status').should('equals', 404) 
    })

    it('validates response body for getting activity list request', () => {
        cy.request('GET', '/api/v1/Activities').its('body[4]').should('include', {
            "id": 5,
            "title": "Activity 5",
            "completed": false
        })
        })

    it('validates response body for getting activity by id request', () => {
        cy.request('GET', '/api/v1/Activities/19').its('body').should('include', { 
            "id": 19,
            "title": "Activity 19", 
            "completed": false
      })

    })
})