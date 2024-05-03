/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import My_Collection_Page from "../../PageObjects/My_Collection_Page"
import Create_Collection_Page from "../../PageObjects/Create_Collection_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const my_collection = new My_Collection_Page
const create_collection = new Create_Collection_Page
const user = require("../../fixtures/data")
const video = "cypress/fixtures/video.webm"
const image = "cypress/fixtures/Picture.png"
const audio = "cypress/fixtures/audio.mp3"
describe("My collection validation", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("url"))
        cy.log(cy.title().should('eq', 'Marketplace') ? "user successfully landed on homepage" : "user unable to land on homepage")

        home_page.get_login
        cy.log("user successfully clicked on login")
        login_page.get_username().type(user.name)
        login_page.get_password().type(user.password)
        login_page.get_submit().click()
        cy.log(login_page.get_valid_toast().should('have.attr', 'aria-label', 'logged in successfully') ? "user is able to see success message 'logged in successfully'" : "user unable to see success message 'logged in successfully'")
        cy.wait(3000)
    })
    it("TC_MyCollection_01, Verify that the user should be redirected to the my collection page without any error", () => {
        home_page.get_mycollection().click()
        cy.log(my_collection.get_collection_logo().should('be.visible') ? "user successfully landed to my collection page,testcase passed" : "user unable to landed on my collection page,testcase failed")
    })


    it("TC_MyCollection_02, Verify that the collection logo should be displayed on the collection profile", () => {
        home_page.get_mycollection().click()
        cy.log(my_collection.get_all_collection_preview().should('be.visible') ? "all the collections logo are visible,testcase got passed" : "all the collections logo are visible,testcase got passed")


    })
    it("TC_MyCollection_03,Verify that basic information like profile name,profile image, and profile information should be displayed properly", () => {
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
        cy.log(create_collection.get_valid_toast().should('have.attr', 'aria-label', 'Nft collection created successfully!') ? "nft collection created successfully" : "nft collection not created")
        //home_page.get_mycollection().click()
        my_collection.get_collection().click()
    })
    it("TC_MyCollection_03, Verify that basic information like profile name,profile image, and profile information should be displayed properly", () => {
        home_page.get_mycollection().click()
        my_collection.get_collection().click()

        if (my_collection.get_logo().should("be.visible") &&
            my_collection.get_banner().should("be.visible") &&
            my_collection.get_collection_name().should("be.visible") &&
            my_collection.get_collection_description().should("be.visible")) {
            cy.log("basic information like profile name,profile image, and profile information is visible,testcase passed")
        }
        else {
            cy.log("basic information like profile name,profile image, and profile information is not visible,testcase failed")

        }



    })
    it("TC_MyCollection_06, Verify whether collection tile is clickabe or not", () => {
        home_page.get_mycollection().click()
        my_collection.get_collection().click()

        if (my_collection.get_logo().should("be.visible") &&
            my_collection.get_banner().should("be.visible") &&
            my_collection.get_collection_name().should("be.visible") &&
            my_collection.get_collection_description().should("be.visible")) {
            cy.log("collection tile is clickable,testcase passed")
        }
        else {
            cy.log("collection tile is clickable,testcase failed")

        }


    })

    it("TC_MyCollection_07, Verify whether details dropdown is present on my collection", () => {
        home_page.get_mycollection().click()
        my_collection.get_collection().click()

        if (my_collection.get_details().click() &&
            my_collection.get_details().should('be.visible')) {
            cy.log("details dropdown is visible and clickable,testcase passed")
        }
        else {
            cy.log("details dropdown is not visible and not clickable,testcase failed")

        }


    })
    it("TC_MyCollection_08, Validate whether collection id and category is clickable and landed to new webpage ", () => {
        home_page.get_mycollection().click()
        my_collection.get_collection().click()
        my_collection.get_details().click()
        if (my_collection.get_collection_id().click() &&
            cy.title('Marketplace')) {
            cy.log("collection id is clickable,testcase passed")
        }
        else {
            cy.log("collection id is not clickable,testcase failed")
        }
    })

    it("TC_MyCollection_09, Validate whether enable/disable button is working fine", () => {
        home_page.get_mycollection().click()
        my_collection.get_collection().click()
        if (my_collection.get_enable_disable_slider().click() &&
            my_collection.get_enable_disable_slider().click()) {
            cy.log("enable/disable button is working fine,testcase passed")

        }
        else {
            cy.log("enable/disable button is not working fine,testcase failed")
        }

    })
    it("TC_MyCollection_10,validate whether user is able to navigate back from my collection webpage", () => {
        home_page.get_mycollection().click()
        my_collection.get_collection().click()
        if (my_collection.get_collection_back().click() &&
            my_collection.get_all_collection_preview().should('be.visible')) {
            cy.log("user is able to navigate back from my collection webpage,testcase passed")
        }
        else {
            cy.log("user is unable to navigate back from my collection webpage,testcase failed")
        }
    })


})