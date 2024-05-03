class Settings_Information_Page
{
    get_settings()
    {
        return cy.get("a[ng-reflect-router-link='/settings/settings-options']")
    }
    get_settings_information()
    {
        return cy.get(":nth-child(1) > .InnerSingleIntrestedDiv")
    }
    get_cross_button()
    {
        return cy.get("svg[class='bi bi-x-lg d-none CloseBtn']")
        
    }
    get_display_name()
    {
        return cy.get("input[formcontrolname='displayName']")
    }
    get_location()
    {
        return cy.get("input[formcontrolname='location']")
    }
    get_price()
    {
        return cy.get("input[id='mapPrice']")
    }
    
  get_genderType()
  {
      return cy.get("select[id='Key']")
  }
  get_save()
  {
      return cy.get("button[type='submit']")
  }
  get_profileImage()
  {
      return cy.get("input[id='Upload_PIC']")
  }
  get_profileImage_preview()
  {
      return cy.get("")
  }

}
export default Settings_Information_Page