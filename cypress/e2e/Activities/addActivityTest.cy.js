describe('Response validation for POST activity request', () =>{
    it('validates response header for adding activity request', () => {
        cy.request('POST', '/api/v1/Activities', 
        { "id": 24,
         "title": "nayaActivity", 
         "dueDate": "2023-09-30T09:45:49.317Z", 
         "completed": false}).as('NewActivity')
        cy.get('@NewActivity').its('headers').its('transfer-encoding').should('equals', 'chunked')
        cy.get('@NewActivity').its('headers').its('server').should('equals', 'Kestrel')
    })

    it('validates response status code for creating new activity request', () => {
        cy.request('POST', '/api/v1/Activities',
        {"id": 24,
        "title": "fresherActivity", 
        "dueDate": "2024-07-30T09:45:49.317Z", 
        "completed": false}).as('CreatedActivity')
        cy.get('@CreatedActivity').its('status').should('equals', 200) //201
    })

    it('validates response status code for invalid POST request', () => {
        cy.request({method: 'POST', url: '/api/v1/Users', failOnStatusCode: false,
        body:{ "id": "",
        "title": "myActivity", 
        "dueDate": "", 
        "completed": true}}).as('InvalidActivity')
        cy.get('@InvalidActivity').its('status').should('equals', 400) 
    })

    it('validates response body for null activity request', () => {
        cy.request({method: 'POST', url: '/api/v1/Activities', failOnStatusCode: false,
        body: {}}).as('NullActivity')
        cy.get('@NullActivity').its('body').should('include', {
            "id": 0,
            "title": null, 
            "dueDate": "0001-01-01T00:00:00",
            "completed": false
          })
    })

    it('validates response body for new activity request', () => {
        cy.request({method: 'POST', url: '/api/v1/Activities', failOnStatusCode: false,
        body: { "id": 20, 
        "title": "Bowling", 
        "dueDate": "2024-07-30T09:45:49.317Z" }}).as('AddedActivity')
        cy.get('@AddedActivity').its('body').should('include', {
            "id": 20,
            "title": "Bowling", 
            "dueDate": "2024-07-30T09:45:49.317Z",
            "completed": false
          })
    })
   
})