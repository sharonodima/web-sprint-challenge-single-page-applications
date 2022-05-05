describe ("Pizza App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
    const nameInput = () => cy.get("input[id='name-input']");
    const sizeInput = () => cy.get("input[type='checkbox']");
    const sauceInput = () => cy.get("input[type='checkbox']");
    const toppingInput = () => cy.get("select[name='toppings']");
    const specialInput = () => cy.get("input[id=special-text]");
    const orderBtn = () => cy.get("button");


    it("The proper elements are showing", () => {
        nameInput().should("exist");
        sizeInput().should("exist");
        sauceInput().should("exist")
        toppingInput().should("exist");
        specialInput().should("exist");
        orderBtn().should("exist");
    })

    describe("Filling out the inputs and reseting the form", () => {
        it("Can navigate to the site", () => {
            cy.url().should("include", "localhost")
        })

        it("Register button starts out disabled", () => {
            orderBtn().should("be.disabled");
        })

        it("Can type in the inputs and select the checkboxes", () => {
            nameInput()
              .should("have.value", "")
              .type("Jane")
              .should("have.value", "Jane");
            sizeInput()
              .should("have.value", "on")
              .type("on")
              .should("have.value", "on");
            toppingInput()
              .should("have.value", "on")
              .type("on")
              .should("have.value", "on");
            specialInput()
              .should("have.value", "")
              .type("no sauce")
              .should("have.value", "no sauce");
        })

        it("The add to order button enables when all inputs and checkbox are filled out", () => {
            nameInput().type("Jane");
            sizeInput().type("Doe");
            toppingInput().type("johndoe@gmail.com");
            specialInput().type("tyweirt");
            registerBtn().should("not.be.disabled");
        })

        it("The add to order button can reset the inputs and checkboxes then become disabled", () => {
            nameInput().type("John");
            sizeInput().type("Doe");
            toppingInput().type("johndoe@gmail.com");
            specialInput().type("tyweirt");
            registerBtn().click();
            nameInput().should("have.value", "");
            sizeInput().should("have.value", "");
            toppingInput().should("have.value", "on");
            specialInput().should("have.value", "");
        })   
    })
})