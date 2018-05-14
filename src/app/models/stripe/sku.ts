export class Sku {
    id: String;
    object: String;
    active: boolean;
    attributes: Attributes;
    created: Date;
    currency: String;
    price: number;
    updated: Date;
}

class Attributes {
    color: String;
}
  