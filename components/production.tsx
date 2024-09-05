import {FunctionComponent, useContext} from "react";
import Stripe from "stripe";
import CartContext from "./context/CartContext";
import {getPriceTotal, getProductDescription, getProductImage, getProductName} from "../utils/computed";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";

type CardProps = {
    price: Stripe.Price
}

const ProductCard: FunctionComponent<CardProps> = ({ price }) => {
    const { add } = useContext(CartContext);

    const addToCart = (p: Stripe.Price) => {
        if (add) {
            add(p);
        }
    };

    console.log(price.id);

    return (
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">In stock!</p>
          <h4 className="text-white font-medium text-2xl">{getProductName(price.product)}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Product Image"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={getProductImage(price.product)}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">{getPriceTotal(price)}zł</p>
          </div>
          <Button className="text-tiny" onClick={() => addToCart(price)} color="primary" radius="full" size="sm">
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    )
    // return (
    //     <div className="bg-white dark:bg-transparent rounded-lg shadow-md">
    //         <div className="relative">
    //             <div className="relative w-full h-72 rounded-lg overflow-hidden">
    //                 <img
    //                     src={getProductImage(price.product)}
    //                     alt={getProductDescription(price.product)}
    //                     className="w-full h-full object-center object-cover"
    //                 />
    //             </div>
    //             <div className="relative mt-4">
    //                 <h3 className="text-lg font-medium text-gray-900 dark:text-white">
    //                     {getProductName(price.product)}
    //                 </h3>
    //             </div>
    //             <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
    //                 <div
    //                     aria-hidden="true"
    //                     className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
    //                 />
    //                 <p className="relative text-lg font-semibold text-white">
    //                     {getPriceTotal(price)}zł
    //                 </p>
    //             </div>
    //         </div>
    //         <div className="mt-6">
    //             <button
    //                 onClick={() => addToCart(price)}
    //                 className="relative w-full flex bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
    //                 Add to bag<span className="sr-only">, {getProductName(price.product)}</span>
    //             </button>
    //         </div>
    //     </div>
    // );
};

export default ProductCard;
