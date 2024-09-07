
describe('test',()=>{
    beforeEach(()=>{
        cy.visit('https://www.shopsy.in/')
    })
    it('first() and last()',()=>{
        cy.get('div.css-175oi2r').eq(1).should('be.visible')
        .children().first().should('be.visible')
        cy.get('div.sc-19704f59-2.gpEpua').eq(3).click().wait(5000)
        cy.get('div.sc-3a37045b-2.hSpCsx').children().last().click()
        .type('Jordan Shoe {enter}')
        cy.get('div.css-175oi2r.r-13awgt0.r-18u37iz').eq(1).children().children()
        .last().click({waitForAnimations: false})
        cy.screenshot()
    })
    it('parent() and child() using within()',()=>{
        cy.get('div.sc-19704f59-2.gpEpua').first().click({force:true})
        cy.get('div.sc-46489703-1.drgEeC').within(()=>{
            cy.get('div.sc-46489703-0.ceUfrI').children()
             .should('have.class','sc-46489703-1 bjxoUG')
        })
        cy.get('div.sc-46489703-1.cnDhii').parent()
        .should('have.attr','arrangement','ADJACENT')
    })
    it('links using Xpath',()=>{
        cy.xpath('//main[@class="sc-c4f39a2e-0 gLnsVJ"]//div//div//div').find('a').as('link')
        cy.get('@link').should('have.length.above',100)
        cy.get('@link').should('have.attr','href',"/").first().click({retry:3,timeout:7000})
        cy.wait(500)
        cy.contains('Shopsy').should('not.be.visible')
    })
    it('links using CSS ',()=>{
        cy.get('head link').should('have.attr','href')
        cy.get('head>link[rel="canonical"]').should('have.attr','href','https://www.shopsy.in/')
    })
})