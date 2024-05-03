/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const createNFT = new CreateNFT_Page
const video = "cypress/fixtures/video.webm"
const user = require("../../fixtures/data")
const image = "cypress/fixtures/Picture.png"
const audio = "cypress/fixtures/audio.mp3"
describe("validation of createNFT module", () => {
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

    it("TC_CreateNFT_01 validate whether user is able  to upload image file", () => {
        if (home_page.get_createNFT().click() &&
            createNFT.get_upload_file().selectFile(image) &&
            createNFT.get_uploaded_image_preview().should("be.visible")) { cy.log("image uploaded successfully,testcase passed") }
        else { cy.log("image not uploaded,testcase failed") }
        createNFT.get_cancel_uploaded_file().click()
    })
    it("TC_CreateNFT_02 validate whether user is able  to upload video file", () => {
        if (home_page.get_createNFT().click() &&
            createNFT.get_upload_file().selectFile(video) &&
            createNFT.get_uploaded_video_preview().should("be.visible")) { cy.log("video uploaded successfully,testcase passed") }
        else { cy.log("video not uploaded,testcase failed") }
        createNFT.get_cancel_uploaded_file().click()

    })

    it("TC_CreateNFT_02 validate whether user is able  to upload audio file", () => {
        if (home_page.get_createNFT().click() &&
            createNFT.get_upload_file().selectFile(audio) &&
            createNFT.get_uploaded_audio_preview().should("be.visible")) { cy.log("audio uploaded successfully,testcase passed") }
        else { cy.log("audio not uploaded,testcase failed") }
        createNFT.get_cancel_uploaded_file().click()

    })
    it("TC_Preview_09 validate whether image is displayed after uploading", () => {
        if (home_page.get_createNFT().click() &&
            createNFT.get_upload_file().selectFile(image) &&
            createNFT.get_uploaded_image_preview().should("be.visible")) { cy.log("image is visible inside preview window,testcase passed") }
        else { cy.log("image is not visible inside preview window,testcase failed") }
        createNFT.get_cancel_uploaded_file().click()
    })
    it("TC_Preview_10 validate whether video is displayed after uploading", () => {
        if (home_page.get_createNFT().click() &&
            createNFT.get_upload_file().selectFile(video) &&
            createNFT.get_uploaded_video_preview().should("be.visible")) { cy.log("video is visible inside preview window,testcase passed") }
        else { cy.log("video is not visible inside preview window,testcase failed") }
        createNFT.get_cancel_uploaded_file().click()
    })
    it("TC_Preview_11 validate whether audio is displayed after uploading", () => {
        if (home_page.get_createNFT().click() &&
            createNFT.get_upload_file().selectFile(audio) &&
            createNFT.get_uploaded_audio_preview().should("be.visible")) { cy.log("audio file is visible inside preview window,testcase passed") }
        else { cy.log("audio file is not visible inside preview window,testcase failed") }
        createNFT.get_cancel_uploaded_file().click()
    })
    it("TC_enable/disable_18 validate whether enable/disable button ", () => {
        home_page.get_createNFT().click()
        if (createNFT.get_enable_disable1().click() &&
            createNFT.get_enable_disable2().click() &&
            createNFT.get_enable_disable1().click() &&
            createNFT.get_enable_disable2().click()) {
            cy.log("enable/disable buttons are working")
        }
        else {
            cy.log("enable/disable buttons are not working")
        }


    })
    it("TC_name_18 Check whether user is able to enter text inside name field", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_name().type("testing").should('have.value', 'testing') ? "name field is accepting text,testcase passed" : "name field is not accepting text,testcase failed")
    })
    it("TC_description_22,Check whether user is able to enter text inside description field ", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_description().type("testing").should('have.value', 'testing') ? "description field is accepting text,testcase passed" : "description field is not accepting text,testcase failed")

    })
    it("TC_category_27, Check whether user is able to hover within category options", () => {
        home_page.get_createNFT().click()
        if (createNFT.get_photo().click() &&
            createNFT.get_audio().click() &&
            createNFT.get_digital_art().click()) {
            cy.log("user is able to click over category option,testcase got passed")
        }
        else {
            cy.log("user is unable to click over category option,testcase failed passed")
        }

    })
    it("TC_url_29, Check whether user is able to enter inside text inside url field", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_url().type("testing").should('have.value', 'testing') ? "url field is accepting text,testcase passed" : "url field is not accepting text,testcase failed")
    })

    it("TC_url_33, Check whether user is able to enter number inside text inside url field", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_url().type("1234").should('have.value', '1234') ? "url field is accepting numbers,testcase passed" : "url field is not accepting numbers,testcase failed")
    })
    it("TC_url_34, Check whether url is field is accepting alphabets", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_url().type("abcdef").should('have.value', 'abcdef') ? "url field is accepting alphabet,testcase passed" : "url field is not accepting alphabet,testcase failed")
    })
    it("TC_url_35, Check whether url field is accepting alphanumeric characters", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_url().type("abcdef123").should('have.value', 'abcdef123') ? "url field is accepting alphanumeric characters,testcase passed" : "url field is not accepting alphanumeric characters,testcase failed")
    })
    it("TC_url_36, Check whether url field is accepting combination of alphanumeric characters and special characters", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_url().type("abcdef123@#").should('have.value', 'abcdef123@#') ? "url field is accepting combination of alphanumeric characters and special characters,testcase passed" : "url field is not accepting combination of alphanumeric characters and special characters,testcase failed")
    })

    it("TC_price_40, Check whether price is field is accepting numbers", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_price().type("12345").should('have.value', '12345') ? "user is able to enter numbers inside price field,testcase passed" : "user is not able to enter numbers inside price field,testcase failed")
    })

    it("TC_price_40, Check whether price is field is accepting numbers", () => {
        home_page.get_createNFT().click()
        cy.log(createNFT.get_price().type("12345").should('have.value', '12345') ? "user is able to enter numbers inside price field,testcase passed" : "user is not able to enter numbers inside price field,testcase failed")
    })
    it("TC_reset_44, Check whether after entering all the details , reset link make them empty", () => {
        home_page.get_createNFT().click()
        createNFT.get_upload_file().selectFile(image)
        createNFT.get_enable_disable2().click()
        createNFT.get_enable_disable1().click()
        createNFT.get_audio().click()
        createNFT.get_name().type("testing")
        createNFT.get_description().type("testing")
        createNFT.get_url().type("testing")
        createNFT.get_reset().click()
        if (createNFT.get_upload_file().should('be.empty') &&
            createNFT.get_name().should('be.empty') &&
            createNFT.get_description().should('be.empty') &&
            createNFT.get_url().should('be.empty')) { cy.log("reset button is working fine,testcase passed") }
        else { cy.log("reset button is not working fine,testcase failed") }





    })











})