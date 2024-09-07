describe('test', () => {
    it('VewPort',()=>{
        cy.visit('www.google.com').wait(2000)
        cy.get('div[class="o3j99 LLD4me LS8OJ"]').should('be.visible')
        cy.viewport('macbook-15')
        cy.wait(200)
        cy.viewport('iphone-6+')
       . wait(200)
        cy.viewport('samsung-note9')
        .wait(200)
        cy.viewport('ipad-2')
        .wait(200)
    })
})
