module.exports = {
    friendlyName: '',
    description: '',

    inputs: {
        id: {
            type: 'string',
            required: true
        }
    },

    exits: {
        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/product'
        }
    },

    fn: async function({id}) {
        var product = await Product.findOne({productID: id});

        if (!product) {throw 'notFound'};

        return { exits: product.name};
    }
}