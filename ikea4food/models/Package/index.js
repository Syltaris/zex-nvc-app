import uuid from 'react-native-uuid';

export default class PackageModel {
    constructor(product, next_arrival_time) {
        this.id = uuid.v4();
        this.product = product;
        this.next_arrival_time = next_arrival_time;
    }
}