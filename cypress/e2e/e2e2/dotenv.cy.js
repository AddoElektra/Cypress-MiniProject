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

  