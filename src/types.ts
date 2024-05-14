export type Location = {
    "street": string,
    "city": string,
    "state": string,
    "zipcode": string
};

export type Rate = {
    nightly?: number,
    weekly?: number,
    monthly?: number
};

export type Contact = {
    name: string;
    email: string;
    phone: string;
}

export type Property = {
    "_id": string,
    "owner": string,
    "name": string,
    "type": string,
    "description": string,
    "location": Location,
    "beds": number,
    "baths": number,
    "square_feet": number,
    "amenities": string[],
    "rates": Rate,
    "seller_info": Contact,
    "images": string[],
    "isFeatured": boolean,
    "createdAt": string,
    "updatedAt": string
};