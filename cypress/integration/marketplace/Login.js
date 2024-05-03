/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
const user = require("../../fixtures/data")
describe("login validation", () => {
    const home_page = new Home_Page
    const login_page = new Login_Page
    beforeEach(() => {
        cy.visit(Cypress.env("url"))
        if (cy.title().should('eq', 'Marketplace')) {
            cy.log("user successfully landed on homepage")
        }
        else {
            cy.log("user unable to land on homepage")
        }
        home_page.get_login
        cy.log("user successfully clicked on login")
    })


    it("TC_Login_01 Verify Login with valid credentials", () => {

        login_page.get_username().type(user.name)
        login_page.get_password().type(user.password)
        login_page.get_submit().click()
        //login_page.get_toast().should('eq','')
        if (login_page.get_valid_toast().should('have.attr', 'aria-label', 'logged in successfully')) {
            cy.log("user is able to see success message 'logged in successfully'")
            cy.log("user is able to login with valid credentials")
            cy.log("testcase got passed")
        }
        else {
            cy.log("user unable to see success message 'logged in successfully'")
            cy.log("user unable to login with valid credentials")
            cy.log("testcase got failed")
        }


    })




    it("TC_Login_02 Verify Login with invalid credentials", () => {
        login_page.get_username().type("abcdef")
        login_page.get_password().type("afa12")
        login_page.get_submit().click()
        if (login_page.get_invalid_toast().should('have.attr', 'aria-label', 'Please enter a valid username/email.')) {
            cy.log("user is able to see warning message 'Please enter a valid username/email'")
            cy.log("user unable to login with invalid credentials")
            cy.log("testcase got passed")
        }
        else {
            cy.log("user unable to see warning message 'Please enter a valid username/email'")
            cy.log("user able to login with invalid credentials")
            cy.log("testcase got failed")
        }



    })

    it("TC_Login_03 Verify login with blank UserID and Password", () => {
        login_page.get_username().type(" ")
        login_page.get_password().type(" ")
        login_page.get_submit().click()
        if (login_page.get_invalid_toast().should('have.attr', 'aria-label', 'Please enter a valid username/email.')) {
            cy.log("user is able to see warning message 'Please enter a valid username/email'")
            cy.log("user unable to login with blank credentials")
            cy.log("testcase got passed")
        }
        else {
            cy.log("user unable to see warning message 'Please enter a valid username/email'")
            cy.log("user able to login with blank credentials")
            cy.log("testcase got failed")
        }

    })

    it("TC_Login_05 Verify login with valid username and blank password", () => {
        login_page.get_username().type(user.name)
        //login_page.get_password().type("")
        login_page.get_submit().click()
        if (login_page.get_invalid_toast2().should('have.attr', 'aria-label', 'Please enter the password.')) {
            cy.log("user is able to see warning message 'Please enter the password.'")
            cy.log("user unable to login with valid username and blank password")
            cy.log("testcase got passed")
        }
        else {
            cy.log("user unable to see warning message 'Please enter the password.'")
            cy.log("user able to login with valid username and blank password")
            cy.log("testcase got failed")
        }

    })
    it("TC_Login_06 Verify login with valid username and invalid password with text limit as 1 character", () => {
        login_page.get_username().type(user.name)
        login_page.get_password().type("a")
        login_page.get_submit().click()
        if (login_page.get_invalid_toast3().should('have.attr', 'aria-label', 'password must be at least 6 characters.')) {
            cy.log("user is able to see warning message 'password must be at least 6 characters.'")
            cy.log("user unable to login with valid username and invalid password with text limit as 1 character")
            cy.log("testcase got passed")
        }
        else {
            cy.log("user unable to see warning message 'password must be at least 6 characters.'")
            cy.log("user able to login with valid username and invalid password with text limit as 1 character")
            cy.log("testcase got failed")
        }

    })
    it("TC_logout_13 Verify after clicking on logout user isable to signout successfully", () => {
        {

            login_page.get_username().type(user.name)
            login_page.get_password().type(user.password)
            login_page.get_submit().click()

            if (login_page.get_valid_toast().should('have.attr', 'aria-label', 'logged in successfully')) {
                cy.log("user is able to see success message 'logged in successfully'")
                cy.log("user landed to hoempage successfully")

            }
            else {
                cy.log("user unable to see success message 'logged in successfully'")
                cy.log("user not landed to hoempage successfully")
            }
            cy.wait(4000)
            home_page.get_navigation_bar().click()
            home_page.get_logout().click()
            home_page.get_logout_confirmation().click()
            if (home_page.get_successfull_logout_toast().should('have.attr', 'aria-label', 'logged out successfully')) {
                cy.log("user logged out successfully")
                cy.log("testcase got passed")
            }
            else {
                cy.log("user unable to logged out")
                cy.log("testcase got failed")
            }



        }
    })
})