class My_Collection_Page
{
get_collection_logo()
{
    return cy.get("h3")
}
get_all_collection_preview()
{
    return cy.get("img[class='w-100 NFTBannerImg cursor-pointer']")
}
get_collection()
{
    return cy.get(":nth-child(1) > .SingleCollectionListing > .CardMainDiv > .w-100")
}
get_logo()
{
    return cy.get(":nth-child(1) > .SingleNFTImg > .h-100")
}
get_banner()
{
    return cy.get(":nth-child(2) > .SingleNFTImg > .h-100")
}
get_details()
{
    return cy.get("div[data-bs-toggle='collapse']")
}
get_collection_id()
{
    return cy.get(".DetailsMAinDivAccordion > :nth-child(1) > .text-grey")
}
get_collection_name()
{
    return cy.get("p[class='font20px font-bold wordBreak']")
}
get_collection_description()
{
    return cy.get("p[class='font16px wordBreak']")
}
get_enable_disable_slider()
{
    return cy.get("span[class='slider round']")
}
get_collection_back()
{
    return cy.get("button[class='CommonBtn SecondaryBtn w-100 w-31Percent']")
}
}
export default My_Collection_Page