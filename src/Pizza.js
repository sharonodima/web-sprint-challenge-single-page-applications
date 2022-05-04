import pizza2 from "../src/Assets/pizza2.jpg";
import "./App.css";

export default function Pizza({formValues, inputChange, handleSubmit, errors, disabled}) {

    const onSubmit = evt => {
        evt.preventDefault();
        handleSubmit();
    };

    const sizeChange = (evt) => {
        console.log('Size was picked.');
        const size = evt.target.value;
        //setSize(size);
        // setFormValues({
        //     ...formValues,
        //     "size-dropdown": size
        // })
        inputChange("size-dropdown", size)
    };

    const sauceChange = (evt) => {
        console.log('Sauce was picked or dropped');
        const sauce = evt.target.value;
        //setSauce(sauce);
        // setFormValues({
        //     ...formValues,
        //     sauce: sauce
        // })
        inputChange("sauce", sauce)
    };

    const toppingsChange = (evt) => {
        console.log('Topping was picked or dropped');
        const topping = evt.target.name;
        //setToppings(toppings);
        // setFormValues({
        //     ...formValues,
        //     [topping]: evt.target.checked
        // })
        inputChange(topping, evt.target.checked)
    };

    const specialInstructionsChange = (evt) => {
        console.log('Input was entered');
        const input = evt.target.value;
        //setInput(input);
        // setFormValues({
        //     ...formValues,
        //     specialInstructions: input
        // })
        inputChange("specialInstructions", input)
    };
    const nameChange = (evt) => {
        console.log("Name was entered")
        const name = evt.target.value;
        inputChange("name", name)
    }


    return (
        <>
            <h2>LAMBDA EATS</h2>
            <h3>Build your own pizza</h3>

            <div className="cta2">
                <img
                    className="pizza2"
                    src={pizza2}
                    alt="pizza2"
                />
            </div>

            <form id = "pizza-form" onSubmit={onSubmit}>
            <h5>Name</h5>
            <input onChange = {nameChange} value = {formValues.name}/>
            {errors.name && <div>
                {errors.name}
            </div>}
                <h5>Choice of Size</h5>
                <h5>Required</h5>
                {errors["size-dropdown"] && <div>
                {errors["size-dropdown"]}
            </div>}
                <div className="size">
                    <select
                        onChange={sizeChange}
                        value = {formValues["size-dropdown"]}
                        name='size-dropdown'>
                        <option value=''>- Select -</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </div>
                
                <h5>Choice of Sauce</h5>
                <h5>Required</h5>
                {errors.sauce && <div>
                {errors.sauce}
            </div>}
                <div className="sauce">
                    <div>
                        <input
                            type="radio"
                            name="sauce"
                            value="Original"
                            checked = {formValues.sauce === "Original"}
                            onChange={sauceChange}
                        />
                        <label>Original Red</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="sauce"
                            value="Garlic"
                            checked = {formValues.sauce === "Garlic"}
                            onChange={sauceChange}
                        />
                        <label>Garlic Ranch</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="sauce"
                            value="BBQ"
                            checked = {formValues.sauce === "BBQ"}
                            onChange={sauceChange}
                        />
                        <label>BBQ Sauce</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="sauce"
                            value="Spinach Alfredo"
                            checked = {formValues.sauce === "Spinach Alfredo"}
                            onChange={sauceChange}
                        />
                        <label>Spinach Alfredo</label>
                    </div>
                </div>
                <h5>Add Toppings</h5>
                <h5>Choose up to 10</h5>
                <div className="toppings">
                    <div className="check">
                        <input
                            type="checkbox"
                            name="pepperoni"
                            checked = {formValues.pepperoni}
                            onChange={toppingsChange}
                        />
                        <label>Pepperoni</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="sausage"
                            onChange={toppingsChange}
                        />
                        <label>Sausage</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="canadianBacon"
                            onChange={toppingsChange}
                        />
                        <label>Canadian Bacon</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="spicyItalian"
                            onChange={toppingsChange}
                        />
                        <label>Spicy Italian Sausage</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="grilledChicken"
                            onChange={toppingsChange}
                        />
                        <label>Grilled Chicken</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="onions"
                            onChange={toppingsChange}
                        />
                        <label>Onions</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="greenPepper"
                            onChange={toppingsChange}
                        />
                        <label>Green Pepper</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="dicedTomatoes"
                            onChange={toppingsChange}
                        />
                        <label>Diced Tomatoes</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="blackOlives"
                            onChange={toppingsChange}
                        />
                        <label>Black Olives</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="roastedGarlic"
                            onChange={toppingsChange}
                        />
                        <label>Roasted Garlic</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="artichoke"
                            onChange={toppingsChange}
                        />
                        <label>Artichoke Hearts</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="threeCheese"
                            onChange={toppingsChange}
                        />
                        <label>Three Cheese</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="pineapple"
                            onChange={toppingsChange}
                        />
                        <label>Pineapple</label>
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="extraCheese"
                            onChange={toppingsChange}
                        />
                        <label>Extra Cheese</label>
                    </div>
                </div>
                <h5>Choice of Substitute</h5>
                <h5>Choose up to 1</h5>
                <div className="sub">
                    <label className="switch">
                        <input type="checkbox" id="togBtn" />
                        <div className="slider round">
                            <span className="on"></span>
                            <span className="off"></span>
                        </div>
                        <p>Gluten Free Crust (+ $1.00)</p>
                    </label>
                </div>
                <div className="instructions">
                    <label>Special Instructions
                        <input
                            onChange={specialInstructionsChange}
                            name='username'
                            type='text'
                            placeholder="Anything else you'd like to add?"
                        />
                    </label>
                </div>
            <button className="submit" disabled = {disabled} >Add to Order</button>
            </form>
        </>
    );
}