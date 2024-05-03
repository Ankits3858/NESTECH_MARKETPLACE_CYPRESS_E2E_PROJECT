import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
import Create_Collection_Page from "../../PageObjects/Create_Collection_Page"
import Settings_Information_Page from "../../PageObjects/Settings_Information_Page"
import Other_preferences_Page from "../../PageObjects/Other_preferences_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const createNFT = new CreateNFT_Page
const create_collection = new Create_Collection_Page
const other = new Other_preferences_Page
const Settings_information = new Settings_Information_Page
const video = "cypress/fixtures/video.webm"
const user = require("../../fixtures/data")
const image = "cypress/fixtures/Picture.png"
const audio = "cypress/fixtures/audio.mp3"
describe("other preferences module validation", () => {
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
        other.get_other_preference().click()

    })
    it("TC_listing_text_field_01,check whether user is able to enter text inside profile name field", () => {
        other.get_event_list().clear()
        cy.log(other.get_event_list().type('testing').should('have.value', 'testing') ? "field is accepting text,testcase passed" : "field is not accepting text,testcase failed")


    })
    it("TC_listing_text_field_02,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_event_list().clear()
        cy.log(other.get_event_list().should('have.attr', "ng-reflect-maxlength", "50") ? "field is not accepting 1k+ characters,max length is 50,testcase passed" : "field is accepting 1k+ characters,max length is more than 50,testcase failed")


    })
    it("TC_listing_text_field_03,Check whether user is able to enter limited characters inside listing_text_field", () => {
        other.get_event_list().clear()
        cy.log(other.get_event_list().should('have.attr', "ng-reflect-maxlength", "50") ? "field is not accepting 1k+ characters,max length is 50,testcase passed" : "field is accepting 1k+ characters,max length is more than 50,testcase failed")


    })
    it("TC_listing_text_field_04,Check whether listing_text_field is accepting characters", () => {
        other.get_event_list().clear()
        cy.log(other.get_event_list().type('testing').should('have.value', 'testing') ? "field is accepting characters,testcase passed" : "field is not accepting characters,testcase failed")

    })
    it("TC_listing_text_field_05,Check whether listing_text_field is accepting numeric characters", () => {
        other.get_event_list().clear()
        cy.log(other.get_event_list().type('123').should('have.value', '123') ? "field is accepting numeric characters,testcase passed" : "field is not accepting numeric characters,testcase failed")

    })

    it("TC_listing_text_field_06,Check whether listing_text_field is accepting special characters", () => {
        other.get_event_list().clear()
        cy.log(other.get_event_list().type('@123').should('have.value', '@123') ? "field is accepting special characters,testcase passed" : "field is not accepting special characters,testcase failed")

    })
    it("TC_listing_text_field_07,Check whether listing_text_field is accepting alpha numeric characters", () => {
        other.get_event_list().clear()
        cy.log(other.get_event_list().type('abc123').should('have.value', 'abc123') ? "field is accepting alpha numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")

    })
    /////////////////////////////////////////////////////////////////////////////////////
    it("TC_miles_numeric_field_07,Check whether user is able to enter text inside miles_numeric_field field", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting text,testcase passed" : "field is accepting text,testcase failed")

    })
    it("TC_miles_text_field_08,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', "ng-reflect-maxlength", "4") ? "field is not accepting 1k+ characters,max length is 4,testcase passed" : "field is accepting 1k+ characters,max length is more than 4,testcase failed")


    })
    it("TC_miles_text_field_09,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', "ng-reflect-maxlength", "4") ? "field is not accepting 1k+ characters,max length is 4,testcase passed" : "field is accepting 1k+ characters,max length is more than 4,testcase failed")


    })
    it("TC_miles_numeric_field_10,Check whether miles_numeric_field is field is accepting numbers", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', 'pattern', '[0-9]+') ? "field is accepting numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")

    })
    it("TC_miles_numeric_field_11,Check whether user is able to enter albhabet inside miles_numeric_field field", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_miles_numeric_field_12,Check whether user is able to enter albhabet inside miles_numeric_field field", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_miles_numeric_field_13,Check whether user is able to enter alphanumeric characters inside miles_numeric_field field", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphanumeric characters,testcase passed" : "field is accepting alphanumeric characters,testcase failed")

    })
    it("TC_miles_numeric_field_14,Check whether miles_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })
    it("TC_miles_numeric_field_15,Check whether miles_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_distance().clear()
        cy.log(other.get_distance().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    it("TC_b/w_$_numeric_field_16,Check whether user is able to enter text inside b/w_$_numeric_field", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting text,testcase passed" : "field is accepting text,testcase failed")

    })
    it("TC_b/w_$_numeric_field_17,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', "ng-reflect-maxlength", "6") ? "field is not accepting 1k+ characters,max length is 6,testcase passed" : "field is accepting 1k+ characters,max length is more than 6,testcase failed")


    })
    it("TC_b/w_$_numeric_field_18,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', "ng-reflect-maxlength", "6") ? "field is not accepting 1k+ characters,max length is 6,testcase passed" : "field is accepting 1k+ characters,max length is more than 6,testcase failed")


    })
    it("TC_b/w_$_numeric_field_19,Check whether b/w_$_numeric_field is accepting numbers", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', 'pattern', '[0-9]+') ? "field is accepting numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")

    })
    it("TC_b/w_$_numeric_field_19,Check whether user is able to enter albhabet inside b/w_$_numeric_field", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_b/w_$_numeric_field_21,Check whether user is able to enter albhabet inside b/w_$_numeric_field", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_b/w_$_numeric_field_22,Check whether user is able to enter alphanumeric characters inside b/w_$_numeric_field", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphanumeric characters,testcase passed" : "field is accepting alphanumeric characters,testcase failed")

    })
    it("TC_b/w_$_numeric_field_23,Check whether b/w_$_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })
    it("TC_b/w_$_numeric_field_24,Check whether b/w_$_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_max_price().clear()
        cy.log(other.get_max_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    it("TC_and_$_numeric_field_24,Check whether user is able to enter text inside and_$_numeric_field", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting text,testcase passed" : "field is accepting text,testcase failed")

    })
    it("TC_and_$_numeric_field_25,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', "ng-reflect-maxlength", "6") ? "field is not accepting 1k+ characters,max length is 6,testcase passed" : "field is accepting 1k+ characters,max length is more than 6,testcase failed")


    })
    it("TC_and_$_numeric_field_26,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', "ng-reflect-maxlength", "6") ? "field is not accepting 1k+ characters,max length is 6,testcase passed" : "field is accepting 1k+ characters,max length is more than 6,testcase failed")


    })
    it("TC_and_$_numeric_field_27,Check whether and_$_numeric_field is accepting numbers", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', 'pattern', '[0-9]+') ? "field is accepting numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")

    })
    it("TC_and_$_numeric_field_28,Check whether user is able to enter albhabet inside and_$_numeric_field", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_and_$_numeric_field_29,Check whether user is able to enter albhabet inside and_$_numeric_field", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_and_$_numeric_field_30,Check whether user is able to enter alphanumeric characters inside and_$_numeric_field", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphanumeric characters,testcase passed" : "field is accepting alphanumeric characters,testcase failed")

    })
    it("TC_and_$_numeric_field_31,Check whether and_$_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })
    it("TC_and_$_numeric_field_32,Check whether and_$_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_min_price().clear()
        cy.log(other.get_min_price().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })
    ////////////////////////////////////////////////////////////////////
    it("TC_year_$_numeric_field_33,Check whether user is able to enter text inside year_$_numeric_field", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting text,testcase passed" : "field is accepting text,testcase failed")

    })
    it("TC_year_$_numeric_field_34,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', "ng-reflect-maxlength", "2") ? "field is not accepting 1k+ characters,max length is 2,testcase passed" : "field is accepting 1k+ characters,max length is more than 2,testcase failed")


    })
    it("TC_year_$_numeric_field_35,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', "ng-reflect-maxlength", "2") ? "field is not accepting 1k+ characters,max length is 2,testcase passed" : "field is accepting 1k+ characters,max length is more than 2,testcase failed")


    })
    it("TC_year_$_numeric_field_36,Check whether year_$_numeric_field is accepting numbers", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', 'pattern', '[0-9]+') ? "field is accepting numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")

    })
    it("TC_year_$_numeric_field_37,Check whether user is able to enter albhabet inside year_$_numeric_field", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_year_$_numeric_field_38,Check whether user is able to enter albhabet inside year_$_numeric_field", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_year_$_numeric_field_39,Check whether user is able to enter alphanumeric characters inside year_$_numeric_field", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphanumeric characters,testcase passed" : "field is accepting alphanumeric characters,testcase failed")

    })
    it("TC_year_$_numeric_field_40,Check whether year_$_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })
    it("TC_year_$_numeric_field_42,Check whether year_$_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_year().clear()
        cy.log(other.get_year().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })

    //////////////////////////////////////////////////////////////////////
    it("TC_%_$_numeric_field_43,Check whether user is able to enter text inside %_$_numeric_field", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting text,testcase passed" : "field is accepting text,testcase failed")

    })
    it("TC_%_$_numeric_field_44,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', "ng-reflect-maxlength", "3") ? "field is not accepting 1k+ characters,max length is 3,testcase passed" : "field is accepting 1k+ characters,max length is more than 3,testcase failed")


    })
    it("TC_%_$_numeric_field_45,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', "ng-reflect-maxlength", "3") ? "field is not accepting 1k+ characters,max length is 3,testcase passed" : "field is accepting 1k+ characters,max length is more than 3,testcase failed")


    })
    it("TC_%_$_numeric_field_46,Check whether %_$_numeric_field is accepting numbers", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', 'pattern', '[0-9]+') ? "field is accepting numeric characters,testcase passed" : "field is not accepting alpha numeric characters,testcase failed")

    })
    it("TC_%_$_numeric_field_48,Check whether user is able to enter albhabet inside %_$_numeric_field", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_%_$_numeric_field_49,Check whether user is able to enter albhabet inside %_$_numeric_field", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphabet,testcase passed" : "field is accepting alphabet,testcase failed")

    })
    it("TC_%_$_numeric_field_50,Check whether user is able to enter alphanumeric characters inside %_$_numeric_field", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting alphanumeric characters,testcase passed" : "field is accepting alphanumeric characters,testcase failed")

    })
    it("TC_%_$_numeric_field_51,Check whether %_$_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })
    it("TC_%_$_numeric_field_52,Check whether %_$_numeric_field is accepting combination of alphanumeric characters and special characters", () => {
        other.get_variation().clear()
        cy.log(other.get_variation().should('have.attr', 'pattern', '[0-9]+') ? "field is not accepting combination of alphanumeric characters and special characters,testcase passed" : "field is accepting combination of alphanumeric characters and special characters,testcase failed")

    })

    it("TC_reset_45,Check whether reset button is resetting the fields", () => {
        other.get_event_list().type('testing')
        other.get_max_price().type('12')
        other.get_distance().type('12')
        other.get_event_list().type('12')
        other.get_min_price().type('12')
        other.get_year().type('12')
        other.get_variation().type('12')



        other.get_distance().should('be.empty')

        if (other.get_event_list().should('be.empty') &&
            other.get_max_price().should('be.empty') &&
            other.get_distance().should('be.empty') &&
            other.get_event_list().should('be.empty') &&
            other.get_year().should('be.empty') &&
            other.get_variation().should('be.empty')) {
            cy.log("reset button is resetting all fields,testcase passed")
        }
        else {
            cy.log("reset button is not resetting all fields,testcase failed")
        }



    })
    it("TC_reset_45,Check whether user is able to save after filling valid details", () => {
        other.get_event_list().type('testing')
        other.get_max_price().type('12')
        other.get_distance().type('12')
        other.get_event_list().type('12')
        other.get_min_price().type('12')
        other.get_year().type('12')
        other.get_variation().type('12')

        other.get_save().click()

        cy.log(cy.get(".toast-title").should('be.visible') ? "user is able to save details,test case passed" : "user is not able to save details,test case failed")
    })





})
