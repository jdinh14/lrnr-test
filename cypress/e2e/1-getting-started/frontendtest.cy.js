describe("front end test", () => {
  it("successfully loads the homepage", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "/");
  });

  it("successfully loads the categories page", () => {
    cy.visit("http://localhost:3000/categories");
    cy.url().should("include", "/categories");
  });

  it("successfully loads the quiz page", () => {
    cy.visit("http://localhost:3000/quiz");
    cy.url().should("include", "/quiz");
  });

  it("successfully loads the account page", () => {
    cy.visit("http://localhost:3000/account");
    cy.url().should("include", "/account");
  });

  it("identifies the language as 'en-US'", () => {
    cy.visit("http://localhost:3000");
    cy.window().its("navigator.language").should("equal", "en-US");
  });

  it("checks quiz generation button", () => {
    cy.visit("http://localhost:3000");
    cy.contains('a.btn.btn-primary.btn-sm', "Begin Journey").click();
    cy.url().should("include", "/quiz-generation");
  });

  it("successfully loads the 404 page", () => {
    cy.visit("http://localhost:3000/404");
    cy.url().should("include", "/404");
    cy.contains("h1", "404 Not Found!").should("exist");
    cy.contains("p.lead", "Oops! The page you're looking for doesn't exist.").should("exist");
    cy.contains("a.btn.btn-primary", "Go Home").should("exist");
  });

});

