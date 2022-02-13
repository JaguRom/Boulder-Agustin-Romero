const productsList = [
    {id: 1,
    name: "Climbing Rope", 
    img:"https://res.cloudinary.com/dv3opkhbh/image/upload/v1644713963/Boulder/Rope_fllcaw.webp",
    description:"100ft. rope. Made of nylon",
    price: 200,
    stock: 8
},
{id: 2,
    name: "Climbing Harness",
    img: "https://res.cloudinary.com/dv3opkhbh/image/upload/v1644713963/Boulder/Harness_upv63q.jpg",
    description: "Fullweight harness.",
    price: 150,
    stock: 4
},
{id: 3,
    name: "Liquid Chalk",
    img: "https://res.cloudinary.com/dv3opkhbh/image/upload/v1644713963/Boulder/LiquidChalk_zg4i4z.jpg",
    description: "Liquid chalk. Indoor use",
    price: 10,
    stock: 10
}
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productsList);
        }, 2000);      
    });
}