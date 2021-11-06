const express = require( 'express' );
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const product = require('./server/routes/product');
const productHover = require('./server/routes/product-hover');
const checkout = require('./server/routes/checkout');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    // Static files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use(bodyParser.json());

    /**
     * @route POST api/upload
     * @route POST api/upload-hover S
     * @desc Upload post image
     * @access public
     */
    server.use( '/api/upload', product );
    server.use( '/api/upload-hover', productHover );
    server.use( '/api/checkout', checkout );

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err,
        console.log(`> Read on http://localhost:${PORT}`)
    })
});