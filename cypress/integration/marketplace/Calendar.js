/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
import Create_Collection_Page from "../../PageObjects/Create_Collection_Page"
import Settings_Information_Page from "../../PageObjects/Settings_Information_Page"
import Calendar_Page from "../../PageObjects/Calendar_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const createNFT = new CreateNFT_Page
const create_collection = new Create_Collection_Page
const Settings_information = new Settings_Information_Page
const calendar = new Calendar_Page
const video = "cypress/fixtures/video.webm"
const user = require("../../fixtures/data")
const image = "cypress/fixtures/Picture.png"
const audio = "cypress/fixtures/audio.mp3"
describe("calendar and schedule module validation", () => {
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
        // cy.viewport(1536, 960)
        Settings_information.get_settings().click()
        calendar.get_calendar_schedules().click()
        Settings_information.get_cross_button().click()

    })
    it.skip("TC_title_01,Check whether user is able to enter text inside 'what' text field", () => {

        calendar.get_create_schedule().click()
        cy.log(calendar.get_title().should('be.enabled') ? "title field is enabled" : "title field is not enabled")
        cy.log(calendar.get_title().type("testing").should('have.value', "testing") ? "user is able to enter text inside title field,testcase passed" : "user is not able to enter text inside title field,testcase failed")

    })

    it.skip("TC_title_02,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_title().should('have.attr', 'maxlength', '200') ? "unable to enter 1k+ characters as max limit is 200,tescase passed" : "able to enter 1k+ characters,tescase failed")

    })

    it.skip("TC_title_03,Check whether user is able to enter limited characters inside 'title' text field", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_title().should('have.attr', 'maxlength', '200') ? "unable to enter 1k+ characters as max limit is 200,tescase passed" : "able to enter 1k+ characters,tescase failed")
    })
    it.skip("TC_title_04,Check whether 'title' text field is accepting characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_title().should('be.enabled') ? "title field is enabled" : "title field is not enabled")
        cy.log(calendar.get_title().type("testing").should('have.value', "testing") ? "title field is accepting characters,testcase passed" : "title field is not accepting characters,testcase failed")
    })
    it.skip("TC_title_05,Check whether 'title' text field is accepting numbers as first character", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_title().should('be.enabled') ? "title field is enabled" : "title field is not enabled")
        cy.log(calendar.get_title().type("1234").should('have.value', "1234") ? "title field is accepting numbers,testcase passed" : "title field is not accepting numbers,testcase failed")
    })
    it.skip("TC_title_06,Check whether 'title' text field is accepting special characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_title().should('be.enabled') ? "title field is enabled" : "title field is not enabled")
        cy.log(calendar.get_title().type("!@#").should('have.value', "!@#") ? "title field is accepting special characters,testcase passed" : "title field is not accepting special characters,testcase failed")

    })

    it.skip("TC_title_07,Check whether 'title' text field is accepting alpha numeric characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_title().should('be.enabled') ? "title field is enabled" : "title field is not enabled")
        cy.log(calendar.get_title().type("abc123").should('have.value', "abc123") ? "title field is accepting alpha numeric characters,testcase passed" : "title field is not accepting alpha numeric characters,testcase failed")

    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    it.skip("TC_description_08,Check whether user is able to enter text inside 'description' text field", () => {

        calendar.get_create_schedule().click()
        cy.log(calendar.get_description().should('be.enabled') ? "description field is enabled" : "description field is not enabled")
        cy.log(calendar.get_description().type("testing").should('have.value', "testing") ? "user is able to enter text inside description field,testcase passed" : "user is not able to enter text inside description field,testcase failed")

    })

    it.skip("TC_description_09,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_description().should('have.attr', 'maxlength', '1000') ? "unable to enter 1k+ characters as max limit is 1000,tescase passed" : "able to enter 1k+ characters,tescase failed")

    })

    it.skip("TC_description_10,Check whether user is able to enter limited characters inside 'description' text field", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_description().should('have.attr', 'maxlength', '1000') ? "unable to enter 1k+ characters as max limit is 1000,tescase passed" : "able to enter 1k+ characters,tescase failed")

    })

    it.skip("TC_description_11,Check whether 'description' text field is accepting characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_description().should('be.enabled') ? "description field is enabled" : "description field is not enabled")
        cy.log(calendar.get_description().type("testing").should('have.value', "testing") ? "description field is accepting characters,testcase passed" : "description field is not accepting characters,testcase failed")

    })

    it.skip("TC_description_12,Check whether 'description' text field is accepting numbers as first character", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_description().should('be.enabled') ? "title field is enabled" : "title field is not enabled")
        cy.log(calendar.get_description().type("1234").should('have.value', "1234") ? "description field is accepting numbers,testcase passed" : "description field is not accepting numbers,testcase failed")


    })

    it.skip("TC_description_13,Check whether 'description' text field is accepting special characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_description().should('be.enabled') ? "description field is enabled" : "description field is not enabled")
        cy.log(calendar.get_description().type("!@#").should('have.value', "!@#") ? "description field is accepting special characters,testcase passed" : "description field is not accepting special characters,testcase failed")

    })

    it.skip("TC_description_14,Check whether 'description' text field is accepting alpha numeric characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_description().should('be.enabled') ? "description field is enabled" : "description field is not enabled")
        cy.log(calendar.get_description().type("abc123").should('have.value', "abc123") ? "description field is accepting alpha numeric characters,testcase passed" : "description field is not accepting alpha numeric characters,testcase failed")

    })
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    it.skip("TC_where_15,Check whether user is able to enter text inside 'where' text field", () => {

        calendar.get_create_schedule().click()
        cy.log(calendar.get_where().should('be.enabled') ? "where field is enabled" : "where field is not enabled")
        cy.log(calendar.get_description().type("testing").should('have.value', "testing") ? "user is able to enter text inside where field,testcase passed" : "user is not able to enter text inside where field,testcase failed")

    })

    it.skip("TC_where_16,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_where().should('have.attr', 'maxlength', '200') ? "unable to enter 1k+ characters as max limit is 200,tescase passed" : "able to enter 1k+ characters,tescase failed")

    })

    it.skip("TC_where_17,Check whether user is able to enter limited characters inside 'where' text field", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_where().should('have.attr', 'maxlength', '200') ? "unable to enter 1k+ characters as max limit is 200,tescase passed" : "able to enter 1k+ characters,tescase failed")
    })
    it.skip("TC_where_18,Check whether 'where' text field is accepting characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_where().should('be.enabled') ? "where field is enabled" : "where field is not enabled")
        calendar.get_where().clear()
        cy.log(calendar.get_where().type("testing").should('have.value', "testing") ? "where field is accepting characters,testcase passed" : "where field is not accepting characters,testcase failed")
    })
    it.skip("TC_where_19,Check whether 'where' text field is accepting numbers as first character", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_where().should('be.enabled') ? "title field is enabled" : "title field is not enabled")
        calendar.get_where().clear()
        cy.log(calendar.get_where().type("1234").should('have.value', "1234") ? "where field is accepting numbers,testcase passed" : "where field is not accepting numbers,testcase failed")
    })

    it.skip("TC_where_20,Check whether 'where' text field is accepting special characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_where().should('be.enabled') ? "description field is enabled" : "description field is not enabled")
        calendar.get_where().clear()
        cy.log(calendar.get_where().type("!@#").should('have.value', "!@#") ? "where field is accepting special characters,testcase passed" : "where field is not accepting special characters,testcase failed")
    })
    it.skip("TC_where_21,Check whether 'where' text field is accepting alpha numeric characters", () => {
        calendar.get_create_schedule().click()
        cy.log(calendar.get_where().should('be.enabled') ? "where field is enabled" : "where field is not enabled")
        calendar.get_where().clear()
        cy.log(calendar.get_where().type("abc123").should('have.value', "abc123") ? "where field is accepting alpha numeric characters,testcase passed" : "where field is not accepting alpha numeric characters,testcase failed")

    })
    ////////////////////////////////////////////////////////////////////////
    it.skip("TC_Type_22,Check whether user is able to select and unselect radio buttons", () => {
        calendar.get_create_schedule().click()
        if (cy.log(calendar.get_private().check('private/personal') ? "'private/personal' radio button is enabled and selectable" : "'private/personal' radio button is not enabled and not selectable") &&
            cy.log(calendar.get_work().check('work/travel') ? "'work/travel' radio button is enabled and selectable" : "'work/travel' radio button is not enabled and not selectable")) {
            cy.log("radio buttons under 'type as' working fine,testcase passed")
        }
        else {
            cy.log("radio buttons under 'type as' not working,testcase failed")
        }
    })
    it.skip("TC_Pin_as_23,Check whether user is able to select and unselect radio buttons", () => {
        calendar.get_create_schedule().click()
        if (cy.log(calendar.get_pin_as().check('on') ? "'pin_as' radio button is enabled and selectable" : "'pin_as' radio button is not enabled and not selectable")) {
            cy.log("radio button under 'pin_as' working fine,testcase passed")
        }
        else {
            cy.log("radio button under 'pin_as' not working,testcase failed")
        }
    })
    it.skip("TC_Date_24,Check whether user is able to select date and time", () => {
        calendar.get_create_schedule().click()
        calendar.get_from().click()
        calendar.get_date_selection().click()
        calendar.get_year().click()
        calendar.get_month().click()
        calendar.get_add_hour().click()
        calendar.get_add_hour().click()
        calendar.get_hour_minute().click()
        calendar.get_set_button().click()

        cy.wait(2000)
        calendar.get_to().click()
        calendar.get_date_selection().click()
        calendar.get_year().click()
        calendar.get_month().click()
        calendar.get_add_hour().click()
        calendar.get_add_hour().click()
        calendar.get_hour_minute().click()
        calendar.get_set_button().click()
    })

    it.skip("TC_use_my_default_25,Check whether user is able to select and unselect radio buttons", () => {
        calendar.get_create_schedule().click()
        if (cy.log(calendar.get_use_my_default().check('defaultTerms') ? "'get_use_my_default' radio button is enabled and selectable" : "'get_use_my_default' radio button is not enabled and not selectable")) {
            cy.log("radio button under 'get_use_my_default' working fine,testcase passed")
        }
        else {
            cy.log("radio button under 'get_use_my_default' not working,testcase failed")
        }
    })
    it.skip("TC_reset_27,Check whether user is able to reset fields", () => {
        calendar.get_create_schedule().click()
        calendar.get_title().type("testing")
        calendar.get_description().type("testing")
        calendar.get_where().type("pune")
        calendar.get_from().click()
        calendar.get_date_selection().click()
        calendar.get_year().click()
        calendar.get_month().click()
        calendar.get_add_hour().click()
        calendar.get_add_hour().click()
        calendar.get_hour_minute().click()
        calendar.get_set_button().click()

        cy.wait(2000)
        calendar.get_to().click()
        calendar.get_date_selection().click()
        calendar.get_year().click()
        calendar.get_month().click()
        calendar.get_add_hour().click()
        calendar.get_add_hour().click()
        calendar.get_hour_minute().click()
        calendar.get_set_button().click()
        calendar.get_pin_as().click()
        calendar.get_reset().click()
        if (

            calendar.get_title().should('be.empty') &&
            calendar.get_description().should('be.empty') &&
            calendar.get_where().should('be.empty')
        ) {
            cy.log("reset button is working fine,testcase passed")
        }
        else {
            cy.log("reset button is not working fine,testcase failed")
        }





    })

    it.skip("TC_add_to_my_schedule_28,Check whether user is able to add details to the schedule",()=>{
        calendar.get_create_schedule().click()
        calendar.get_title().type("testing")
        calendar.get_description().type("testing")
        calendar.get_where().type("pune")
        calendar.get_from().click()
        calendar.get_date_selection().click()
        calendar.get_year().click()
        calendar.get_month().click()
        calendar.get_add_hour().click()
        calendar.get_add_hour().click()
        calendar.get_hour_minute().click()
        calendar.get_set_button().click()

        cy.wait(2000)
        calendar.get_to().click()
        calendar.get_date_selection().click()
        calendar.get_year().click()
        calendar.get_month().click()
        calendar.get_add_hour().click()
        calendar.get_add_hour().click()
        calendar.get_hour_minute().click()
        calendar.get_set_button().click()
        calendar.get_pin_as().click()
        calendar.get_work().click()
        calendar.get_use_my_default().click()

        calendar.get_add_to_my_schedule().click()
        if(calendar.get_add_to_my_schedule().should('be.enabled').should('be.visible'))
        {
            cy.log("add to my schedule is working,testcase passed ")
        }
        else
        {
            {
                cy.log("add to my schedule is not working,testcase failed")
            }
        }
       })
    it("TC_tab_30,Check whether user is able to swtich between tabs",()=>{
        calendar.get_create_schedule().click().should('contain.text','Create Schedules')
        calendar.get_my_booking_hours().click().should('contain.text','My Booking Hours')
        calendar.get_my_calendar().click().should('contain.text','My Calendar')


    })


})