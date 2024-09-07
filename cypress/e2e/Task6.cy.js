describe('test', () => {
   const loginDetails = {
    username: 'Tina',
    password: 'Sana@123'
  }
  it('Login',()=>{
    cy.request({
      method: 'POST',
      url: '/Login', 
      body: loginDetails,
      failOnStatusCode: false 
    }).then((loginResponse) => {
      if (loginResponse.status === 400) {
        cy.log('Login failed. Check the request body and API endpoint.');
        expect(loginResponse.body).to.include('Invalid request');
      } else {
        expect(loginResponse.status).to.eq(201); 
        expect(loginResponse.body).to.be.an('object'); 
      }
    })
  })
})

describe('LinkedIn Profile', () => {
  it('name', () => {
      cy.visit('https://www.linkedin.com/login')
      cy.get('[name="session_key"]').type(Cypress.env('email'))
      cy.get('[name="session_password"]').type(Cypress.env('lpass'))
      cy.get('.btn__primary--large').click()
      cy.wait(5000)
      //cy.get('div[class="t-16 t-black t-bold"]').should('contain', 'Welcome, SAYANI!')
     cy.get('a#ember103.ember-view.block').should('have.attr','href','/in/sayani-pramanik/')
  })
})