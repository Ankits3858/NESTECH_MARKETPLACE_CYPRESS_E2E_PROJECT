it("TC_description_08,check whether user is able to enter text inside description field", () => {
    help.get_add_ticket().click()
    cy.log(help.get_description().type('testing').should('have.value', 'testing') ? "field is accepting text,testcase passed" : "field is not accepting text,testcase failed")


})
it("TC_description_09,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
    help.get_add_ticket().click()
    cy.log(help.get_description().should('have.attr', "ng-reflect-maxlength", "50") ? "field is not accepting 1k+ characters,max length is 50,testcase passed" : "field is accepting 1k+ characters,max length is more than 50,testcase failed")


})
it("TC_description_10,Check whether user is able to enter limited characters inside description", () => {
    help.get_add_ticket().click()
    cy.log(help.get_description().should('have.attr', "ng-reflect-maxlength", "50") ? "field is not accepting 1k+ characters,max length is 50,testcase passed" : "field is accepting 1k+ characters,max length is more than 50,testcase failed")


})
it("TC_description_11,Check whether description is accepting characters", () => {
    help.get_add_ticket().click()
    cy.log(help.get_description().type('testing').should('have.value', 'testing') ? "field is accepting characters,testcase passed" : "field is not accepting characters,testcase failed")

})
it("TC_description_12,Check whether description is accepting numeric characters", () => {
    help.get_add_ticket().click()
    cy.log(help.get_description().type('123').should('have.value', '123') ? "field is accepting numeric characters,testcase passed" : "field is not accepting numeric characters,testcase failed")

})

it("TC_description_13,Check whether description is accepting special characters", () => {
    help.get_add_ticket().click()
    cy.log(help.get_description().type('@123').should('have.value', '@123') ? "field is accepting special characters,testcase passed" : "field is not accepting special characters,testcase failed")

})
it("TC_description_14,Check whether description is accepting alpha numeric characters", () => {
    help.get_add_ticket().click()
    cy.log(help.get_description().type('abc123').should('have.value', 'abc123') ? "field is accepting alpha numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")

})