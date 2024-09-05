"use strict";
(() => {
var exports = {};
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
;// CONCATENATED MODULE: ./pages/api/checkout.ts

async function handler(req, res) {
    if (req.method != 'POST') {
        res.status(405).json({
            message: 'POST method required'
        });
    }
    try {
        const body = JSON.parse(req.body);
        const stripe = new external_stripe_namespaceObject.Stripe(process.env.STRIPE_SECRET ?? '', {
            apiVersion: '2020-08-27'
        });
        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            line_items: body.lineItems,
            mode: 'payment'
        });
        res.status(201).json({
            session
        });
    } catch (e) {
        // @ts-ignore
        res.status(500).json({
            message: e.message
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(521));
module.exports = __webpack_exports__;

})();