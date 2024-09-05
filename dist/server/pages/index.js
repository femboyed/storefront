"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const cartContextProps = {};
const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(cartContextProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartContext);


/***/ }),

/***/ 399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/context/CartContext.tsx
var CartContext = __webpack_require__(366);
;// CONCATENATED MODULE: ./utils/computed.ts
function getProductName(product) {
    return product?.name;
}
function getProductImage(product) {
    return product?.images[0];
}
function getProductDescription(product) {
    return product?.description ?? '';
}
function getPriceTotal(price) {
    return Number(price.unit_amount / 100).toFixed(2);
}

;// CONCATENATED MODULE: ./components/ProductCard.tsx




const ProductCard = ({ price  })=>{
    const { add  } = (0,external_react_.useContext)(CartContext/* default */.Z);
    const addToCart = (p)=>{
        if (add) {
            add(p);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white dark:bg-transparent rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-full h-72 rounded-lg overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: getProductImage(price.product),
                            alt: getProductDescription(price.product),
                            className: "w-full h-full object-center object-cover"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative mt-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 dark:text-white",
                            children: getProductName(price.product)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                "aria-hidden": "true",
                                className: "absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "relative text-lg font-semibold text-white",
                                children: [
                                    getPriceTotal(price),
                                    "zł"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: ()=>addToCart(price)
                    ,
                    className: "relative w-full flex bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                    children: [
                        "Add to bag",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "sr-only",
                            children: [
                                ", ",
                                getProductName(price.product)
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_ProductCard = (ProductCard);

;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
;// CONCATENATED MODULE: external "@headlessui/react"
const react_namespaceObject = require("@headlessui/react");
;// CONCATENATED MODULE: ./components/Header.tsx







const Header = ()=>{
    const { items , remove  } = (0,external_react_.useContext)(CartContext/* default */.Z);
    const removeFromCart = (priceID)=>{
        if (remove) {
            remove(priceID);
        }
    };
    const checkout = async ()=>{
        const lineItems = items?.map((price)=>{
            return {
                price: price.id,
                quantity: 1
            };
        });
        const res = await fetch('/api/checkout', {
            method: 'POST',
            body: JSON.stringify({
                lineItems: lineItems
            })
        });
        const b = await res.json();
        window.location.href = b.session.url;
    // const session = await stripe.checkout.sessions.create({
    //     success_url: 'http://localhost:3000/success',
    //     cancel_url: 'http://localhost:3000/cancel',
    //     line_items: lineItems,
    //     mode: 'payment',
    // });
    // console.log('here')
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "relative bg-white dark:bg-gray-800",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            "aria-label": "Top",
            className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative px-4 pb-14 sm:static sm:px-0 sm:pb-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 flex",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "text-gray-900 dark:text-white",
                                children: "meowrgh.pl"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 flex items-center justify-end",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover, {
                                className: "ml-4 flow-root text-sm lg:relative lg:ml-8 z-50",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover.Button, {
                                        className: "group -m-2 p-2 flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ShoppingBagIcon, {
                                                className: "flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-200",
                                                "aria-hidden": "true"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-200",
                                                children: items?.length
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "items in cart, view bag"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition, {
                                        as: external_react_.Fragment,
                                        enter: "transition ease-out duration-200",
                                        enterFrom: "opacity-0",
                                        enterTo: "opacity-100",
                                        leave: "transition ease-in duration-150",
                                        leaveFrom: "opacity-100",
                                        leaveTo: "opacity-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Popover.Panel, {
                                            className: "absolute top-16 inset-x-0 mt-px pb-6 bg-white dark:bg-gray-700 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 dark:ring-white dark:ring-opacity-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "sr-only",
                                                    children: "Shopping Cart"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "max-w-2xl mx-auto px-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            role: "list",
                                                            className: "divide-y divide-gray-200 dark:divide-gray-600",
                                                            children: items?.map((price)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    className: "py-6 flex",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden dark:border-gray-600",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: getProductImage(price.product),
                                                                                alt: getProductDescription(price.product),
                                                                                className: "w-full h-full object-center object-cover"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "ml-4 flex-1 flex flex-col",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                        className: "flex justify-between text-base font-medium text-gray-900 dark:text-gray-100",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                                children: getProductName(price.product)
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                                className: "ml-4",
                                                                                                children: [
                                                                                                    "$",
                                                                                                    getPriceTotal(price)
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "flex-1 flex items-end justify-between text-sm",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "flex",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                            onClick: (e)=>removeFromCart(price.id)
                                                                                            ,
                                                                                            type: "button",
                                                                                            className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300",
                                                                                            children: "Remove"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, price.id)
                                                            )
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            onClick: checkout,
                                                            className: "w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",
                                                            children: "Checkout"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./pages/index.tsx




const getServerSideProps = async (context)=>{
    const stripe = new (external_stripe_default())(process.env.STRIPE_SECRET ?? '', {
        apiVersion: '2020-08-27'
    });
    const res = await stripe.prices.list({
        limit: 10,
        expand: [
            'data.product'
        ]
    });
    const excludedPriceIds = [
        'price_1Pvg5HHPYZENNFsDyeMNQ931',
        'price_1Pr4HCHPYZENNFsDeGwzO6Jq',
        'price_1Pr1ydHPYZENNFsDDS8ra83f',
        'price_1Pr1WbHPYZENNFsDFrUi4sM2',
        'price_1Pr1LgHPYZENNFsD7kJq64Kd'
    ];
    const prices = res.data.filter((price)=>{
        const product = price.product; // Ensure product is correctly typed
        return price.active && product && !excludedPriceIds.includes(price.id); // Exclude specific price IDs
    });
    return {
        props: {
            prices
        }
    };
};
const Home = ({ prices  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "bg-gray-100 min-h-screen dark:bg-gray-900",
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-5xl mx-auto py-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-between border-b pb-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "font-semibold tracking-wide leading-10 text-xl lg:text-3xl text-gray-900 dark:text-white",
                            children: [
                                " ",
                                "Shop Now"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8",
                        children: prices.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProductCard, {
                                price: p
                            }, p.id)
                        )
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(399));
module.exports = __webpack_exports__;

})();