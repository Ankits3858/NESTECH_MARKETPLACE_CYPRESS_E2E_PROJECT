class Login_Page
{
get_username()
{
    return cy.get("input[id='email']")
}
get_password()
{
    return cy.get("input[id='password']")
}
get_submit()
{
    return cy.get(".w-100 > .CommonBtn")
}
get_invalid_toast()
{
    return cy.get("div[aria-label='Please enter a valid username/email.']")
}
get_valid_toast()
{
    return cy.get("div[aria-label='logged in successfully']")
}
get_invalid_toast2()
{
    return cy.get("div[aria-label='Please enter the password.']")
}
get_invalid_toast3()
{
    return cy.get("div[aria-label='password must be at least 6 characters.']")
}


}
export default Login_Page