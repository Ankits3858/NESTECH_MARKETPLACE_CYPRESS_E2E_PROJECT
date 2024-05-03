/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
import Create_Collection_Page from "../../PageObjects/Create_Collection_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const createNFT = new CreateNFT_Page
const create_collection = new Create_Collection_Page
const video = "cypress/fixtures/video.webm"
const user = require("../../fixtures/data")
const image = "cypress/fixtures/Picture.png"
const audio = "cypress/fixtures/audio.mp3"
describe("Validation of Create Collection module", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url"))
        cy.log(cy.title().should('eq', 'Marketplace') ? "user successfully landed on homepage" : "user unable to land on homepage")

        home_page.get_login
        cy.log("user successfully clicked on login")
        login_page.get_username().type(user.name)
        login_page.get_password().type(user.password)
        login_page.get_submit().click()
        cy.log(login_page.get_valid_toast().should('have.attr', 'aria-label', 'logged in successfully') ? "user is able to see success message 'logged in successfully'" : "user unable to see success message 'logged in successfully'")
        cy.wait(2000)

    })
    it.skip("TC_Collection_logo_01,validate whether user is able  to upload image file", () => {

        home_page.get_create_collection().click()
        if (
            create_collection.get_create_logo().selectFile(image) &&
            create_collection.get_uploaded_image_preview().should("be.visible")) { cy.log("image uploaded successfully inside collection logo,image is visible inside preview window,testcase passed") }
        else { cy.log("image not uploaded inside collection logo,image is not visible inside preview window,testcase failed") }
        create_collection.get_reset().click()

    })

    it.skip("TC_Collection_banner_20, validate whether user is able  to upload image file", () => {
        home_page.get_create_collection().click()
        if (
            create_collection.get_create_banner().selectFile(image) &&
            create_collection.get_uploaded_image_preview().should("be.visible")) { cy.log("image uploaded successfully inside collection banner,image is visible inside preview window,testcase passed") }
        else { cy.log("image not uploaded inside collection banner,image is not visible inside preview window,testcase failed") }
        create_collection.get_reset().click()
    })

    it.skip("TC_Create_38, validate whether user is able to create new collection", () => {
        home_page.get_create_collection().click()
        if (
            create_collection.get_create_logo().selectFile(image) &&
            create_collection.get_uploaded_image_preview().should("be.visible")) {
            cy.log("image inside collection logo uploaded successfully")
        }
        else {
            cy.log("image inside collection log is not uploaded")
        }

        if (
            create_collection.get_create_banner().selectFile(image) &&
            create_collection.get_uploaded_image_preview().should("be.visible")) {
            cy.log("image inside collection banner uploaded successfully")
        }
        else {
            cy.log("image inside collection banner not uploaded")
        }
        create_collection.get_description().type("testing")
        create_collection.get_name().type("testing")
        create_collection.get_category().select('Art')
        create_collection.get_create().click()
        cy.wait(5000)
        cy.log(create_collection.get_valid_toast().should('have.attr', 'aria-label', 'Nft collection created successfully!') ? "user is able to create nft collection,testcase passed" : "user unable to create nft collection,testcase failed")


    })

    it("TC_Reset_41, validate whether user is able to reset entered details inside create collection page", () => {
        home_page.get_create_collection().click()
        if (
            create_collection.get_create_logo().selectFile(image) &&
            create_collection.get_uploaded_image_preview().should("be.visible")) {
            cy.log("image inside collection logo uploaded successfully")
        }
        else {
            cy.log("image inside collection log is not uploaded")
        }

        if (
            create_collection.get_create_banner().selectFile(image) &&
            create_collection.get_uploaded_image_preview().should("be.visible")) {
            cy.log("image inside collection banner uploaded successfully")
        }
        else {
            cy.log("image inside collection banner not uploaded")
        }
        cy.log(create_collection.get_description().type("testing").should("have.value", "testing"))
        cy.log(create_collection.get_name().type("testing").should("have.value", 'testing'))
        create_collection.get_category().select('Art')
        create_collection.get_reset().click()
        if (
            create_collection.get_create_logo().should("be.empty") &&
            create_collection.get_create_banner().should("be.empty") &&
            create_collection.get_name().should("be.empty") &&
            create_collection.get_description().should("be.empty") &&
            create_collection.get_create_banner().should("be.empty")
        ) {
            cy.log("reset button is working fine,testcase passed")
        }
        else {
            cy.log("reset button is not working,testcase failed")
        }

    })


})