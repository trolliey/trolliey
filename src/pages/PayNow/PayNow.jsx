import { PaynowPayment } from 'paynow-react';
import React from 'react';

const items = [
    {
        title: 'Annual Bleek Subscription',
        amount: 10,
        quantity: 1,
        image:
            'https://d1wqzb5bdbcre6.cloudfront.net/c25a949b6f1ffabee9af1a5696d7f152325bdce2d1b926456d42994c3d91ad78/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f666c5f746573745f67625631776635726a4c64725a635858647032346d643649',
    },
    {
        title: 'Annual Clinch Subscription',
        amount: 200.1,
        quantity: 1,
    },
];


function PayNow({isOpen, setIsOpen}) {

    // const [isOpen, setIsOpen] = useState(true);
    console.log(items)

    const onClose = data => {
        setIsOpen(false);
        console.log(data);
    };

    return <div>
        <PaynowPayment
            items={items}
            label="Trolliey Checkout"
            paymentMode="mobile"
            isOpen={isOpen}
            onClose={onClose}
        />
    </div>;
}

export default PayNow;
