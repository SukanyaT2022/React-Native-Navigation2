import gaspump from '../asset/imagesFolder/gaspumpimg2.jpg';
import truck from '../asset/imagesFolder/cat1.png';

interface ExtraServiceProp{
    title: string,
    subtitle: string,
    text:string[],
    image:string,
    recommendedTag?: string,
    price:string,
    id:string

}

export const extraServiceData: ExtraServiceProp[] = [
    {
    title: "Skip the Pump and Save Time",
    subtitle: "Save time, return without refueling",
    text:[
        'Comparable to local fuel prices',
        'Avoid $9.99/gal for not refueling',
    ],
    image:gaspump,
    recommendedTag:"Recommended",
    price:"$50.99",
    id:"1"
},
{
    title: "Emergency & Roadside Assistance",
    subtitle: "unexpected situation",
    text:[
        'Flat tires or spare installation',
        'Lost car keys or locked out',
    ],
    image:gaspump,
    price:"$9.99",
    id:"2"
},
{
    title: "Unlimited Toll Pass",
    subtitle: "Toll-free travel made easy",
    text:[
        'Unlimited toll usage 24/7',
        'Fixed daily rate',
    ],
    image:gaspump,
    price:"$20.99",
    id:"3"
},
]

