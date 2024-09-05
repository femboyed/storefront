import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

import '../styles/globals.css';
import CartContext, { CartContextProps } from "../components/context/CartContext";
import { useEffect, useState } from "react";

// @ts-ignore
import _ from "lodash"; 
import { Stripe } from "stripe";

function MyApp({ Component, pageProps }: AppProps) {
    const [items, setItems] = useState<Stripe.Price[]>([]);

    const remove = (priceID: string) => {
      // @ts-ignore
        const updatedItems = _.reject(items, item => item.id === priceID);
        setItems(updatedItems);
    };

    const add = (product: Stripe.Price) => {
        const updatedItems = _.union(items, [product]);
        setItems(updatedItems);
        console.log(product.id);
    };

    const cartContext: CartContextProps = {
        items,
        add,
        remove
    };

    return (
        <CartContext.Provider value={cartContext}>
            <Component {...pageProps} />
        </CartContext.Provider>
    );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};

export default MyApp;
