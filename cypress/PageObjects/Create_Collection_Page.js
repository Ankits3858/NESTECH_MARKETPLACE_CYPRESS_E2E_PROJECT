class Create_Collection_Page
{
get_create_logo()
{
    return cy.get("input[id='logoImageFile']")
}
get_create_banner()
{
return cy.get("input[id='bannerImageFile']")
}
get_name()
{
    return cy.get("input[name='name']")
}
get_description()
{
    return cy.get("textarea[name='description']")
}
get_category()
{
    return cy.get("select[id='collectionCategory']")
}
get_slider_button()
{
    return cy.get("span[class='slider round']")
}
get_create()
{
    return cy.get("button[class='CommonBtn PrimaryBtn w-100 w-31Percent']")
}
get_reset()
{
    return cy.get(".SideToSideBtns > :nth-child(2)")
}
get_uploaded_image_preview()
{
    return cy.get("img[class='w-100']:nth-child(1)")
}
get_uploaded_image_preview()
{
    return cy.get("img[class='w-100']:nth-child(1)")
}
get_uploaded_image_preview()
{
    return cy.get("img[class='w-100']:nth-child(1)")
}
get_valid_toast()
{
    return cy.get("div[aria-label='Nft collection created successfully!']")
}




}
export default Create_Collection_Page
