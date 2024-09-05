import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Image} from "@nextui-org/image";
import DefaultLayout from "@/layouts/default";

import Stripe from "stripe";
import type {GetServerSideProps, NextPage} from 'next'

import ProductCard from "@/components/production";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2024-06-20',
  });

  const res = await stripe.prices.list({
      limit: 10,
      expand: ['data.product']
  });

  const excludedPriceIds = [
      'price_1Pvg5HHPYZENNFsDyeMNQ931',
      'price_1Pr4HCHPYZENNFsDeGwzO6Jq',
      'price_1Pr1ydHPYZENNFsDDS8ra83f',
      'price_1Pr1WbHPYZENNFsDFrUi4sM2',
      'price_1Pr1LgHPYZENNFsD7kJq64Kd',
      'price_1PvgnoHPYZENNFsDirdKacOk'
  ];

  const excludedProductIds = [
    'prod_QnHMQmRu0bm0Tu'
  ]

  const prices = res.data.filter(price => {
      const product = price.product as Stripe.Product; // Ensure product is correctly typed
      return price.active && product && !excludedProductIds.includes(price.id) && !excludedPriceIds.includes(price.id); // Exclude specific price IDs
  });

  return {
      props: {
          prices
      },
  }
}

type Props = {
  prices: Stripe.Price[]
}

const Store: NextPage<Props> = ({ prices }) => {
  return (
    <DefaultLayout>
        <div className="inline-block max-w-xl text-center justify-center">
          {
                        prices.map(p => (
                            <ProductCard key={p.id} price={p}/>
                        ))
                    }
        </div>
    </DefaultLayout>
  );
}

export default Store;
