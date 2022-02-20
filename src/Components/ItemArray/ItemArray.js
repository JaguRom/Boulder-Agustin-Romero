const productsList = [
    {id: 1,
    name: "Climbing Rope", 
    img:"https://res.cloudinary.com/dv3opkhbh/image/upload/v1644713963/Boulder/Rope_fllcaw.webp",
    description:"100ft. rope. Made of nylon",
    category: "Climbing Gear",
    price: 200,
    stock: 8
},
{id: 2,
    name: "Climbing Harness",
    img: "https://res.cloudinary.com/dv3opkhbh/image/upload/v1644713963/Boulder/Harness_upv63q.jpg",
    description: "Fullweight harness.",
    category: "Climbing Gear",
    price: 150,
    stock: 4
},
{id: 3,
    name: "Liquid Chalk",
    img: "https://res.cloudinary.com/dv3opkhbh/image/upload/v1644713963/Boulder/LiquidChalk_zg4i4z.jpg",
    description: "Liquid chalk. Indoor use",
    category: "Climbing Gear",
    price: 10,
    stock: 10,
},
{id: 4,
    name: "Steel Bottle",
    img: "https://res.cloudinary.com/dv3opkhbh/image/upload/v1645125010/Boulder/descarga_1_gv4m9b.jpg",
    description: "Steel bottle for outdoor use. BPA free",
    category: "Trekking",
    price: 1000,
    stock: 2,
},
{id: 5,
    name: "Hiking Scarf",
    img: "https://res.cloudinary.com/dv3opkhbh/image/upload/v1645233350/Boulder/0271879a11b9c726ea23ec5556bface6_bare6c.jpg",
    description: "Hiking scarf. Quick drying",
    category: "Trekking",
    price: 15,
    stock: 10,
},
{id: 6,
    name: "Tent",
    img: "https://res.cloudinary.com/dv3opkhbh/image/upload/v1645124754/Boulder/descarga_fb9ckn.jpg",
    description: "High quality tent. Made of polymer fabric.",
    category: "Camping",
    price: 1000,
    stock: 2,
}
]

//Promesa para ItemListContainer
export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        const products = productsList.filter(product => product.category === category);
        setTimeout(() => {
            res(products);
        }, 2000);
    });
}
export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productsList);
        }, 2000);
    });
}

//Promesa para ItemDetailContainer
export const getItems = (id) => {
    return new Promise((res) => {
        const product = productsList.find(product => product.id === parseInt(id));
        setTimeout(() => {
            res(product);
        }, 2000);
    });
}
