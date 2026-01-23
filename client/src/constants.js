import product1 from "../src/assets/images/product1.jpg"
import product2 from "../src/assets/images/product2.jpg"
import product3 from "../src/assets/images/product3.jpg"
const products = [

    {
        id: 1,
        name: "Handmade Bamboo Basket",
        price: 499,
        image:
            product1
    },
    {
        id: 2,
        name: "Clay Pottery Vase",
        price: 799,
        image:
            product2
    },
    {
        id: 3,
        name: "Handwoven Jute Bag",
        price: 699,
        image:
            product3
    },

];

export const footerLinks = [
    {
        id: 1,
        name: "Home",
        link: "/home"
    },
    {
        id: 2,
        name: "About",
        link: "/about"
    },
    {
        id: 3,
        name: "Products",
        link: "/products"
    },
    {
        id: 4,
        name: "Blogs",
        link: "/blogs"
    },
    {
        id: 5,
        name: "Contact",
        link: "/contact"
    }
]

export const supportLinks = [
    {
        id: 1,
        name: "Help Center",
        link: "/helpCenter",
    },
    {
        id: 2,
        name: "Report Issue",
        link: "/reportIssue",
    },
    {
        id: 3,
        name: "Privacy Policy",
        link: "/privacyPolicy",
    },
    {
        id: 4,
        link: "Terms & Conditions",
        name: "/terms&Conditions",
    }
]


export default products;
