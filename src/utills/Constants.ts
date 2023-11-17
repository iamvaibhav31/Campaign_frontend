import p1 from '../assets/svg/platform/1.svg'
import p2 from '../assets/svg/platform/2.svg'
import p3 from '../assets/svg/platform/3.svg'
import p4 from '../assets/svg/platform/4.svg'
import p5 from '../assets/svg/platform/5.svg'
import p6 from '../assets/svg/platform/6.svg'
import p7 from '../assets/svg/platform/7.svg'
import p8 from '../assets/svg/platform/8.svg'
import p9 from '../assets/svg/platform/9.svg'
import FBIcon from '../assets/img/FBIcon.png'
import GIcon from '../assets/img/GIcon.png'
import YIcon from '../assets/img/YIcon.png'
import IIcon from '../assets/img/IIcon.webp'
import ICEIcon from '../assets/img/ICEIcon.webp'
import PROIcon from '../assets/img/PROIcon.webp'
const platforms = [
    {
        img: p1,
        name: "Get Leads as calls",
        description: "Reach broad audience and get leads through calls",
        value: "Google",
        selected: false
    },
    {
        img: p2,
        name: "Get Leads as Facebook messages",
        description: "Get more FB messages from Leads",
        value: "FB",
        selected: false
    },
    {
        img: p3,
        name: "Increase page followers",
        description: "Encourage customers to follow your page",
        value: "FB",
        selected: false
    },
    {
        img: p4,
        name: "Get Customer Leads",
        description: "Encourage customers to take action",
        value: "FB",
        selected: false
    },
    {
        img: p5,
        name: "Get more youtube views",
        description: "Increase organic views by obtaining user attention",
        value: "Youtube",
        selected: false
    },
    {
        img: p6,
        name: "Get more website traffic",
        description: "Get the right people to visit your website",
        value: "Instagram",
        selected: false
    },
    {
        img: p7,
        name: "Increase Live store traffic",
        description: "Drive visits to local stores, restaurants & Dealerships",
        value: "Google",
        selected: false
    },
    {
        img: p8,
        name: "Increase your App installs",
        description: "Get more installs, interactions for your app",
        value: "Youtube",
        selected: false
    },
    {
        img: p9,
        name: "Increase the catalogue sales",
        description: "Drive the sales of your catalogue and get more leads",
        value: "Google",
        selected: false
    }
];

const platformImg: { [key: string]: string } = {
    "FB": FBIcon,
    "Google": GIcon,
    "Instagram": IIcon,
    "Youtube": YIcon
};

const campaignFormData = [
    {
        id: 1,
        icon: PROIcon,
        name: "Mukund Cake Shop",
        desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
        banner: ICEIcon,
        selected: false
    },
    {
        id: 2,
        icon: PROIcon,
        name: "Mukund Cake Shop",
        desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
        banner: ICEIcon,
        selected: false
    },
    {
        id: 3,
        icon: PROIcon,
        name: "Mukund Cake Shop",
        desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
        banner: ICEIcon,
        selected: false
    }
]


export {
    platforms,
    platformImg,
    campaignFormData
}

