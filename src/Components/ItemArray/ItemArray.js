const productsList = [
    {id: 1,
    name: "Climbing Rope", 
    img:"",
    description:"Some description",
    price: 200,
    stock: 8
},
{id: 2,
    name: "Climbing Harness",
    img: "",
    description: "Some description",
    price: 150,
    stock: 4
},
{id: 3,
    name: "Liquid Chalk",
    img: "",
    description: "Some description",
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