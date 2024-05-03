/// <reference types = "Cypress"/>
import Home_Page from "../../PageObjects/Home_Page"
import Login_Page from "../../PageObjects/Login_Page"
import CreateNFT_Page from "../../PageObjects/CreateNFT_Page"
import Create_Collection_Page from "../../PageObjects/Create_Collection_Page"
import Settings_Information_Page from "../../PageObjects/Settings_Information_Page"
import Edit_profile_Page from "../../PageObjects/Edit_profile_Page"
const home_page = new Home_Page
const login_page = new Login_Page
const createNFT = new CreateNFT_Page
const create_collection = new Create_Collection_Page
const ep = new Edit_profile_Page
const Settings_information = new Settings_Information_Page
const video = "cypress/fixtures/video.webm"
const user = require("../../fixtures/data")
const image = "cypress/fixtures/Picture.png"
const excel = "cypress/fixtures/excel.xlsx"
const jar = "cypress/fixtures/jar.msi"
const exe = "cypress/fixtures/exe.exe"
const audio = "cypress/fixtures/audio.mp3"
const ppt = "cypress/fixtures/ppt.pptx"
const text = "cypress/fixtures/text.txt"
const pdf = "cypress/fixtures/pdf.pdf"
describe("validation of edit profile module", () => {
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
        ep.get_edit_profile().click()
    })
    it("TC_Body_01,validate whether user is able  to upload image file", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(image) &&
            ep.get_media_preview().should("be.visible")) { cy.log("image uploaded successfully inside drag and drop,image is visible inside preview window,testcase passed") }
        else { cy.log("image not uploaded inside drag and drop,image is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_Body_02,validate whether user is able  to upload video file", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(video) &&
            ep.get_media_preview().should("be.visible")) { cy.log("video uploaded successfully inside drag and drop,video is visible inside preview window,testcase passed") }
        else { cy.log("video not uploaded inside drag and drop,video is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_Body_03,validate whether user is able  to upload excel file", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(excel) &&
            ep.get_media_preview().should("be.visible")) { cy.log("excel file uploaded successfully inside drag and drop,excel file is visible inside preview window,testcase failed") }
        else { cy.log("excel file not uploaded inside drag and drop,excel file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_04,validate whether user is able  to upload pdf file", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(pdf) &&
            ep.get_media_preview().should("be.visible")) { cy.log("pdf file uploaded successfully inside drag and drop,pdf file is visible inside preview window,testcase failed") }
        else { cy.log("pdf file not uploaded inside drag and drop,pdf file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_05,validate whether user is able  to upload .exe  jar file", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(exe) && cy.wait(4000) &&
            ep.get_media_preview().should("be.visible")) { cy.log(".exe  jar file uploaded successfully inside drag and drop,.exe  jar file is visible inside preview window,testcase failed") }
        else { cy.log(".exe  jar file not uploaded inside drag and drop,.exe  jar file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_06,validate whether user is able  to upload text file", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(text) &&
            ep.get_media_preview().should("be.visible")) { cy.log("text file uploaded successfully inside drag and drop,text file is visible inside preview window,testcase failed") }
        else { cy.log("text file not uploaded inside drag and drop,text file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_07,validate whether user is able  to upload audio file", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(audio) &&
            ep.get_media_preview().should("be.visible")) { cy.log("audio file uploaded successfully inside drag and drop,audio file is visible inside preview window,testcase passed") }
        else { cy.log("audio file not uploaded inside drag and drop,audio file is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()
    })

    it("TC_Body_08,validate whether user is able  to upload ppt file", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(ppt) &&
            ep.get_media_preview().should("be.visible")) { cy.log("ppt file uploaded successfully inside drag and drop,ppt file is visible inside preview window,testcase failed") }
        else { cy.log("ppt file not uploaded inside drag and drop,audio ppt is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    /////////////////////////////////////////////////////////////////////////////////////
    it.skip("TC_Body_09,validate whether image is displayed after uploading", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(image) &&
            ep.get_media_preview().should("be.visible")) { cy.log("image uploaded successfully inside drag and drop,image is visible inside preview window,testcase passed") }
        else { cy.log("image not uploaded inside drag and drop,image is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_Body_10,validate whether video is displayed after uploading", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(video) &&
            ep.get_media_preview().should("be.visible")) { cy.log("video uploaded successfully inside drag and drop,video is visible inside preview window,testcase passed") }
        else { cy.log("video not uploaded inside drag and drop,video is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_Body_12,validate whether excel is displayed after uploading", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(excel) &&
            ep.get_media_preview().should("be.visible")) { cy.log("excel file uploaded successfully inside drag and drop,excel file is visible inside preview window,testcase failed") }
        else { cy.log("excel file not uploaded inside drag and drop,excel file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_13,validate whether pdf is displayed after uploading", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(pdf) &&
            ep.get_media_preview().should("be.visible")) { cy.log("pdf file uploaded successfully inside drag and drop,pdf file is visible inside preview window,testcase failed") }
        else { cy.log("pdf file not uploaded inside drag and drop,pdf file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_14,validate whether exe jar is displayed after uploading", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(exe) && cy.wait(4000) &&
            ep.get_media_preview().should("be.visible")) { cy.log(".exe  jar file uploaded successfully inside drag and drop,.exe  jar file is visible inside preview window,testcase failed") }
        else { cy.log(".exe  jar file not uploaded inside drag and drop,.exe  jar file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_15,validate whether text file is displayed after uploading", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(text) &&
            ep.get_media_preview().should("be.visible")) { cy.log("text file uploaded successfully inside drag and drop,text file is visible inside preview window,testcase failed") }
        else { cy.log("text file not uploaded inside drag and drop,text file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_16,validate whether audio file is displayed after uploading", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(audio) &&
            ep.get_media_preview().should("be.visible")) { cy.log("audio file uploaded successfully inside drag and drop,audio file is visible inside preview window,testcase passed") }
        else { cy.log("audio file not uploaded inside drag and drop,audio file is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()
    })
    it("TC_Body_17,validate whether ppt file is displayed after uploading", () => {
        ep.get_body().click()
        if (
            ep.get_drag_and_drop().selectFile(ppt) &&
            ep.get_media_preview().should("be.visible")) { cy.log("ppt file uploaded successfully inside drag and drop,ppt file is visible inside preview window,testcase failed") }
        else { cy.log("ppt file not uploaded inside drag and drop,audio ppt is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })


    ////////////////////////////////////////////////////////////////////////////////////////////////////----performace
    it("TC_performance_18,validate whether user is able  to upload image file", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(image) &&
            ep.get_media_preview().should("be.visible")) { cy.log("image uploaded successfully inside drag and drop,image is visible inside preview window,testcase passed") }
        else { cy.log("image not uploaded inside drag and drop,image is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_performance_19,validate whether user is able  to upload video file", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(video) &&
            ep.get_media_preview().should("be.visible")) { cy.log("video uploaded successfully inside drag and drop,video is visible inside preview window,testcase passed") }
        else { cy.log("video not uploaded inside drag and drop,video is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_performance_20,validate whether user is able  to upload excel file", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(excel) &&
            ep.get_media_preview().should("be.visible")) { cy.log("excel file uploaded successfully inside drag and drop,excel file is visible inside preview window,testcase failed") }
        else { cy.log("excel file not uploaded inside drag and drop,excel file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_21,validate whether user is able  to upload pdf file", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(pdf) &&
            ep.get_media_preview().should("be.visible")) { cy.log("pdf file uploaded successfully inside drag and drop,pdf file is visible inside preview window,testcase failed") }
        else { cy.log("pdf file not uploaded inside drag and drop,pdf file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_22,validate whether user is able  to upload .exe  jar file", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(exe) && cy.wait(4000) &&
            ep.get_media_preview().should("be.visible")) { cy.log(".exe  jar file uploaded successfully inside drag and drop,.exe  jar file is visible inside preview window,testcase failed") }
        else { cy.log(".exe  jar file not uploaded inside drag and drop,.exe  jar file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_23,validate whether user is able  to upload text file", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(text) &&
            ep.get_media_preview().should("be.visible")) { cy.log("text file uploaded successfully inside drag and drop,text file is visible inside preview window,testcase failed") }
        else { cy.log("text file not uploaded inside drag and drop,text file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_24,validate whether user is able  to upload audio file", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(audio) &&
            ep.get_media_preview().should("be.visible")) { cy.log("audio file uploaded successfully inside drag and drop,audio file is visible inside preview window,testcase passed") }
        else { cy.log("audio file not uploaded inside drag and drop,audio file is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()
    })

    it("TC_performance_25,validate whether user is able  to upload ppt file", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(ppt) &&
            ep.get_media_preview().should("be.visible")) { cy.log("ppt file uploaded successfully inside drag and drop,ppt file is visible inside preview window,testcase failed") }
        else { cy.log("ppt file not uploaded inside drag and drop,audio ppt is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    /////////////////////////////////////////////////////////////////////////////////////
    it("TC_performance_26,validate whether image is displayed after uploading", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(image) &&
            ep.get_media_preview().should("be.visible")) { cy.log("image uploaded successfully inside drag and drop,image is visible inside preview window,testcase passed") }
        else { cy.log("image not uploaded inside drag and drop,image is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_performance_27,validate whether video is displayed after uploading", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(video) &&
            ep.get_media_preview().should("be.visible")) { cy.log("video uploaded successfully inside drag and drop,video is visible inside preview window,testcase passed") }
        else { cy.log("video not uploaded inside drag and drop,video is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_performance_29,validate whether excel is displayed after uploading", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(excel) &&
            ep.get_media_preview().should("be.visible")) { cy.log("excel file uploaded successfully inside drag and drop,excel file is visible inside preview window,testcase failed") }
        else { cy.log("excel file not uploaded inside drag and drop,excel file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_30,validate whether pdf is displayed after uploading", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(pdf) &&
            ep.get_media_preview().should("be.visible")) { cy.log("pdf file uploaded successfully inside drag and drop,pdf file is visible inside preview window,testcase failed") }
        else { cy.log("pdf file not uploaded inside drag and drop,pdf file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_31,validate whether exe jar is displayed after uploading", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(exe) && cy.wait(4000) &&
            ep.get_media_preview().should("be.visible")) { cy.log(".exe  jar file uploaded successfully inside drag and drop,.exe  jar file is visible inside preview window,testcase failed") }
        else { cy.log(".exe  jar file not uploaded inside drag and drop,.exe  jar file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_32,validate whether text file is displayed after uploading", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(text) &&
            ep.get_media_preview().should("be.visible")) { cy.log("text file uploaded successfully inside drag and drop,text file is visible inside preview window,testcase failed") }
        else { cy.log("text file not uploaded inside drag and drop,text file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_33,validate whether audio file is displayed after uploading", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(audio) &&
            ep.get_media_preview().should("be.visible")) { cy.log("audio file uploaded successfully inside drag and drop,audio file is visible inside preview window,testcase passed") }
        else { cy.log("audio file not uploaded inside drag and drop,audio file is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()
    })
    it("TC_performance_34,validate whether ppt file is displayed after uploading", () => {
        ep.get_performance().click()
        if (
            ep.get_drag_and_drop().selectFile(ppt) &&
            ep.get_media_preview().should("be.visible")) { cy.log("ppt file uploaded successfully inside drag and drop,ppt file is visible inside preview window,testcase failed") }
        else { cy.log("ppt file not uploaded inside drag and drop,audio ppt is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////----tattoo
    it("TC_tattoo_35,validate whether user is able  to upload image file", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(image) &&
            ep.get_media_preview().should("be.visible")) { cy.log("image uploaded successfully inside drag and drop,image is visible inside preview window,testcase passed") }
        else { cy.log("image not uploaded inside drag and drop,image is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_tattoo_36,validate whether user is able  to upload video file", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(video) &&
            ep.get_media_preview().should("be.visible")) { cy.log("video uploaded successfully inside drag and drop,video is visible inside preview window,testcase passed") }
        else { cy.log("video not uploaded inside drag and drop,video is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_tattoo_37,validate whether user is able  to upload excel file", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(excel) &&
            ep.get_media_preview().should("be.visible")) { cy.log("excel file uploaded successfully inside drag and drop,excel file is visible inside preview window,testcase failed") }
        else { cy.log("excel file not uploaded inside drag and drop,excel file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_38,validate whether user is able  to upload pdf file", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(pdf) &&
            ep.get_media_preview().should("be.visible")) { cy.log("pdf file uploaded successfully inside drag and drop,pdf file is visible inside preview window,testcase failed") }
        else { cy.log("pdf file not uploaded inside drag and drop,pdf file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_39,validate whether user is able  to upload .exe  jar file", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(exe) && cy.wait(4000) &&
            ep.get_media_preview().should("be.visible")) { cy.log(".exe  jar file uploaded successfully inside drag and drop,.exe  jar file is visible inside preview window,testcase failed") }
        else { cy.log(".exe  jar file not uploaded inside drag and drop,.exe  jar file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_40,validate whether user is able  to upload text file", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(text) &&
            ep.get_media_preview().should("be.visible")) { cy.log("text file uploaded successfully inside drag and drop,text file is visible inside preview window,testcase failed") }
        else { cy.log("text file not uploaded inside drag and drop,text file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_41,validate whether user is able  to upload audio file", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(audio) &&
            ep.get_media_preview().should("be.visible")) { cy.log("audio file uploaded successfully inside drag and drop,audio file is visible inside preview window,testcase passed") }
        else { cy.log("audio file not uploaded inside drag and drop,audio file is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()
    })

    it("TC_tattoo_42,validate whether user is able  to upload ppt file", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(ppt) &&
            ep.get_media_preview().should("be.visible")) { cy.log("ppt file uploaded successfully inside drag and drop,ppt file is visible inside preview window,testcase failed") }
        else { cy.log("ppt file not uploaded inside drag and drop,audio ppt is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    /////////////////////////////////////////////////////////////////////////////////////
    it("TC_tattoo_43,validate whether image is displayed after uploading", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(image) &&
            ep.get_media_preview().should("be.visible")) { cy.log("image uploaded successfully inside drag and drop,image is visible inside preview window,testcase passed") }
        else { cy.log("image not uploaded inside drag and drop,image is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_tattoo_44,validate whether video is displayed after uploading", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(video) &&
            ep.get_media_preview().should("be.visible")) { cy.log("video uploaded successfully inside drag and drop,video is visible inside preview window,testcase passed") }
        else { cy.log("video not uploaded inside drag and drop,video is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()

    })
    it("TC_tattoo_46,validate whether excel is displayed after uploading", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(excel) &&
            ep.get_media_preview().should("be.visible")) { cy.log("excel file uploaded successfully inside drag and drop,excel file is visible inside preview window,testcase failed") }
        else { cy.log("excel file not uploaded inside drag and drop,excel file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_47,validate whether pdf is displayed after uploading", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(pdf) &&
            ep.get_media_preview().should("be.visible")) { cy.log("pdf file uploaded successfully inside drag and drop,pdf file is visible inside preview window,testcase failed") }
        else { cy.log("pdf file not uploaded inside drag and drop,pdf file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_48,validate whether exe jar is displayed after uploading", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(exe) && cy.wait(4000) &&
            ep.get_media_preview().should("be.visible")) { cy.log(".exe  jar file uploaded successfully inside drag and drop,.exe  jar file is visible inside preview window,testcase failed") }
        else { cy.log(".exe  jar file not uploaded inside drag and drop,.exe  jar file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_49,validate whether text file is displayed after uploading", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(text) &&
            ep.get_media_preview().should("be.visible")) { cy.log("text file uploaded successfully inside drag and drop,text file is visible inside preview window,testcase failed") }
        else { cy.log("text file not uploaded inside drag and drop,text file is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_50,validate whether audio file is displayed after uploading", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(audio) &&
            ep.get_media_preview().should("be.visible")) { cy.log("audio file uploaded successfully inside drag and drop,audio file is visible inside preview window,testcase passed") }
        else { cy.log("audio file not uploaded inside drag and drop,audio file is not visible inside preview window,testcase failed") }
        ep.get_reset_changes().click()
    })
    it("TC_tattoo_51,validate whether ppt file is displayed after uploading", () => {
        ep.get_tattoo().click()
        if (
            ep.get_drag_and_drop().selectFile(ppt) &&
            ep.get_media_preview().should("be.visible")) { cy.log("ppt file uploaded successfully inside drag and drop,ppt file is visible inside preview window,testcase failed") }
        else { cy.log("ppt file not uploaded inside drag and drop,audio ppt is not visible inside preview window,testcase passed") }
        ep.get_reset_changes().click()
    })

    ////////////////////////////////////----update my terms

    it("TC_update_my_terms/numeric blanks_53,Check whether user is able to see display message limit exceed after entering 1k+ numbers", () => {
        ep.get_update_terms().click()
        if (
            cy.log(ep.get_hours().should('have.attr', 'ng-reflect-maxlength', '4') ? "hours field is having maximum length 4" : "hours field is not having maximum length 4") &&
            cy.log(ep.get_usd_field().should('have.attr', 'maxlength', '10') ? "usd field is having maximum length 10" : "usd field is not having maximum length 10") &&
            cy.log(ep.get_request_field().should('have.attr', 'ng-reflect-maxlength', '4') ? "request field is having maximum length 4" : "request field is not having maximum length 4") &&
            cy.log(ep.get_need_field().should('have.attr', 'ng-reflect-maxlength', '4') ? "need field is having maximum length 4" : "need field is not having maximum length 4") &&
            cy.log(ep.get_request_field().should('have.attr', 'ng-reflect-maxlength', '4') ? "request field is having maximum length 4" : "request field is not having maximum length 4") &&
            cy.log(ep.get_variation_field().should('have.attr', 'ng-reflect-maxlength', '4') ? "variation field is having maximum length 4" : "variation field is not having maximum length 4") &&
            cy.log(ep.get_charge_field().should('have.attr', 'ng-reflect-maxlength', '2') ? "charge field is having maximum length 2" : "charge field is not having maximum length 2") &&
            cy.log(ep.get_cancel_field().should('have.attr', 'ng-reflect-maxlength', '2') ? "cancel field is having maximum length 2" : "cancel field is not having maximum length 2")) {
            cy.log("all the numeric fields inside update my terms forms are having limitations,user unable to enter 1k+ characters,testcase passed")

        }
        else {
            cy.log("all the numeric fields inside update my terms forms are not having limitations,user is able to enter 1k+ characters,testcase passed")
        }
    })

    it("TC_update_my_terms/numeric blanks_54,Check whether user is able to enter limited characters inside numeric blanks", () => {
        ep.get_update_terms().click()
        if (
            cy.log(ep.get_hours().should('have.attr', 'ng-reflect-maxlength', '4') ? "hours field is having maximum length 4" : "hours field is not having maximum length 4") &&
            cy.log(ep.get_usd_field().should('have.attr', 'maxlength', '10') ? "usd field is having maximum length 10" : "usd field is not having maximum length 10") &&
            cy.log(ep.get_request_field().should('have.attr', 'ng-reflect-maxlength', '4') ? "request field is having maximum length 4" : "request field is not having maximum length 4") &&
            cy.log(ep.get_need_field().should('have.attr', 'ng-reflect-maxlength', '4') ? "need field is having maximum length 4" : "need field is not having maximum length 4") &&
            cy.log(ep.get_request_field().should('have.attr', 'ng-reflect-maxlength', '4') ? "request field is having maximum length 4" : "request field is not having maximum length 4") &&
            cy.log(ep.get_variation_field().should('have.attr', 'ng-reflect-maxlength', '4') ? "variation field is having maximum length 4" : "variation field is not having maximum length 4") &&
            cy.log(ep.get_charge_field().should('have.attr', 'ng-reflect-maxlength', '2') ? "charge field is having maximum length 2" : "charge field is not having maximum length 2") &&
            cy.log(ep.get_cancel_field().should('have.attr', 'ng-reflect-maxlength', '2') ? "cancel field is having maximum length 2" : "cancel field is not having maximum length 2")) {
            cy.log("all the numeric fields inside update my terms forms are having limitations,testcase passed")

        }
        else {
            cy.log("all the numeric fields inside update my terms forms are not having limitations,testcase passed")
        }

    })
    it("TC_update_my_terms/numeric blanks_55,Check whether numeric blanks are accepting numbers", () => {
        ep.get_update_terms().click()
        ep.get_hours().clear()
        ep.get_usd_field().clear()
        ep.get_request_field().clear()
        ep.get_charge_field().clear()
        ep.get_need_field().clear()
        ep.get_variation_field().clear()
        ep.get_charge_field().clear()




        if (

            cy.log(ep.get_hours().type('1').should('have.value', '1') ? "hours field is accepting numbers" : "hours field is not accepting numbers") &&

            cy.log(ep.get_usd_field().type('1').should('have.value', '1') ? "usd field is accepting numbers" : "usd field is not accepting numbers") &&

            cy.log(ep.get_request_field().type('1').should('have.value', '1') ? "request field is accepting numbers" : "request field is not accepting numbers") &&
            cy.log(ep.get_need_field().type('1').should('have.value', '1') ? "need field is accepting numbers" : "need field is not accepting numbers") &&
            cy.log(ep.get_variation_field().type('1').should('have.value', '1') ? "variation field is accepting numbers" : "variation field is not accepting numbers") &&
            cy.log(ep.get_charge_field().type('1').should('have.value', '1') ? "charge field is accepting numbers" : "charge field is not accepting numbers") &&
            cy.log(ep.get_cancel_field().type('1').should('have.value', '1') ? "cancel field is accepting numbers" : "cancel field is not accepting numbers")) {
            cy.log("all the numeric fields inside update my terms forms are accepting numbers,testcase passed")

        }
        else {
            cy.log("all the numeric fields inside update my terms forms are not accepting numbers,testcase passed")
        }

    })
    it("TC_update_my_terms/text field_60,Check whether user is able to enter limited characters inside text field", () => {
        ep.get_update_terms().click()
        cy.log(ep.get_other_details().should('have.attr', 'ng-reflect-maxlength', '256') ? "other details field is having limit as 256,unable to enter 1k+ characters ,testcase passed" : "other details field is not accepting characters,user is able to enter 1k+ characters,testcase failed")

    })
    it("TC_update_my_terms/text field_61,Check whether user is able to enter limited characters inside text field", () => {
        ep.get_update_terms().click()
        cy.log(ep.get_other_details().type("testing").should('have.value', 'testing') ? "other details field is accepting characters,testcase passed" : "other details field is not accepting characters,testcase failed")

    })
    it("TC_update_my_terms/text field_62,Check whether text field is accepting numbers", () => {
        ep.get_update_terms().click()
        cy.log(ep.get_other_details().type("1234").should('have.value', '1234') ? "other details field is accepting numbers,testcase passed" : "other details field is not accepting numbers,testcase failed")
    })
    it("TC_update_my_terms/text field_63,Check whether text field is accepting special characters", () => {
        ep.get_update_terms().click()
        cy.log(ep.get_other_details().type("!@#").should('have.value', '!@#') ? "other details field is accepting special characters,testcase passed" : "other details field is not accepting special characters,testcase failed")
    })
    it("TC_update_my_terms/text field_64,Check whether text field is accepting alpha numeric characters", () => {
        ep.get_update_terms().click()

        cy.log(ep.get_other_details().type("abc123").should('have.value', "abc123") ? "other details field is accepting alpha numeric characters,testcase passed" : "other details field is not accepting alpha numeric characters,testcase failed")
    })
    it("TC_update_my_terms/text field_64,Check whether text field is accepting alpha numeric characters", () => {
        ep.get_update_terms().click()

        cy.log(ep.get_other_details().type("abc123").should('have.value', "abc123") ? "other details field is accepting alpha numeric characters,testcase passed" : "other details field is not accepting alpha numeric characters,testcase failed")
    })
    it("TC_update_my_terms/Reset_65,Check whether reset button is resetting all the fields after entering details", () => {
        ep.get_update_terms().click()
        ep.get_hours().type('1')
        ep.get_usd_field().type('1')
        ep.get_request_field().type('1')
        ep.get_need_field().type('1')
        ep.get_variation_field().type('1')
        ep.get_charge_field().type('1')
        ep.get_cancel_field().type('1')
        ep.get_reset_to_default().click()
        if (ep.get_hours().should('be.empty') &&
            ep.get_usd_field().should('be.empty') &&
            ep.get_request_field().should('be.empty') &&
            ep.get_need_field().should('be.empty') &&
            ep.get_variation_field().should('be.empty') &&
            ep.get_charge_field().should('be.empty') &&
            ep.get_cancel_field().should('be.empty') &&
            ep.get_reset_to_default().click()) {
            cy.log("reset to deafult button is resetting all the fields,testcase passed")

        }
        else {
            cy.log("reset to deafult button is not resetting all the fields,testcase failed")
        }


    })
    it("TC_update_my_terms/save_66,Check whether user is able to save the entered details", () => {
        ep.get_update_terms().click()
        ep.get_hours().type('3')
        ep.get_usd_field().type('12')
        ep.get_request_field().type('21')
        ep.get_need_field().type('12')
        ep.get_variation_field().type('21')
        ep.get_charge_field().type('12')
        ep.get_charge_field2().type('12')
        ep.get_cancel_field().type('12')
        ep.get_other_details().type("testing123")
        if (ep.get_save().click() && ep.get_save_toast().should('have.text', 'Successfully')) {
            cy.log("user is able save all the entered details,testcase passed")
        }
        else {
            cy.log("user is not able save all the entered details,testcase failed")
        }
    })







})






