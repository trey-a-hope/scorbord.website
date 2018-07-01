import { Sku } from '../../models/stripe/sku';

export class Product {
    id: String;
    object: String;
    active: boolean;
    caption: String;
    created: Date;
    description: String;
    name: String;
    imageUrls: Array<String>;
    updated: Date;
    skus: Array<Sku>;
    packageDimensions: PackageDimensions;
    price: number;
}

class PackageDimensions {
    height: number;
    lenght: number;
    weight: number;
    width: number;
}