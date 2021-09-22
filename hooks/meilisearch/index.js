const { configureProductsIndex, indexAllProducts, addProducts } = require("./utils");

module.exports = strapi => {
    const hook = {
        defaults: {},

        async initialize() {
            await configureProductsIndex()
            indexAllProducts(strapi)
            strapi.services.meilisearch = {
                addProducts,
            }
        },
    };

    return hook;
};