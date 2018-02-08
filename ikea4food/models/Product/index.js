import uuid from 'react-native-uuid';

export default class ProductModel {
    constructor(name, image_uri, description, price, product_composition) {
        this.id = uuid.v4();
        this.name = name;
        this.image_uri = image_uri;
        this.description = description;
        this.price = price;
        this.product_composition = product_composition;
    }
}