const express = require( 'express' );
const keys = require("../config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
/**
 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 */
const router = express.Router();

router.post('/', async (req, res) => {
    await stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'Livani - React Next',
        source: req.body.token.id
    });
    res.send({})
});

module.exports = router;