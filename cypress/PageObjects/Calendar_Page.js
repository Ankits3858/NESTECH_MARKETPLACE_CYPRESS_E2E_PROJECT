class Calendar_Page
{
get_calendar_schedules()
{
    return cy.get(":nth-child(16) > .InnerSingleIntrestedDiv > .InterstedDiv")
}
get_my_calendar()
{
    return cy.get("#nav-tab > .row > :nth-child(1)")
}
get_create_schedule()
{
    return cy.get("#nav-tab > .row > :nth-child(2)")
}
get_my_booking_hours()
{
    return cy.get(".row > :nth-child(3)")
}
get_pin_as()
{
    //
    return cy.get("input[id='profile-id']")
}
get_title()
{
    return cy.get(".col-md-12 > :nth-child(1) > .InputBox")
}
get_description()
{
    return cy.get(".col-md-12 > :nth-child(2) > .InputBox")
}
get_where()
{
    return cy.get("app-location-search > .InputBox")
}
get_from()
{
    return cy.get(".col-md-12 > .row > :nth-child(1) > .form-group > .InputBox")
}
get_to()
{
    return cy.get(":nth-child(2) > .form-group > .InputBox")
}
get_use_my_default()
{
    return cy.get("input[id='tc_item1']")
}
get_reset()
{
    return cy.get(".SideToSideBtns > .SecondaryBtn")
}
get_add_to_my_schedule()
{
    return cy.get(".SideToSideBtns > .PrimaryBtn")
}
get_tailor_my_terms()
{
    return cy.get(".opacity-07 > .checkmark")
}
get_globe()
{
    return cy.get(".nav-link > img")
}
get_work()
{
    return cy.get("input[id='work/travel']")
}
get_private()
{
    return cy.get("input[id='private/personal']")
}
get_date_selection()
{
    return cy.get("span[class='owl-dt-control-button-arrow']")
}
get_year()
{
    return cy.get('td[aria-label="2029"]')
}
get_month()
{
    return cy.get('td[aria-label="August 2029"]')
}
get_add_hour()
{
    return  cy.get("button[aria-label='Add a hour']")
}
get_hour_minute()
{
    return cy.get("button[aria-label='Add a minute']")
}
get_set_button()
{
    return cy.get('span:contains(" Set ")')
}
get_()
{
    return cy.get("")
}
get_()
{
    return cy.get("")
}

}
export default Calendar_Page




/*      cy.get("span[class='owl-dt-control-button-arrow']").click()
        cy.get('td[aria-label="2029"]').click()
        cy.get('td[aria-label="August 2029"]').click()
        //cy.get('td[aria-label="August 2029"]')
        cy.get("button[aria-label='Add a hour']").click()
        cy.get("button[aria-label='Add a hour']").click()
        cy.get("button[aria-label='Add a minute']").click()
        cy.get("button[aria-label='Add a minute']").click()
        cy.get('span:contains(" Set ")').click()*/