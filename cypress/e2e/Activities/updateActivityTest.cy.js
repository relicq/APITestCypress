describe('Response validation for updating activities with PUT request', () => {
    it('validates response headers for updating activity by id request', () => {
        cy.request('PUT', '/api/v1/Activities/10', {
            "id": 10,
            "title": "nayaActivity",
            "dueDate": "2023-08-30T09:30:49.317Z",
            "completed": true
          }).its('headers').its('content-type').should('equals', 'application/json; charset=utf-8; v=1.0')
    
    })

    it('validates response status code for a Bad PUT request', () => {
        cy.request({method:'PUT', url: '/api/v1/Activities/17', 
        failOnStatusCode: false, 
        body: { "id": 17, 
        "title": 51,
        "dueDate": "",
        "completed": true
        }})
        .its('status').should('equals', 400)
        
    })

    it('validates response status code for valid PUT request', () => {
        cy.request({method:'PUT', url: '/api/v1/Activities/20', 
        failOnStatusCode: false, 
        body: { "id": 20,
        "title": "nayaActivity",
        "dueDate": "2023-09-30T09:45:49.317Z",
        "completed": false
        }}).its('status').should('equals', 200)
        
    })

    it('validates response body for null PUT request', () => {
        cy.request({method:'PUT', url: '/api/v1/Activities/10', failOnStatusCode: false, 
        body: {}}).its('body').should('include', 
        {
            "id": 0,
            "title": null,
            "dueDate": "0001-01-01T00:00:00",
            "completed": false
        })
        
    })

    it('validates response body for updating activity status with PUT request', () => {
        cy.request('PUT', '/api/v1/Activities/2',
        {   "id": 2,
            "title": "Activity 2",
            "dueDate": "2023-08-01T01:20:05",
            "completed": true
        }).as('UpdatedStatus')
        cy.get('@UpdatedStatus').its('body').should('include', { "completed": true })
    })
})