# Voodoo Company Test Work

1. Adaptive Layout: The website is designed to be responsive and adapt to various screen sizes, ensuring a consistent and user-friendly experience across different devices.

2. JavaScript Dynamic Cart: I have created a dynamic cart functionality using JavaScript. Users can add and remove products from the cart, change the quantity of products, and see the updated cart total in real-time.

3. Fetching Data from API: The product information is fetched from an external API using JavaScript's Fetch API. This ensures that the product data is up-to-date and can be easily managed without modifying the codebase.

4. Adding and Removing from Cart: Users can add products to the cart by clicking on an "Add to Cart" button associated with each product. Similarly, they can remove products from the cart using the "Remove" button within the cart.

5. Changing Product Quantity: Users have the ability to change the quantity of a product directly in the cart. The cart total and individual product totals are recalculated automatically based on the quantity changes.

## Project Structure

The project is organized as follows:

```
project/
|-- dist/
|   |-- css/
|   |-- img/
|   |-- js/
|   |-- index.html
|-- src/
|   |-- html/
|   |-- img/
|   |-- js/
|   |-- scss/
|   |-- index.html
|-- .browserslistrc
|-- .gitignore
|-- gulpfile.js
|-- package-lock.json
|-- package.json
|-- README.md
```
1. `dist`: This directory contains the production-ready files generated by Gulp. The optimized CSS, JavaScript, and image files will be placed here.

2. `src`: This directory contains the source files of the project.

3. `gulpfile.js`: This file defines the Gulp tasks, such as compiling SCSS, minifying files, and optimizing images.

4. `package.json`: This file lists the project's dependencies and other metadata required for running Gulp tasks.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine using Git.

2. Ensure you have Node.js and npm (Node Package Manager) installed on your system.

3. Navigate to the project root directory in the terminal.

4. Run the following command to install the project dependencies:

   ```
   npm install
   ```

5. After the installation is complete, run the following command to start the Gulp tasks and serve the project:

   ```
   npm run dev
   ```

6. Your web application will now be accessible at `http://localhost:3000/` in your web browser.


7. To build the project:
    ```
    npm run build
    ```


Sincerely,
Vitalii
4erviken@gmail.com