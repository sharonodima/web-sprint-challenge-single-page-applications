import * as yup from 'yup';
const schema = yup.object().shape({
     name: yup.string().min(2, "Name must be at least 2 characters"),
    "size-dropdown": yup.string().oneOf(["Small", "Medium", "Large"], "You must choose a size!"),
     sauce: yup.string().oneOf(["Original", "Garlic", "BBQ", "Spinach Alfredo"], "You must choose a sauce!"),
     pepperoni: yup.boolean(),
     sausage: yup.boolean(),
     canadianBacon: yup.boolean(),
     spicyItalian: yup.boolean(),
     grilledChicken: yup.boolean(),
     onions: yup.boolean(),
     greenPepper: yup.boolean(),
     dicedTomatoes: yup.boolean(),
     blackOlives: yup.boolean(),
     roastedGarlic: yup.boolean(),
     artichoke: yup.boolean(),
     threeCheese: yup.boolean(),
     pineapple: yup.boolean(),
     extraCheese: yup.boolean(),
     specialInstructions: yup.string(),
})
export default schema