/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
const home_page = new Home_Page
const login_page = new Login_Page

const user = require("../../fixtures/data")
describe("SearchBar validation", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url"))
        cy.log(cy.title().should('eq', 'Marketplace') ? "user successfully landed on homepage" : "user unable to land on homepage")

        home_page.get_login
        cy.log("user successfully clicked on login")
        login_page.get_username().type(user.name)
        login_page.get_password().type(user.password)
        login_page.get_submit().click()
        cy.log(login_page.get_valid_toast().should('have.attr', 'aria-label', 'logged in successfully') ? "user is able to see success message 'logged in successfully'" : "user unable to see success message 'logged in successfully'")

    })
    it("TC_Search_01 Check whether the user is able to click on the search box or not.", () => {
        cy.log(home_page.get_search_bar().should("be.enabled").should("be.visible") ? "searchbar is enabled and clickable,testcase passed" : "searchbar is not enabled and not clickable,testcase failed")
    })
    it("TC_Search_02 Verify whether the user is able to type or enter in the search box or not.", () => {
        cy.log(home_page.get_search_bar().type("hey this is test").should("have.value", "hey this is test") ? "searchbox is accepting characters,testcase passed" : "searchbox is not accepting characters,testcase failed")
    })
    it("Check that when the user types any (Number / Text /Special Char )in the search box.", () => {
        cy.log(home_page.get_search_bar().type("1").should("have.value", "1") ? "search field is accepting numbers" : "search field is not accepting numbers")
        home_page.get_search_bar().clear()
        cy.log(home_page.get_search_bar().type("a").should("have.value", "a") ? "search field is accepting letters" : "search field is not accepting letters")
        home_page.get_search_bar().clear()
        cy.log(home_page.get_search_bar().type("$").should("have.value", "$") ? "search field is accepting special characters" : "search field is not accepting special characters")
        cy.log("testcase got passed")

    })
    it("TC_Search_08 Check the cross or cancel option to clear the search keyword", () => {
        home_page.get_search_bar().type("this is testing")
        home_page.get_cross_button().click()
        cy.log(home_page.get_search_bar().should("be.empty") ? "cross button is clearing the search field,testcase passed" : "cross button is not clearing the search field,testcase failed")
    })
    it("TC_Search_09 Enter alphanumeric characters in the search box and click on the Search button", () => {
        if (home_page.get_search_bar().type("ag5436") &&
            home_page.get_search_bar().type('{enter}') &&
            home_page.get_search_item().should("have.attr", "class", "font50px")) {
            cy.log("user is able to search alphanumeric characters,testcase got passed")
        }
        else {
            cy.log("user is unable to search alphanumeric characters,testcase got failed")
        }
    })

})