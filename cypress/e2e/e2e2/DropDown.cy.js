describe('test', () => {
    it('within', () => {
      cy.visit('parabank.parasoft.com')
      cy.get('input[type="text"]').click().type(Cypress.env('uname'))
      cy.get('input[type="password"]').click().type(Cypress.env('pass'))
      cy.get('input[class="button"]').click()
      cy.get('tr>td>a[href="activity.htm?id=15009"]').click()
      cy.get('table.form_activity').within(()=>{
        cy.get('select#month.input').select('January')
        cy.get('select#transactionType').select('Debit')
        cy.get('#month.input option').eq(3).should('have.value','March')
      })
    })
  })