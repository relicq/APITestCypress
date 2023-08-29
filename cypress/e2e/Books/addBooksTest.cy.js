describe('Respone Valdation for POST books request', () => {
    it('validates response headers for POST book request', () => {
        cy.request('POST', '/api/v1/Books', 
        { "id": 100,
        "title": "YouShallKnowOurVelocity",
        "description": "Groundbreaking NonFiction",
        "pageCount": 207,
        "excerpt": "slayQueen",
        "publishDate": "2023-08-29T11:27:00.893Z"}). its('headers').its('content-type').should('include', 'application/json')
    })

    it('validates response code for POST book request',() => {
        cy.request('POST', '/api/v1/Books',  { "id": 100,
        "title": "YouShallKnowOurVelocity",
        "description": "Groundbreaking NonFiction",
        "pageCount": 207,
        "excerpt": "slayQueen",
        "publishDate": "2023-08-29T11:27:00.893Z"}). its('status').should('equals', 200) //201
    })

    it ('validates response code for invalid POST book request', () => {
        cy.request({method: 'POST', url: '/api/v1/Books', failOnStatusCode: false,
        body: {"id": "",
        "title": "YouShallKnowOurVelocity",
        "description": "Groundbreaking NonFiction",
        "pageCount": "",
        "excerpt": "slayQueen",
        "publishDate": ""}}). its('status').should('equals', 400)
    })

    it('validates response body for null POST book request', () => {
        cy.request('POST', '/api/v1/Books', {}).its('body').should('include', {
            "id": 0,
            "title": null,
            "description": null,
            "pageCount": 0,
            "excerpt": null,
            "publishDate": "0001-01-01T00:00:00"
          })
    })

    it('validates response body for valid POST book request', () => {
        cy.request('POST', 'api/v1/Books', { "id": 100,
        "title": "YouShallKnowOurVelocity",
        "description": "Groundbreaking NonFiction",
        "pageCount": 207,
        "excerpt": "slayQueen",
        "publishDate": "2023-08-29T11:27:00.893Z"}).its('body').should('include', { "description": "Groundbreaking NonFiction" })
    })
})