
import Img1 from './img/gallery1.jpg';
import Img2 from './img/gallery2.jpg';
import Img3 from './img/gallery3.jpg';
import Img4 from './img/gallery4.jpg';
import Img5 from './img/gallery5.jpg';
import Img6 from './img/gallery6.jpg';

// creacion de array de objetos para los productos
const products = [
    {
        id:'1',
        name: 'BlackWork-1',
        price: 2000,
        img: Img1,
        stock: 10,
    },
    {
        id:'2',
        name: 'BlackWork-2',
        price: 2000,
        img: Img2,
        stock: 10,

    },
    {
        id:'3',
        name: 'BlackWork-3',
        price: 2000,
        img: Img3,
        stock: 10,

    },
    {
        id:'4',
        name: 'BlackWork-4',
        price: 2000,
        img: Img4,
        stock: 10,

    },
    {
        id:'5',
        name: 'BlackWork-5',
        price: 2000,
        img: Img5,
        stock: 10,

    },
    {
        id:'6',
        name: 'BlackWork-6',
        price: 2000,
        img: Img6,
        stock: 10,

    }
];

// funcion de promesa de 2 segundos simulando solicitud de productos a servidor
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 200)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === productId))
        }, 200)
    })
};


