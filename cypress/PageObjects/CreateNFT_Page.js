class CreateNFT_Page
{
    get_upload_file()
    {
        return cy.get("input[id='copyrightFile1']")
    }
    get_previewNFT()
    {
        return cy.get("div[class='PreviewCreateNFT border my-4 p-4 position-relative'][css='1']")
    }
    get_uploaded_video_preview()
    {
        return cy.get("video[id='vjs_video_3_html5_api']")
    }
    get_uploaded_audio_preview()
    {
        return cy.get("div[id='siri-container']")
    }

    get_uploaded_image_preview()
    {
        return cy.get("img[class='w-100']")
    }
    get_cancel_uploaded_file()
    {
        return cy.get(".bi-x")
    }
    get_enable_disable1()
    {
        return cy.get(".mb-4 > .switch > .slider")
    }
    get_enable_disable2()
    {
        return cy.get(":nth-child(3) > .switch > .slider")
    }
    get_name()
    {
        return cy.get("input[name='name']")
    }
    get_description()
    {
        return cy.get("textarea[name='description']")
    }
    get_digital_art()
    {
        return cy.get('[for="radio1"] > .SingleFixedDiv')
    }
    get_audio()
    {
        return cy.get('[for="radio3"] > .SingleFixedDiv')
    }
    get_photo()
    {
        return cy.get('[for="radio2"] > .SingleFixedDiv')
    }
    get_url()
    {
        return cy.get("input[name='endPoint']")
    }
    get_price()
    {
        return cy.get("input[name='price']")
    }
    get_reset()
    {
        return cy.get(".SideToSideBtns > .SecondaryBtn")
    }
}
export default CreateNFT_Page