/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
import Create_Collection_Page from "../../PageObjects/Create_Collection_Page"
import Settings_Information_Page from "../../PageObjects/Settings_Information_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const createNFT = new CreateNFT_Page
const create_collection = new Create_Collection_Page
const Settings_information = new Settings_Information_Page
const video = "cypress/fixtures/video.webm"
const user = require("../../fixtures/data")
const image = "cypress/fixtures/Picture.png"
const audio = "cypress/fixtures/audio.mp3"
describe("settings information validation", () => {
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
        Settings_information.get_settings().click()
        cy.wait(2000)
        Settings_information.get_cross_button().click()
        Settings_information.get_settings_information().click()
    })
    it("TC_DisplayName_01,Check whether user is able to enter text inside profile name field", () => {
        Settings_information.get_display_name().clear()
        cy.log(Settings_information.get_display_name().type('rajesh').should('have.value', 'rajesh').should('be.enabled') ? "user is able to enter text inside display name field,testcase passed" : "user is unable to enter text inside display name field,testcase failed")

    })
    it("TC_DisplayName_02,Check whether user is able to see display message limit exceed after entering 1k+ characters", () => {
        cy.log(Settings_information.get_display_name().should('have.attr', 'maxlength', '120').should('be.enabled') ? "user is unable to enter 1k+ characters inside display name field,maximum limit is 120,testcase passed" : "user is able to enter 1k+ characters inside display name field,testcase failed")
    })
    it("TC_DisplayName_05,Check whether profile name field is accepting numbers as first character", () => {
        Settings_information.get_display_name().clear()
        cy.log(Settings_information.get_display_name().type('123').should('have.value', '123').should('be.enabled') ? "user is able to enter numbers inside display name field,testcase passed" : "user is unable to enter numbers inside display name field,testcase failed")
    })
    it("TC_DisplayName_06, Check whether profile name field is accepting special characters", () => {
        Settings_information.get_display_name().clear()
        cy.log(Settings_information.get_display_name().type('@#$').should('have.value', '@#$').should('be.enabled') ? "user is able to enter special characters inside display name field,testcase passed" : "user is unable to enter special characters inside display name field,testcase failed")
    })
    it("TC_DisplayName_07,Check whether profile name field is accepting alpha numeric characters", () => {
        Settings_information.get_display_name().clear()
        cy.log(Settings_information.get_display_name().type('abc@#$').should('have.value', 'abc@#$').should('be.enabled') ? "user is able to enter alpha numeric characters inside display name field,testcase passed" : "user is unable to enter alpha numeric characters inside display name field,testcase failed")
    })

    //////////////////////////////////////////////////////////////////////////////////////////

    it("TC_Location_09,Check whether user is able to enter text inside profile name field", () => {
        cy.log(Settings_information.get_location().should('have.value', 'India, Tamil Nadu, Erkudi').should('be.enabled') ? "user is able to enter text inside display name field,testcase passed" : "user is unable to enter text inside display name field,testcase failed")

    })
    /*it("TC_Location_10,Check whether user is able to see display message limit exceed after entering 1k+ characters",()=>{
        cy.log(Settings_information.get_location().should('have.attr','maxlength','120').should('be.enabled')?"user is unable to enter 1k+ characters inside display name field,maximum limit is 120,testcase passed":"user is able to enter 1k+ characters inside display name field,testcase failed")
    })*/
    it("TC_Location_13,Check whether profile name field is accepting numbers as first character", () => {
        Settings_information.get_location().clear()
        cy.log(Settings_information.get_location().type('123').should('have.value', '123').should('be.enabled') ? "user is able to enter numbers inside display name field,testcase passed" : "user is unable to enter numbers inside display name field,testcase failed")
    })
    it("TC_Location_14, Check whether profile name field is accepting special characters", () => {
        Settings_information.get_location().clear()
        cy.log(Settings_information.get_location().type('@#$').should('have.value', '@#$').should('be.enabled') ? "user is able to enter special characters inside display name field,testcase passed" : "user is unable to enter special characters inside display name field,testcase failed")
    })
    it("TC_Location_15,Check whether profile name field is accepting alpha numeric characters", () => {
        Settings_information.get_location().clear()
        cy.log(Settings_information.get_location().type('abc@#$').should('have.value', 'abc@#$').should('be.enabled') ? "user is able to enter alpha numeric characters inside display name field,testcase passed" : "user is unable to enter alpha numeric characters inside display name field,testcase failed")
    })
    it("TC_Price_21,Check whether price is field is accepting numbers", () => {
        Settings_information.get_price().clear()
        cy.log(Settings_information.get_price().type('1234').should('have.value', '1234').should('be.enabled') ? "user is able to enter numbers inside price field,testcase passed" : "user is unable to enter numbers inside price field,testcase failed")

    })
    it("TC_Profile_image_25,validate whether user is able  to upload image file", () => {

        if (
            Settings_information.get_profileImage().selectFile(image))
        //create_collection.get_uploaded_image_preview().should("be.visible")
        {
            cy.log("image inside profile image uploaded successfully,testcase passed")
        }
        else {
            cy.log("image inside profile image is not uploaded,testcase failed")
        }
    })
    it("TC_genderType_34, validate whether user is able to select gender type,", () => {
        if (
            cy.log(Settings_information.get_genderType().should('be.enabled') ? "gender type dropdown is enabled" : "gender type dropdown is not enabled") &&
            cy.log(Settings_information.get_genderType().select('Male').should('have.value', 'MALE') ? "user is able to select 'male' as option" : "user is not able to select 'male' as option") &&
            cy.log(Settings_information.get_genderType().select('Female').should('have.value', 'FEMALE') ? "user is able to select 'Female' as option" : "user is not able to select 'Female' as option") &&
            cy.log(Settings_information.get_genderType().select('Other').should('have.value', 'OTHER') ? "user is able to select 'other' as option" : "user is not able to select 'other' as option")) {
            cy.log("genderType dropdown is working successfully,testcase passed")
        }
        else {
            cy.log("genderType dropdown is not working,testcase failed")
        }

    })
    it("TC_save_35,validate whether user is able to save the entered details", () => {
        if (cy.log(Settings_information.get_profileImage().selectFile(image) ? "image uploaded successfully inside profile image" : "image not uploaded inside profile image") &&
            Settings_information.get_display_name().clear() &&
            cy.log(Settings_information.get_display_name().type('rajesh') ? "display name entered successfully" : "display name not entered") &&
            Settings_information.get_location().clear() &&
            cy.log(Settings_information.get_location().type('pune') ? "location enter successfully" : "location not entered") &&
            Settings_information.get_price().clear() &&
            cy.log(Settings_information.get_price().type("1234") ? "price enter successfully" : "price not entered") &&
            cy.log(Settings_information.get_save().click() ? "successfully clicked on save button" : "unable to click on save button")) {
            cy.log("user is able to save all details,testcase passed")
        }
        else {
            cy.log("user is not able to save details.testcase failed")
        }





    })










})