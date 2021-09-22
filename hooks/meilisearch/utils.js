const { MeiliSearch } = require('meilisearch')

let client = new MeiliSearch({
    host: 'http://0.0.0.0:7700',
})

let productsIndex

const configureProductsIndex = async () => {
    //await client.index('products').delete()

    productsIndex = await client.getOrCreateIndex(`products`, {
        primaryKey: "id"
    })
    await productsIndex.updateSettings({
        // order in searchableAttributes defines the order of importance for the search
        searchableAttributes: ['title', 'description'],
        sortableAttributes: ['price']
    })
}

const addProducts = async (products) => {
    // those documents will be added again, even if the id is already taken
    await productsIndex.addDocuments(products, { primaryKey: 'id' })
}

const indexAllProducts = async (strapi) => {
    let hasMore = true
    let _limit = 100
    let _start = 0
    while (hasMore) {
        const products = await strapi.services.product.find({ _limit, _start, _sort: 'created_at:ASC' })
        console.log('Sending ' + products.length + ' products to Meilisearch')
        await addProducts(products)
        _start += products.length
        hasMore = products.length > 0
    }
}

module.exports = {
    configureProductsIndex,
    addProducts,
    indexAllProducts,
}