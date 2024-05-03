class Home_Page
{
get_login()
{
    return cy.get("a[class='nav-link font-normal ng-star-inserted']")
}
get_logout()
{
    return cy.get("#collapsibleNavbar > :nth-child(6)")
}
get_successfull_logout_toast()
{
    return cy.get("div[aria-label='logged out successfully']")
    //return cy.get("#toast-container > .ng-trigger")
}
get_navigation_bar()
{
    return cy.get("path[fill-rule='evenodd']")
}
get_logout_confirmation()
{
    return cy.get(".d-flex > .PrimaryBtn")
}
get_search_bar()
{
    //return cy.get(".InputBox")
    return cy.get("input[placeholder='Search NFTs by name, location etc.']")
}
get_cross_button()
{
    return cy.get("em[class='bi bi-x-lg']")
}
get_search_item()
{
    return cy.get("h3[class='font50px']")
}
get_createNFT()
{
    return cy.get(":nth-child(1) > .InnerSingleIntrestedDiv")
}
get_mycollection()
{
    return cy.get(":nth-child(2) > .InnerSingleIntrestedDiv > .InterstedDiv")
}
get_create_collection()
{
    return cy.get("div[ng-reflect-router-link='/nft/create-collection']")
}


}
export default Home_Page