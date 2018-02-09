import Realm from 'realm';

import UserModel from './User';
import ProductModel from './Product';
import PackageModel from './Package';

const AddressSchema = {
    name: 'Address',
    properties: {
        street: 'string',
        state: 'string',
        zip: 'string'
    }
}
const ProfileSchema = {
    name: 'Profile',
    properties: {
        name: 'string',
        age: 'int',
        email: 'string',
        contact_number: 'string',
        address: 'Address'
    }
}
const IngredientSchema = {
    name: 'Ingredient',
    properties: {
        name: 'string',
        amount: {type: 'float', default: 0},
        amount_limit: 'float',
        amt_to_price_ratio: 'float',
    }
}
const InstructionsSchema = {
    name: 'Instructions',
    properties: {
        instructions: 'string[]'
    }
}
const FoodSchema = {
    name: 'Food',
    properties: {
        ingredients: 'Ingredient[]',
        recipe: 'Instructions'
    },

}
const ProductSchema = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        image_uri: 'string',
        description: 'string',
        price: 'string',
        product_composition: 'Food?'
    }
}
const PackageSchema = {
    name: 'Package',
    properties: {
        product: 'Product',
        next_arrival_time: 'date'
    }
}
const UserSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: 'string',
        profile: 'Profile',
        subscriptions: {type: 'Package[]', default: []},
        shoppingCart: {type: 'Product[]', default: []}
    },
}

let database = new Realm({
    schema: [
        AddressSchema,
        ProfileSchema,
        IngredientSchema,
        InstructionsSchema,
        FoodSchema, 
        ProductSchema,
        PackageSchema, 
        UserSchema,
    ],
    deleteRealmIfMigrationNeeded: true,
});

export default DataHelpers = {
    getAllProducts() {
        return database.objects('Product');
    },
    getUserData() {
        return database.objects('User')[0];
    },

    insertUser(user) {
        if(database.objects('Profile').filtered("name == $0",user.profile.name).length) return;

        database.write(() => {
            database.create('User', user);
        })
    },
    addSubscriptionItem(user, itemToAdd) {
        database.write(() => {
            user.subscriptions.push(new PackageModel(itemToAdd, new Date()));
        })
    },
    addShoppingCartItem(user, itemToAdd) {
        database.write(() => {
            user.shoppingCart.push(itemToAdd);
        })
    },
    clearShoppingCart(user) {
        database.write(() => {
            user.shoppingCart = [];
        })
    },
    insertProduct(product) {
        if(database.objects('Product').filtered("name == $0", product.name).length) return;

        database.write(() => {
            database.create('Product', product);
        })
    },
    debug: {
        populateFixtures() {
            //populate Products
            DataHelpers.insertProduct(new ProductModel('McCreamy', 
            'https://source.unsplash.com/collection/345760/800x100', 
            'This is a lovely package of greens.', 
            '$4.99',
            {
                ingredients: [{
                    name: 'sure',
                    amount: 23,
                    amount_limit: 50,
                    amt_to_price_ratio: 100.3,
                }],
                recipe: {
                    instructions:[
                    "Heat half of the butter and half of the first tablespoon of olive oil in a large skillet over medium-high heat. Brown half of the beef cubes on all sides, and place into a large saucepan. Repeat with the remaining butter, olive oil, and beef. Stir the onions and garlic into the oil remaining in the skillet, and reduce heat to medium; cook and stir until the onion has softened and turned translucent, about 5 minutes. Pour in the red wine, and bring to a simmer, then scrape the onions into the saucepan with the beef.",
                    "Season the beef with salt, pepper, cinnamon, nutmeg, sugar, and orange zest. Pour in the diced tomatoes and water. Cover, and bring to a simmer over medium-high heat; then reduce heat to medium-low, and continue simmering 1 hour.",
                    "Meanwhile, heat the remaining tablespoon of olive oil in the skillet over medium heat. Stir in the pearl onions, and cook until they are well browned, stirring frequently, about 20 minutes. After the beef has simmered for an hour, add the pearl onions, recover, and continue simmering 20 minutes.",
                    "Remove the lid, and simmer, uncovered until the stew has reduced and slightly thickened, about 10 minutes. Remove the orange zest before serving."
                    ]
                }
            }));
            DataHelpers.insertProduct(new ProductModel('McCreamier', 
            'https://source.unsplash.com/collection/345760/800x101', 
            'This is a lovelier package of greens.', 
            '$14.99',
            {
                ingredients: [{
                    name: 'sure',
                    amount: 23,
                    amount_limit: 50,
                    amt_to_price_ratio: 100.3,
                }],
                recipe: {
                    instructions:[
                    "Preheat oven to 425 degrees F (220 degrees C). Spread potato nuggets onto a baking sheet.",
                    "Bake in the preheated oven until nuggets are half-cooked, 10 to 12 minutes. Allow to cool until easily handled. Cut each nugget in half.",
                    "Reduce oven temperature to 350 degrees F (175 degrees C). Spray 12 muffin cups with cooking spray.",
                    "Heat a large skillet over medium heat; cook and stir mushrooms, onion, red bell pepper, spinach, green onions, and sun-dried tomatoes for 5 minutes. Drain excess liquid and stir in chopped bacon.",
                    "Beat eggs, cream, salt, garlic powder, onion powder, and pepper together in a large bowl.",
                    "Spoon bacon mixture into the prepared muffin cups and top each with Monterey Jack cheese. Pour egg mixture over cheese layer until each cup is nearly full. Place 4 potato nugget halves into each",
                    "Bake in the preheated oven until set in the middle, 20 to 25 minutes."
                    ]
                }
            }));
            DataHelpers.insertProduct(new ProductModel('McCreamiest', 
            'https://source.unsplash.com/collection/345760/801x100', 
            'This is the loveliest package of greens.', 
            '$34.99',
            {}));
            DataHelpers.insertProduct(new ProductModel('McCocaine', 
            'https://source.unsplash.com/collection/345760/801x101', 
            'This is a ... nose candy.', 
            '$44.99',
            {}
            ));

            //populate User
            DataHelpers.insertUser(new UserModel(
                {
                    name: 'John Doe',
                    age: 23,
                    email: 'greens@gmail.com',
                    contact_number: '555-555-5555',
                    address : {
                        street: 'Amazing 21st Street',
                        state: 'Beautiful State',
                        zip: '555666'
                    }
                }
            ));
        },
        reset() {
            //reset db data
            database.write(() => {
                database.delete(database.objects('User'));
                database.delete(database.objects('Profile'));
                database.delete(database.objects('Product'));
            })
        }
    }
}



