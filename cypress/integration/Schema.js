describe ("Pizza App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
    const nameInput = () => cy.get("input[id='name-input']");
    const sizeInput1 = () => cy.get('select').select(1);
    const sizeInput2 = () => cy.get('select').select(2);
    const sizeInput3 = () => cy.get('select').select(3);
    const sauce1 = () => cy.get("input[type='radio']").first().click();
    const sauce2 = () => cy.get("input[value='Garlic']").click(2);
    const sauce3 = () => cy.get("input[value='BBQ']").click(3);
    const sauce4 = () => cy.get("input[value='Spinach Alfredo']").click(4);
    const toppingInput = () => cy.get('input[type="checkbox"]').first().click()
    const specialInput = () => cy.get("input[id=special-text]");
    const orderBtn = () => cy.get("button");


    it("The proper elements are showing", () => {
        nameInput().should("exist");
        sizeInput1().should("exist");
        sizeInput2().should("exist");
        sizeInput3().should("exist");
        sauce1().should("exist");
        sauce2().should("exist");
        sauce3().should("exist");
        sauce4().should("exist");
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
            sauce1()
              .should("have.value", "Original")
              .type("Original")
              .should("have.value", "Original")
            sizeInput1()
              .should("have.value", "Small")
              .type("Small")
              .should("have.value", "Small");
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
            sauce1().type("on");
            sizeInput1().type("on");
            toppingInput().type("on");
            specialInput().type("no sauce");
            orderBtn().should("not.be.disabled");
        })

        it("The add to order button can reset the inputs and checkboxes then become disabled", () => {
            nameInput().type("Jane");
            sauce1().type("Original");
            sizeInput1().type("on");
            toppingInput().type("on");
            specialInput().type("no sauce");
            orderBtn().click();
            nameInput().should("have.value", "");
            sauce1().should("have.value", "Original")
            sizeInput1().should("have.value", "Small");
            toppingInput().should("have.value", "on");
            specialInput().should("have.value", "no sauce");
        })   
    })
})