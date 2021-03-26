describe("Pizza app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const sausageInput = () => cy.get('input[name="sausage"]');
  const jalapenoInput = () => cy.get('input[name="jalapeno"]');
  const mushroomInput = () => cy.get('input[name="mushroom"]');
  const oliveInput = () => cy.get('input[name="olive"]');
  const nameInput = () => cy.get('input[name="name"]');
  const instructionInput = () => cy.get('input[name="instruction"]');
  const sizeInput = () => cy.get('select[name="size"]');
  const submitButton = () => cy.get('#submitButton');

  it("sanity test to make sure that tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("testing to see if user can select multiple toppings", () => {
    // ensuring we're working with a blank slate
    sausageInput().should("not.be.checked");
    jalapenoInput().should("not.be.checked");
    mushroomInput().should("not.be.checked");
    oliveInput().should("not.be.checked");

    // checking all checkbox fields
    sausageInput().check();
    jalapenoInput().check();
    mushroomInput().check();
    oliveInput().check();

    // ensuring that the checkboxes have been checked
    sausageInput().should("be.checked");
    jalapenoInput().should("be.checked");
    mushroomInput().should("be.checked");
    oliveInput().should("be.checked");

    // unchecking all checkbox fields
    sausageInput().uncheck();
    jalapenoInput().uncheck();
    mushroomInput().uncheck();
    oliveInput().uncheck();

    // ensuring we've returned to a blank slate
    sausageInput().should("not.be.checked");
    jalapenoInput().should("not.be.checked");
    mushroomInput().should("not.be.checked");
    oliveInput().should("not.be.checked");
  });

  it("check to see if text can be typed into the text inputs", () => {
    // ensuring we're working with a blank slate
    nameInput().should("have.value", "");
    instructionInput().should("have.value", "");

    // inputting data into all text fields
    nameInput().type("Hungry Howie");
    instructionInput().type("Bring me the greatest pizza ever crafted by mankind!");

    // ensuring that said data has been inputted correctly
    nameInput().should("have.value", "Hungry Howie");
    instructionInput().should("have.value", "Bring me the greatest pizza ever crafted by mankind!");

    // clearing all text fields
    nameInput().type("{selectall}{backspace}");
    instructionInput().type("{selectall}{backspace}");

    // ensuring we've returned to a blank slate
    nameInput().should("have.value", "");
    instructionInput().should("have.value", "");
  });

  it("test to see if user can submit the form after inputting required values", () => {
    // ensuring we're working with a blank slate, and checking that the submit button is behaving as expected
    nameInput().should("have.value", "");
    sizeInput().should("have.value", "");
    submitButton().should("be.disabled");

    // inputting data to satisfy all minimum field requirements
    nameInput().type("Hungry Howie");
    sizeInput().select("small");

    // checking the inputted data, and checking that the submit button is behaving as expected 
    nameInput().should("have.value", "Hungry Howie");
    sizeInput().should("have.value", "small");
    submitButton().should("not.be.disabled");

    // clearing the data fields
    nameInput().type("{selectall}{backspace}");
    sizeInput().select("");

    // ensuring we've returned to a blank slate, and checking that the submit button is behaving as expected
    nameInput().should("have.value", "");
    sizeInput().should("have.value", "");
    submitButton().should("be.disabled");
  });
});
