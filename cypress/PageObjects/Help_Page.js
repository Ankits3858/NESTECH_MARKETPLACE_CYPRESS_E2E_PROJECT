class Help_Page
{
get_title()
{
    return cy.xpath("//input[@name='title']")
}
get_description()
{
    return cy.xpath("//input[@name='description']")
}
get_drag_and_drop()
{
    return cy.xpath("//input[@id='copyrightFile1']")
}
get_send()
{
    return cy.xpath("//button[@class='CommonBtn PrimaryBtn w-100 w-31Percent']")
}
get_discard()
{
    return cy.xpath("//button[@class='CommonBtn SecondaryBtn w-100 w-31Percent']")
}
get_add_ticket()
{
    return cy.xpath("//span[@class='HelpPlusBtn w-100 bg-grey py-2 d-block cursor-pointer h-100 d-flex align-items-center justify-content-center']")
}
get_help()
{
    return cy.xpath("//em[@class='bi bi-question-circle font50px mb-2']")
}
get_total_ticket()
{
    return cy.xpath("//*[contains(text(),'Total Tickets')]")
}
get_new()
{
    return cy.xpath("//*[contains(text(),'New')]")
}
get_pending()
{
    return cy.xpath("//*[contains(text(),'Pending')]")
}
get_closed()
{
    return cy.xpath("//*[contains(text(),'Closed')]")
}
get_ticketID()
{
    return cy.xpath("(//a[@data-bs-target='#TickectPopup'])[1]")
}
get_close_button()
{
    return cy.xpath("//button[@class='CommonBtn PrimaryBtn w-auto ng-star-inserted']")
}
get_messageBox()
{
    return cy.xpath("//input[@id='messageBox']")
}
get_send_message()
{
    return cy.xpath("//span[@class='border ChatWindowBottomBtns']")
}
get_()
{
    return cy.xpath("")
}
get_()
{
    return cy.xpath("")
}



}
export default Help_Page