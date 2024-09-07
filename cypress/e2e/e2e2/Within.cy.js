const xpath = require('cypress-xpath');

describe('within' , () =>{
    beforeEach(()=> {
        cy.visit('www.ebay.com/')
    })
    // it('passes' , ()=> {
    //     cy.get('div#gh-ac-box2 > input[type="text"]').click().type('Samxung S24 Ultra {enter}')
    //     cy.xpath('//div[@id="x-refine__group_1__0"]//ul[@class="x-refine__main__value"]')
    //     .within(()=>{
    //         cy.get('li').should('have.a.class','x-refine__main__list--value')
    //         cy.xpath('//div[@class="x-refine__select__svg"]//input[@type="checkbox"]').eq(0).as('checkbox')
    //         cy.get('@checkbox').check()
    //     })
    //     cy.get('button[aria-label="Sort selector. Best Match selected."]').click()
    //     cy.get('ul[class="fake-menu__items"][tabindex="-1"]').eq(3)
    //     .within(()=>{
    //         cy.get('li').eq(1).click({force:true})
    //     })
    // })
    it('xpath' , ()=> {
        cy.xpath('//div[@id="gh-top"]//ul[@id="gh-topl"]').within(()=>{
            cy.get('li').children().children().eq(1).find('a').click()
        })
    })
})

