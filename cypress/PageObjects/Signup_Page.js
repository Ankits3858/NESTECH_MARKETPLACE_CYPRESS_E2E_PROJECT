class Signup_Page
{
    get_signup()
    {
        return cy.get("span[class='cursor-pointer transparent_btn text-decoration-underline']")
    }
    get_profileName()
    {
        return cy.get("input[name='username']")
    }
    get_email()
    {
        return cy.get("input[id='email']")
    }
    get_password()
    {
        return cy.get("input[id='password']")
    }
    get_confirmPassword()
    {
        return cy.get("input[formcontrolname='confirmPassword']")
    }
    get_signup()
    {
        return cy.get(".DetailsLEftLogin > .font32px")
    }
    get_profile_alert_toast()
    {
        return cy.get(":nth-child(1) > .text-danger")
    }
    get_email_alert_toast()
    {
        return cy.get(':nth-child(2) > .text-danger')
    }
    get_password_alert_toast()
    {
        return cy.get(':nth-child(3) > .text-danger')
    }
    get_password_matched_toast()
    {
        return cy.get(':nth-child(4) > .text-green')
    }
    get_confirm_password_alter_toast()
    {
        return cy.get(':nth-child(4) > .text-danger')
    }







}
export default Signup_Page