describe('Response validation for GET user request', () => {
  it('validates response header for get user list request', () => {
    cy.request('GET', '/api/v1/Users'). as('GetList')
    cy.get('@GetList').its('headers').its('content-type').should('include', 'application/json; charset=utf-8; v=1.0')
  })

  it('validates response status code  for getting a invalid user request', () => {
    cy.request({method:'GET', url:'/api/v1/Users/129',  failOnStatusCode: false}).as('GetUser129')
    cy.get('@GetUser129').its('status').should('equals', 404)
  })

  it('validates response body  for getting a valid user request', () => {
    cy.request('GET', '/api/v1/Users/4').as('GetUser4')
    cy.get('@GetUser4').its('body').should('include', { "id": 4, "userName": "User 4", "password": "Password4" })
  })
})