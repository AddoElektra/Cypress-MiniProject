describe('test1' , ()=>{
    beforeEach(()=>{
        cy.visit('https://todomvc.com/')
    })
     it('children' , ()=>{
        cy.get('ul.js-app-list-inner.applist.js').should('be.visible')
        cy.get('ul.js-app-list-inner.applist.js').should('have.length.greaterThan',1)
        cy.get('ul.js-app-list-inner.applist.js').first().should('contain','React')
        cy.get('ul.js-app-list-inner.applist.js').children().eq(3).should('contain','Preact')
        cy.get('ul.js-app-list-inner.applist.js > li').children().should('have.class','applist-item')
    })
     it('parent', ()=>{
        cy.get('header.row').parent().should('have.class' , 'container')
        cy.get('input#updated-expander.simple-dropdown').parent().should('be.visible')
    })
})