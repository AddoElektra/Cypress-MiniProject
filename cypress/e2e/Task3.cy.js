describe('test', () => {
    it('Dropdown', () => {
        cy.visit('parabank.parasoft.com')
        cy.get('input[type="text"]').click().type(Cypress.env('uname'))
        cy.get('input[type="password"]').click().type(Cypress.env('pass'))
        cy.get('input[class="button"]').click()
        cy.screenshot()
        cy.get('tr>td>a[href="activity.htm?id=56079"]').click()
        cy.get('table.form_activity').within(() => {
            cy.get('select#month.input').select('January')
            cy.screenshot
            cy.get('select#transactionType').select('Debit')
            cy.screenshot()
            cy.get('#month.input option').eq(3).should('have.value', 'March')
        })
    })
    it('CheckBox', () => {
        cy.visit('https://todomvc.com/examples/backbone/dist/')
        cy.get('header').contains('todos').should('be.visible')
        cy.get('input.new-todo').click().focus()
            .type('Milestone1{enter}')
            .type('Milestone2{enter}')
            .type('Milestone3{enter}')
        cy.screenshot()
        cy.get('main.main').should('have.length.at.least', 1)
        cy.get('.todo-list > li> div> label').last().should('have.text', 'Milestone3')
        cy.screenshot()
        cy.contains('Milestone1').parent()
            .find('input[type="checkbox"]').check()
        cy.contains('Milestone1').parents('li')
            .should('have.class', 'completed')
        cy.screenshot()
        cy.contains('Milestone1').parent()
            .find('input[type="checkbox"]').uncheck()
        cy.screenshot()
        cy.contains('Mark all as complete').parents()
            .find('label[for="toggle-all"]').click()
        cy.get('ul').children().should('have.class', 'completed')
        cy.screenshot()
    })
})