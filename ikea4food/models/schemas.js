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
        if(database.objects('Profile').filtered("name = '" + user.profile.name + "'").length) return;

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
            user.shoppingCart.push(new ProductModel(itemToAdd.name, itemToAdd.image_uri, itemToAdd.description, itemToAdd.price, itemToAdd.product_composition));
        })
    },
    clearShoppingCart(user) {
        database.write(() => {
            user.shoppingCart = [];
        })
    },
    insertProduct(product) {
        if(database.objects('Product').filtered("name = '" + product.name + "'").length) return;

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
            {}));
            DataHelpers.insertProduct(new ProductModel('McCreamier', 
            'https://source.unsplash.com/collection/345760/800x101', 
            'This is a lovelier package of greens.', 
            '$14.99',
            {}));
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



