import Realm from 'realm';

import UserModel from './User';
import ProductModel from './Product';

const UserSchema = {
    name: 'User',
    properties: {
        key: 'string',
        profile: {
            name: 'string',
            age: 'int',
            email: 'string',
            contact_number: 'string',
            address: {
                street: 'string',
                state: 'string',
                zip: 'string'
            }
        },
    },
    subscriptions: 'Package[]',
    shoppingCart: 'Product[]'
}
const PackageSchema = {
    name: 'Package',
    properties: {
        product: 'Product',
        next_arrival_time: 'date'
    }
}
const ProductSchema = {
    name: 'Product',
    properties: {
        key: 'string',
        name: 'string',
        image_uri: 'string',
        description: 'string',
        price: 'string',
        product_composition: 'Food{}'
    }
}
const FoodSchema = {
    name: 'Food',
    properties: {
        ingredients: 'Ingredient[]'
    },
    recipe: {
        instructions: 'string[]'
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

let database = new Realm({
    schema: [UserSchema, PackageSchema, ProductSchema, FoodSchema, IngredientSchema]
});

export default DataHelpers = {
    getAllProducts() {
        return database.objects('Product');
    },
    getUserData() {
        return database.objects('User');
    }
}
