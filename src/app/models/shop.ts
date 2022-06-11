export interface Shop {
    banners: string[],
    brand_name: string,
    category: string[],
    color: string,
    contact: {fb: string, tel: string, insta: string}
    created_on: Date,
    is_active: Number,
    logo_url: String,
    owner: {username: string, name: string},
    shop_id: Number,
    trade_name: String,
    type: string
    updated_on: Date
}