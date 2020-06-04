// https://docs.cypress.io/api/introduction/api.html

describe("Form page", () => {
  it("Preserves state between forms", () => {
    cy.visit("/");
    cy.get(".v-form > :nth-child(1) > :nth-child(1) > .v-input").click();
    cy.contains("Beneficiary 2").click();
    cy.get("[data-cy='incoming-form']").click({ force: true });
  });

  it("Resets form", () => {
    cy.visit("/");
    cy.get("[data-cy='reset-btn']").click();
  });

  it("Outgoing > Submits form", () => {
    cy.visit("/");
    // beneficiary
    cy.get(".v-form > :nth-child(1) > :nth-child(1) > .v-input").click();
    cy.contains("Beneficiary 2").click();
    // facility
    cy.get(":nth-child(2) > :nth-child(1) > .v-input").click();
    cy.contains("Facility 1").click();
    // issuing bank
    cy.get(":nth-child(2) > :nth-child(2) > .v-input").click();
    cy.contains("Bank 3").click();
    // lc reference number
    cy.get("[data-cy='lc-ref-number']").type("1234");
    // lc type
    cy.get(
      ":nth-child(4) > .col-sm-6 > .v-input"
    ).click();
    cy.contains("LC Type 2").click();
    // face value
    cy.get("[data-cy='face-value']").type("54321");
    // tranche
    cy.get(":nth-child(6) > :nth-child(1) > .v-input").click();
    cy.contains("Tranche 3").click();
    // currency
    cy.get(":nth-child(8) > :nth-child(2) > .v-input").click();
    cy.contains("Angolan Kwanza").click();
    // submit
    cy.get("[data-cy='submit-btn']").click();
  });

  it("Incoming > Submits form", () => {
    cy.visit("/");
    cy.get("[data-cy='incoming-form']").click({ force: true });
    // applicant
    cy.get(".v-form > :nth-child(1) > :nth-child(1) > .v-input").click();
    cy.contains("Applicant 4").click();
    // issuing bank
    cy.get(":nth-child(2) > .col-sm-6 > .v-input").click();
    cy.contains("Bank 2").click();
    // lc reference number
    cy.get("[data-cy='lc-ref-number']").type("21334");
    // lc type
    cy.get(":nth-child(3) > :nth-child(2) > .v-input").click();
    cy.contains("LC Type 1").click();
    // face value
    cy.get("[data-cy='face-value']").type(363);
    //currency
    cy.get(":nth-child(7) > :nth-child(2) > .v-input").click();
    cy.contains("Australian Dollar").click();
    // submit
    cy.get("[data-cy='submit-btn']").click();
  });
});
