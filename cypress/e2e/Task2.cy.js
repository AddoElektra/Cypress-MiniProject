describe('Locators', () => {
    beforeEach(() => {
        cy.visit('https://www.swiggy.com/')
    })

    it('CSS selector', () => {
        cy.get('._1VEUe').should('be.visible')
        cy.get('ul._3DdHb').children().should('have.length.greaterThan', 2)
        cy.get('h2.sc-aXZVg.dJnmZG.title').should('contain', "What's on your mind?")
        cy.get('#root').should('have.attr','style')
    })

    it('XPath Selectord', () => {
        cy.xpath('//header[@class="_1VEUe"]').should('be.visible')
        cy.xpath('//div[@class="wuQJ3" and @role="button"]').should('be.visible')
        cy.xpath('//ul[contains(@class, "_3DdHb")]').children().should('have.length.at.least', 5)
    })

    it('Combination Selectors', () => {
        cy.timeout(30000)
        cy.get('div.sc-jnOGJG.iFBHDV').xpath('.//div[@class="sc-ggpjZQ dljHGK"]')
        .should('have.length.at.least', 1)
        cy.get('div.row').first().xpath('.//div[contains(@class, "sc-ggpjZQ dljHGK")]').first()
        .should('be.visible')
    })
})