import { EmojiHappyIcon, CreditCardIcon, ShoppingBagIcon, CurrencyDollarIcon } from '@heroicons/react/outline'
import picture from '../assets/cat-travel.jpg'
import image from '../assets/main-banner.jpg'
import sport from '../assets/sports.svg'
import books from '../assets/books.svg'
import groceries from '../assets/groceries.svg'
import gaming from '../assets/gaming.svg'
import computers from '../assets/copmuters.svg'
import camping from '../assets/camping.svg'
import fashion from '../assets/fashion.svg'
import homeware from '../assets/homeware.svg'
import kitchen from '../assets/kitchen.svg'
import baby from '../assets/baby.svg'
import office from '../assets/office.svg'
import outdoor from '../assets/outdoor.svg'
import tv from '../assets/tv.svg'
import cellphone from '../assets/cellphone.svg'
import automotive from '../assets/automotive.svg'
import beauty from '../assets/beauty.svg'

export const data = {
    categories : [
        { name: 'Sports and training', value:"sports-&-training", icon: sport },
        { name: 'Books & courses', value: 'sooks-&-courses', icon: books },
        { name: 'Groceries', value: 'groceries', icon: groceries },
        { name: 'Gaming', value: 'gaming', icon: gaming },
        { name: 'Computer & electronics', value:'computer-&-electronics', icon: computers },
        { name: 'Camping & outdoors', value:'camping-&-outdoors', icon: camping },
        { name: 'Fashion & luggage', value: 'fashion-&-luggage', icon: fashion },
        { name: 'Kitchen appliances', value:'kitchen-appliances', icon: kitchen },
        { name: 'Beauty & fragrances', value:'beauty-and-fragrances', icon: beauty },
        { name: 'Homeware & appliances', value: 'homeware-&-large-appliances', icon: homeware },
        { name: 'Baby & toddler', value: "baby-&-toddler", icon: baby },
        { name: 'Office & Stationery', value: "office-and-stationery", icon: office },
        { name: 'Outdoor & patio', value: "outdoor-and-patio", icon: outdoor },
        { name: 'TV audio and electronics', value: "tv-audio-and-electronics", icon: tv },
        { name: 'Cellphone & wearables ', value: "cellphone-&-wearables ", icon: cellphone },
        { name: 'Automitive & D.I.Y ', value: "automitive-&-D.I.Y", icon: automotive },

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