import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
import Create_Collection_Page from "../../PageObjects/Create_Collection_Page"
import Settings_Information_Page from "../../PageObjects/Settings_Information_Page"
import Other_preferences_Page from "../../PageObjects/Other_preferences_Page"
import Help_Page from "../../PageObjects/Help_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const createNFT = new CreateNFT_Page
const create_collection = new Create_Collection_Page
const help = new Help_Page
const other = new Other_preferences_Page
const Settings_information = new Settings_Information_Page
const video = "cypress/fixtures/video.webm"
const user = require("../../fixtures/data")
const image = "cypress/fixtures/Picture.png"
const audio = "cypress/fixtures/audio.mp3"
describe("help module validation",()=>{
    beforeEach(() => {

        cy.visit(Cypress.env("url"))
        cy.log(cy.title().should('eq', 'Marketplace') ? "user successfully landed on homepage" : "user unable to land on homepage")

        home_page.get_login
        cy.log("user successfully clicked on login")
        login_page.get_username().type(user.name)
        login_page.get_password().type(user.password)
        login_page.get_submit().click()
        cy.log(login_page.get_valid_toast().should('have.attr', 'aria-label', 'logged in successfully') ? "user is able to see success message 'logged in successfully'" : "user unable to see success message 'logged in successfully'")
        home_page.get_navigation_bar().click()
        cy.viewport(1536, 960)
        Settings_information.get_settings().click()
        help.get_help().click()
    

    })

    it("TC_title_01,check whether user is able to enter text inside title field", () => {
        help.get_add_ticket().click()
        help.get_title().clear()
        cy.log(help.get_title().type('testing').should('have.value', 'testing') ? "field is accepting text,testcase passed" : "field is not accepting text,testcase failed")
    
    
    })
    it("TC_title_02,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        help.get_add_ticket().click()
        help.get_title().clear()
        cy.log(help.get_title().should('have.attr', "ng-reflect-maxlength", "50") ? "field is not accepting 1k+ characters,max length is 50,testcase passed" : "field is accepting 1k+ characters,max length is more than 50,testcase failed")
    
    
    })
    it("TC_title_03,Check whether user is able to enter limited characters inside title", () => {
        help.get_add_ticket().click()
        help.get_title().clear()
        cy.log(help.get_title().should('have.attr', "ng-reflect-maxlength", "50") ? "field is not accepting 1k+ characters,max length is 50,testcase passed" : "field is accepting 1k+ characters,max length is more than 50,testcase failed")
    
    
    })
    it("TC_title_04,Check whether title is accepting characters", () => {
        help.get_add_ticket().click()
        help.get_title().clear()
        cy.log(help.get_title().type('testing').should('have.value', 'testing') ? "field is accepting characters,testcase passed" : "field is not accepting characters,testcase failed")
    
    })
    it("TC_title_05,Check whether title is accepting numeric characters", () => {
        help.get_add_ticket().click()
        help.get_title().clear()
        cy.log(help.get_title().type('123').should('have.value','123') ? "field is accepting numeric characters,testcase passed" : "field is not accepting numeric characters,testcase failed")
    
    })
    
    it("TC_title_06,Check whether title is accepting special characters", () => {
        help.get_add_ticket().click()
        help.get_title().clear()
        cy.log(help.get_title().type('@123').should('have.value', '@123') ? "field is accepting special characters,testcase passed" : "field is not accepting special characters,testcase failed")
    
    })
    it("TC_title_07,Check whether title is accepting alpha numeric characters", () => {
        help.get_add_ticket().click()
        help.get_title().clear()
        cy.log(help.get_title().type('abc123').should('have.value', 'abc123') ? "field is accepting alpha numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")
    
    })

    /////////////////////////////////////////////////////
    it("TC_description_08,check whether user is able to enter text inside description field", () => {
        help.get_add_ticket().click()
        help.get_description().clear()
        cy.log(help.get_description().type('testing').should('have.value', 'testing') ? "field is accepting text,testcase passed" : "field is not accepting text,testcase failed")
    
    
    })
    it("TC_description_09,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        help.get_add_ticket().click()
        help.get_description().clear()
        cy.log(help.get_description().should('have.attr', "ng-reflect-maxlength", "100") ? "field is not accepting 1k+ characters,max length is 100,testcase passed" : "field is accepting 1k+ characters,max length is more than 100,testcase failed")
    
    
    })
    it("TC_description_10,Check whether user is able to enter limited characters inside description", () => {
        help.get_add_ticket().click()
        help.get_description().clear()
        cy.log(help.get_description().should('have.attr', "ng-reflect-maxlength", "100") ? "field is not accepting 1k+ characters,max length is 100,testcase passed" : "field is accepting 1k+ characters,max length is more than 100,testcase failed")
    
    
    })
    it("TC_description_11,Check whether description is accepting characters", () => {
        help.get_add_ticket().click()
        help.get_description().clear()
        cy.log(help.get_description().type('testing').should('have.value', 'testing') ? "field is accepting characters,testcase passed" : "field is not accepting characters,testcase failed")
    
    })
    it("TC_description_12,Check whether description is accepting numeric characters", () => {
        help.get_add_ticket().click()
        help.get_description().clear()
        cy.log(help.get_description().type('123').should('have.value', '123') ? "field is accepting numeric characters,testcase passed" : "field is not accepting numeric characters,testcase failed")
    
    })
    
    it("TC_description_13,Check whether description is accepting special characters", () => {
        help.get_add_ticket().click()
        help.get_description().clear()
        cy.log(help.get_description().type('@123').should('have.value', '@123') ? "field is accepting special characters,testcase passed" : "field is not accepting special characters,testcase failed")
    
    })
    it("TC_description_14,Check whether description is accepting alpha numeric characters", () => {
        help.get_add_ticket().click()
        help.get_description().clear()
        cy.log(help.get_description().type('abc123').should('have.value', 'abc123') ? "field is accepting alpha numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")
    
    })

})