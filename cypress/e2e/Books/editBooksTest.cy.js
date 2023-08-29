describe('Respone Valdation for PUT books request', () => {
    it('validates response headers for PUT book request', () => {
        cy.request('PUT', '/api/v1/Books/100', 
        { "id": 100,
        "title": "A Diary of Void",
        "description": "Groundbreaking Journaling",
        "pageCount": 320,
        "excerpt": "slayQueen",
        "publishDate": "2023-08-29T11:27:00.893Z"}). its('headers').its('content-type').should('include', 'application/json')
    })

    it('validates response code for PUT book request',() => {
        cy.request('PUT', '/api/v1/Books/100',
        { "id": 100,
        "title": "Orgagnic Chemistry",
        "description": "Scientists First Choice For Educating Young Minds",
        "pageCount": 1299,
        "excerpt": "slayQueen",
        "publishDate": "2023-08-29T11:27:00.893Z"}). its('status').should('equals', 200) //201
    })

    it ('validates response code for invalid PUT book request', () => {
        cy.request({method: 'PUT', url: '/api/v1/Books/100', failOnStatusCode: false,
        body: {"id": "",
        "title": "A Diary of Void",
        "description": "Groundbreaking Journaling",
        "pageCount": "",
        "excerpt": "slayQueen",
        "publishDate": ""}}). its('status').should('equals', 400)
    })

    it('validates response body for null PUT book request', () => {
        cy.request('PUT', '/api/v1/Books/100', {}).its('body').should('include', {
            "id": 0,
            "title": null,
            "description": null,
            "pageCount": 0,
            "excerpt": null,
            "publishDate": "0001-01-01T00:00:00"
          })
    })

    it('validates response body for valid PUT book request', () => {
        cy.request('PUT', 'api/v1/Books/100', { "id": 100,
        "title": "BeforetheFall",
        "description": "Groundbreaking NoseDivetoReality",
        "pageCount": 607,
        "excerpt": "slayQueen",
        "publishDate": "2023-08-29T11:27:00.893Z"}).its('body').should('include', { "description": "Groundbreaking NoseDivetoReality" })
    })
})