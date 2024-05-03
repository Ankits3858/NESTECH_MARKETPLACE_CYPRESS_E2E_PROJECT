/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
import Create_Collection_Page from "../../PageObjects/Create_Collection_Page"
import Settings_Information_Page from "../../PageObjects/Settings_Information_Page"
import Signup_Page from "../../PageObjects/Signup_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const createNFT = new CreateNFT_Page
const create_collection = new Create_Collection_Page
const Settings_information = new Settings_Information_Page
const signup = new Signup_Page
const video = "cypress/fixtures/video.webm"
const user = require("../../fixtures/data")
const image = "cypress/fixtures/Picture.png"
const audio = "cypress/fixtures/audio.mp3"
describe("validation of Signup module", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url"))
        cy.log(cy.title().should('eq', 'Marketplace') ? "user successfully landed on homepage" : "user unable to land on homepage")
        home_page.get_login
        signup.get_signup().click()

    })
    it("TC_Signup_01,Check whether user is able to enter text inside profile name field", () => {
        cy.log(signup.get_profileName().type('testing').should('have.value', 'testing') ? "user is able to enter text inside profile name field,testcase got passed" : "user is unable to enter text inside profile name field,testcase failed")
    })
    it("TC_Signup_02,Check whether user is able to see display message limit exceed after entering 1k+characters", () => {
        cy.log(signup.get_profileName().should('have.attr', 'maxlength', '25') ? "user is unable to enter 1k+ characters as max length is 25,testcase passed" : "user is able to enter 1k+ characters as max length is 25,testcase failed")
    })
    it("TC_Signup_03,Check whether user is able to enter limited characters inside name field", () => {
        cy.log(signup.get_profileName().should('have.attr', 'maxlength', '25') ? "max length is 25 user unable to exceed that limit,testcase passed" : "max length is greater than 25 limit exceed,testcase failed")
    })
    it("TC_Signup_05,Check whether profile name field is accepting numbers as first character", () => {
        cy.log(signup.get_profileName().type('1234').should('have.value', '1234') ? "user is able to enter number inside profile name field,testcase got passed" : "user is unable to enter number inside profile name field,testcase failed")

    })
    it("TC_Signup_06,Check whether profile name field is accepting special characters", () => {
        cy.log(signup.get_profileName().type('testing!@#').should('have.value', 'testing!@#') ? "profile name field is accepting special characters,testcase got passed" : "profile name field is not special characters,testcase failed")

    })

    it("TC_Signup_07,Check whether profile name field is accepting alpha numeric characters", () => {
        cy.log(signup.get_profileName().type('testing123').should('have.value', 'testing123') ? "profile name field is accepting alpha numeric characters,testcase got passed" : "profile name field is not accepting alpha numeric characters,testcase failed")

    })
    it("TC_Signup_08,Check whether display message -The username contains illegal characters is seen after adding only single special character", () => {
        signup.get_profileName().type('!@#')
        cy.log(signup.get_profile_alert_toast().should('be.visible') ? "profile name field is not accepting single special characters-error message displayed illegal characters,testcase got passed" : "profile name field is accepting single special characters-error message not displayed illegal characters,testcase failed")

    })
    it("TC_Signup_09,Check whether user is able to enter limited characters inside mail field", () => {
        cy.log(signup.get_email().should('have.attr', 'maxlength', '250') ? "max length is 250 user unable to exceed that limit,testcase passed" : "max length is greater than 250 limit exceed,testcase failed")
    })
    it("TC_Signup_11,Check whether email field is accepting alpha numeric characters", () => {
        cy.log(signup.get_email().type('testing123').should('have.value', 'testing123') ? "email field is accepting alpha numeric characters,testcase got passed" : "email field is not accepting alpha numeric characters,testcase failed")
    })
    it("TC_Signup_12,Check whether email field is accepting characters", () => {
        cy.log(signup.get_email().type('testing').should('have.value', 'testing') ? "email field is accepting characters,testcase got passed" : "email field is not accepting characters,testcase failed")
    })
    it("TC_Signup_13,Check whether email field is accepting numbers", () => {
        cy.log(signup.get_email().type('testing').should('have.value', 'testing') ? "email field is accepting numbers,testcase got passed" : "email field is not accepting numbers,testcase failed")
    })
    it("TC_Signup_14,Check whether email is accepting special characters", () => {
        cy.log(signup.get_email().type('!@#').should('have.value', '!@#') ? "email field is accepting special characters,testcase got passed" : "email field is not accepting special characters,testcase failed")
    })


    it("TC_Signup_15,Check whether email is accepting only @domain.com", () => {
        signup.get_email().type('@domain.com')
        cy.log(signup.get_email_alert_toast().should('have.text', 'That email address seems to be invalid') ? "email field is not accepting invalid mail-invalid email message displayed,testcase got passed" : "email field is accepting invalid mail-invalid email message not displayed,testcase failed")

    })

    it("TC_Signup_16,Check whether email is accepting pre registered user", () => {
        signup.get_email().type('yasele2231@nubotel.com')
        cy.log(signup.get_email_alert_toast().should('have.text', 'Email Already Taken !!') ? "email field is not accepting pre registered user-'email already taken' message displayed,testcase got passed" : "email field is accepting pre registered user-'email already taken' message not displayed,testcase failed")

    })


    it("TC_Signup_17,Check whether user is able to enter limited characters inside password field", () => {
        cy.log(signup.get_password().should('have.attr', 'maxlength', '50') ? "max length is 50 user unable to exceed that limit,testcase passed" : "max length is greater than 50 limit exceed,testcase failed")
    })
    it("TC_Signup_19,Check whether user is able to enter character inside password field", () => {
        signup.get_password().type('abcd')
        cy.log(signup.get_password_alert_toast().should('have.text', 'Must be at least 6 characters!') ? "password field is not accepting characters-Must be at least 6 characters!-display message is seen,testcase got passed" : "password field is not accepting charactersMust be at least 6 characters!-display message is not seen,testcase failed")
        // cy.log(signup.get_password().type('abcd').should('have.value','abcd')?"password field is accepting characters,testcase got passed":"password field is not accepting characters,testcase failed")
    })
    it("TC_Signup_20,Check whether user is able to enter number inside password field", () => {
        signup.get_password().type('abcd')
        cy.log(signup.get_password_alert_toast().should('have.text', 'Must be at least 6 characters!') ? "password field is not accepting characters-Must be at least 6 characters!-display message is seen,testcase got passed" : "password field is not accepting charactersMust be at least 6 characters!-display message is not seen,testcase failed")
    })
    it("TC_Signup_21,Check whether user is able to enter special character inside password field", () => {
        signup.get_password().type('!@#$')
        cy.log(signup.get_password_alert_toast().should('have.text', 'Must be at least 6 characters!') ? "password field is not accepting characters-Must be at least 6 characters!-display message is seen,testcase got passed" : "password field is not accepting charactersMust be at least 6 characters!-display message is not seen,testcase failed")
    })
    it("TC_Signup_22,Check whether user is able to enter alpha numeric character inside password field", () => {
        signup.get_password().type('abc12')
        cy.log(signup.get_password_alert_toast().should('have.text', 'Must be at least 6 characters!') ? "password field is not accepting characters-Must be at least 6 characters!-display message is seen,testcase got passed" : "password field is not accepting charactersMust be at least 6 characters!-display message is not seen,testcase failed")
    })

    it("TC_Signup_23,Check whether password and confirm password field by entering same password", () => {
        signup.get_password().type('Abcd123@')
        signup.get_confirmPassword().type('Abcd123@')
        signup.get_email().click()
        cy.log(signup.get_password_matched_toast().should('have.text', 'password matched!') ? "password matched toast displayed,testcase passed" : "password matched toast not displayed,testcase failed")
    })

    it("TC_Signup_24,Check whether password and confirm password field by entering different password", () => {
        signup.get_password().type('Abcd123@')
        signup.get_confirmPassword().type('efgh123@')
        signup.get_email().click()
        cy.log(signup.get_confirm_password_alter_toast().should('have.text', 'Password do not match!') ? "Password do not match! toast displayed,testcase passed" : "Password do not match! toast not displayed,testcase failed")
    })











})