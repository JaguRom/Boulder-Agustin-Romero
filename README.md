# **Boulder Mountain Shop**

### Outdoor & Adventure Gear

## React Js Coderhouse

## Información del proyecto/ Project information:
Entrega del proyecto final para el curso de React.js de CoderHouse.
"Boulder Mountain Shop" es una maqueta de ecommerce desarrollado integramente en React Js, aplicando diseño modular en cada uno de los componentes.
-
<strong>Final presentation of Coderhouse´s React.js course.
"Boulder Mountain Shop" is an ecommerce mockup, fully developed on React Js, aplying modular design en each component.</strong>


![Demo](https://github.com/https://github.com/JaguRom/Boulder-Agustin-Romero/blob/main/boulderGiff.gif)

### Header ###
Esta sección contiene las diferentes categorías de navegabilidad del ecommerce.
La sección /Home lleva al usuario hacia el inicio de la página. Las categorías permiten navegar entre los diferentes productos disponibles en la tienda.
El ícono de Cart aparece al realizar la primer compra, y dirige al usuario hacia la sección "/Cart", donde puede finalizar la operación después de llenar el formulario de compra.
-
<strong>This seccion contains the different navegable categories of the store.
Section /Home directs the user back to the initial page. Categories allow users to navigate between the different products available in the store.
The Cart icon is shown when the first purchase is made. It takes the user to the "/Cart" section, where the operation can be finished after filling in the purchase form.</strong>

### Body ###
Esta sección contiene todos los productos disponibles en la tienda.
Al clickear sobre un producto, se dirige al usuario hacia la página que contiene el detalle del producto, en la cual puede seleccionarse la cantidad a comprar dependiendo del stock disponible.
-
This section contains every product available in the store.
By clicking a product the user is directed towards the product detail page, where the item quantity to buy can be selected depending on the available stock.

### Cart ###
En esta sección el usuario puede ver la cantidad y el costo total de los productos a comprar.
También se incluye la opción de borrar un producto particular de la lista, o limpiar el carrito eliminando todos los productos disponibles.
Para completar la orden de compra, se requiere al usuario llenar el formulario de compra con sus datos personales.
Despues de esto, el comprador está habilitado para finalizar la compra.
-
In this section, the user can see the quantity and total amount of the products to buy.
It is also included an option to delete a single product of the list, or cleaning the cart by eliminating all available products.
To complete the purchase order, the user is required to fill in the purchase form with their personal information.
After this, the buyer is enabled to finish the purchase.

## Desarrollado con/ developed with:

<ul>
    <li>Visual Studio Code</li>
    <li>React</li>
    <li>Git</li>
    <li>Firebase</li>
    <li>Formik</li>
    <li>Cloudinary</li>
</ul>

## *Dependencias/ Dependencies:*

- React Router: Se utilizo esta librería para crear las rutas de navegación que renderizan cada uno de los  componentes, agregandole dinamismo a la aplicación.
-
-React Router: This library was used to create the  navigational routes in charge of rendering each of the components, adding dinamism to the aplication.

- Fontawesome: Los íconos utilizados en la applicación son componentes importados de esta librería.
-
- Fontawesome: All icons used in the application are imported components of this library

- Firebase: Se uso esta librería para utilizar la base de datos de Firebase, para almacenar el stock de la tienda y los datos del usuario.
-
- Firebase: This library was used to operate Firebase´s database in order to store the shop´s item stock and user data.

## *Ejecución de la aplicación / Application execute :*

1. Abrir una nueva terminal y clonar el repositorio con el siguiente comando:
    ```
    git clone https://github.com/JaguRom/Boulder-Agustin-Romero
    ```

-  Open a new terminal and clone the repository using the following command:
    ```
    git clone https://github.com/JaguRom/Boulder-Agustin-Romero
    ```

2. Dentro del proyecto, abrir una nueva terminal y ejecutar el siguiente comando:
    ```
    cd Boulder-Agustin-Romero
    npm install
    npm start
    ```
-  Inside the proyect, open a new terminal and execute the following command:
    ```
    cd Boulder-Agustin-Romero
    npm install
    npm start
    ```

### *Información acerca del desarrollo / Information about development :*
## *Rutas/ Routes:*

- Main ("/"): Renderiza las imágenes de productos destacados, un container para acceder a las distintas categorías y otro con todos los productos existentes en la base de datos.
-

- Category ("/category/:categoryId"): Renderiza los productos filtrados en base a su categoría.
- Category ("/category/:categoryId"): Renders filtered products according to selected category.

- Item ("/detail/:productId"): Renderiza una card con los detalles del producto seleccionado.
- Item ("/detail/:productId"): Renders a card with selected product details.

- Cart ("/cart"): Renderiza el carrito de compras con los productos agregados por el usuario.
- Cart ("/cart"): Reders the cart page whith products added by the user




### Developer: Agustín Romero



#### [Github](https://github.com/JaguRom)
#### [LinkedIn](https://www.linkedin.com/in/juan-agustin-romero)


---