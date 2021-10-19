import { EmojiHappyIcon, CreditCardIcon, ShoppingBagIcon, CurrencyDollarIcon } from '@heroicons/react/outline'
import picture from '../assets/cat-travel.jpg'
import image from '../assets/main-banner.jpg'

export const data = {
    categories : [
        { name: 'Accessories parts', value:"accessories" },
        { name: 'components', value: 'compoents' },
        { name: 'tables', value: 'tables' },
        { name: 'software', value:'software' },
        { name: 'phones & PDAs', value:'phones' },
        { name: 'cameras', value: 'cameras' },
        { name: 'tent house', value:'tent_house' },
        { name: 'kids products', value: 'kids_products' },
        { name: 'sofa seat', value: "sofa_seat" }
    ],
    benefits : [
        { heading: 'Free shipment', details: 'Free shipment for bulk goods', icon: ShoppingBagIcon, },
        { heading: 'Anyplace anytime', details: 'Many methods', icon: CreditCardIcon },
        { heading: '100% Satisfaction', details: 'great customer care', icon: EmojiHappyIcon },
        { heading: 'Save money', details: 'frequent discounts', icon: CurrencyDollarIcon },
    ],
    products:[
        {name: 'toyota hilux', descrition: 'iam a a product iam a description of a product iam a description of a productiam a a product iam a description of a product iam a description of a product', rating: ['1', '2', '3', '4'], price:242, discount_price: 200, picture: picture, id: 1},
        {name: 'toyota hilux', descrition: 'iam a a product iam a description of a product iam a description of a productiam a a product iam a description of a product iam a description of a product', rating: ['1', '2', '3', '4'], price:242, discount_price: 200, picture: picture, id: 2},
        {name: 'pants', descrition: 'babt dipers', rating: ['1', '2', '3'], price:20, discount_price: 15, picture: image, id: 3},
        {name: 'toyota hilux', descrition: 'iam a a product iam a description of a product iam a description of a productiam a a product iam a description of a product iam a description of a product', rating: ['1', '2', '3', '4'], price:242, discount_price: 200, picture: picture, id: 4},
        {name: 'pants', descrition: 'babt dipers', rating: ['1', '2', '3'], price:20, discount_price: 15, picture: image, id: 5},
        
    ]
}