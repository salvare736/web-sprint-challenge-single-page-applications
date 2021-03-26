describe("Quotes app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("sanity test to make sure that tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });
});
