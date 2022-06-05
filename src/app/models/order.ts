export interface Order {
    id: string,
    paymentStatus: boolean,
    deliveryStatus: boolean,
    products: 
        {
            name: String,
            quantity: number,
            price: number
        } []
    ,
    date: Date,
    deliveryDate: Date,
    userId: String,
    location: {
        attitude: String,
        longitude: String
    },
    paymentType: String
}
