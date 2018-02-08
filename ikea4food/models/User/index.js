
export default class UserModel {
    constructor() {
        this.key = guid();
        this.profile = {
            name: name,
            age: age,
            email: email,
            contact_number: contact_number,
            address: {
                street: street,
                state: state,
                zip: zip
            }
        };
        this.subscriptions = [];
        this.shoppingCart = [];
        this.registeredDate = new Date();
    }
}