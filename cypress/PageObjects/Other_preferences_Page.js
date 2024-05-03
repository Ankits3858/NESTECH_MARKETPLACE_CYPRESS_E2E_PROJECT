
class Other_preferences_Page {
   get_other_preference() {
      return cy.xpath("//h3[contains(text(),'Other Preferences')]")
   }
   get_distance() {
      return cy.get(".font32px > :nth-child(1) > .AutoSizeInput")
   }
   get_event_list() {
      return cy.xpath("//input[@name='eventList']")
   }
   get_min_price() {
      return cy.get(":nth-child(4) > .AutoSizeInput")
   }
   get_max_price() {
      return cy.xpath("//input[@name='priceMax']")
   }
   get_year() {
      return cy.xpath("//input[@name='experience']")
   }
   get_variation() {
      return cy.xpath("//input[@name='variation']")
   }
   get_save() {
      return cy.xpath("//button[@class='CommonBtn PrimaryBtn px-5']")
   }
   get_reset() {
      return cy.xpath("//button[@class='CommonBtn SecondaryBtn px-5']")
   }
   get_() {
      return cy.xpath("")
   }
   get_() {
      return cy.get("")
   }
   get_() {
      return cy.xpath("")
   }
   get_() {
      return cy.xpath("")
   }
   get_() {
      return cy.xpath("")
   }
   get_() {
      return cy.xpath("")
   }
   get_() {
      return cy.xpath("")
   }
}

export default Other_preferences_Page