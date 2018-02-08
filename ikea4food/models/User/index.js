import uuid from 'react-native-uuid';

export default class UserModel {
    constructor(profile) {
        this.id = uuid.v4();
        this.profile = profile;
        this.subscriptions = [];
        this.shoppingCart = [];
        this.registeredDate = new Date();
    }
}