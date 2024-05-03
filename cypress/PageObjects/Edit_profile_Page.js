class Edit_profile_Page
{
get_edit_profile()
{
    return cy.get("div[routerlink='/settings/edit-profile']")
}
get_body()
{
    return cy.get("button[id='PRO-BRTCLBQZ']")
}
get_performance()
{
    return cy.get("button[id='PRO-VSHOBISM']")
}
get_tattoo()
{
    return cy.get("button[id='PRO-BAKVQGFX']")
}
get_drag_and_drop()
{
    return cy.get("#PRO-BRTCLBQZ > .FormMailDiv > :nth-child(1) > .uploadFile > #copyrightFile1")
}
get_media_preview()
{
    return cy.get("img[class='ImagePreviewEditProfile border ng-star-inserted']")
}
get_update_terms()
{
    return cy.get("#PRO-BRTCLBQZ > .FormMailDiv > .row > .col-md-3 > .CommonBtn")
}
get_booking_hours()
{
    return cy.get("input[fdprocessedid='v15lga']")
}
get_update_profile()
{
    return cy.get("button[fdprocessedid='nzv9ce']")
}
get_reset_changes()
{
    return cy.get("#PRO-BRTCLBQZ > .FormMailDiv > .SideToSideBtns > .SecondaryBtn")
}
get_usd_field()
{
    return cy.get(":nth-child(1) > :nth-child(1) > .AutoSizeInput")
}
get_hours()
{
    return cy.get(":nth-child(1) > :nth-child(2) > .AutoSizeInput")
}
get_request_field()
{
    return cy.get("input[name='termsCreativeFreedom']")
}
get_need_field()
{
    return cy.get(":nth-child(1) > :nth-child(4) > .AutoSizeInput")
}
get_variation_field()
{
    return cy.get(":nth-child(3) > :nth-child(1) > .AutoSizeInput")
}
get_charge_field()
{
    return cy.get(":nth-child(3) > :nth-child(2) > .AutoSizeInput")
}
get_charge_field2()
{
    return cy.get("input[name='termsCancle']")
}
get_cancel_field()
{
    return cy.get(":nth-child(3) > :nth-child(4) > .AutoSizeInput")
}
get_other_details()
{
    return cy.get("input[name='termOtherDetails']")
}
get_reset_to_default()
{
    return cy.get("button[class='CommonBtn SecondaryBtn px-5']")
}
get_save()
{
    return cy.get("button[class='CommonBtn PrimaryBtn px-5']")
}
get_save_toast()
{
    return cy.get(".toast-warning > .toast-title")
}
}
export default Edit_profile_Page