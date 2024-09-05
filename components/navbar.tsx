import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { useRouter } from "next/router";

import {Divider} from "@nextui-org/divider";

import {FunctionComponent, useContext} from "react";
import CartContext from "./context/CartContext";

import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import {getPriceTotal, getProductDescription, getProductImage, getProductName} from "../utils/computed";
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

// export const Navbar = () => {
const Navbar: FunctionComponent = () => {
  const {items, remove} = useContext(CartContext);
  const router = useRouter(); // Get the router object

  const removeFromCart = (priceID: string) => {
      if(remove) {
          remove(priceID)
      }
  }

  const checkout = async () => {
      const lineItems = items?.map(price => ({
          price: price.id,
          quantity: 1
      }));

      const res = await fetch('/api/checkout', {
          method: 'POST',
          body: JSON.stringify({
              lineItems,
              shipping_address_collection: {
                  allowed_countries: ['US', 'CA'], // Specify allowed countries
              },
          }),
          headers: {
              'Content-Type': 'application/json', // Ensure the content type is set
          },
      });

      const b = await res.json();
      window.location.href = b.session.url;
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">meowrgh.pl</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Support
          </Button>
        </NavbarItem>
        {router.pathname === '/store' && (
          <NavbarItem>
            <Popover>
              <PopoverTrigger>
                <Button
                  isIconOnly
                  variant="light"
                  className="text-sm font-normal text-default-600"
                >
                  <ShoppingBagIcon className="h-6 w-6" />
                  <span className="ml-2">{items?.length}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="absolute top-16 inset-x-0 mt-px pb-6 bg-white dark:bg-gray-700 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                <div className="p-5 w-full">
                  <h2 className="">Shopping Cart</h2>
                  <Divider className="my-4" />
                  <ul className="divide-y divide-gray-200">
                    {items?.map((price) => (
                      <li key={price.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={getProductImage(price.product)}
                            alt={getProductDescription(price.product)}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{getProductName(price.product)}</h3>
                              <p className="ml-4">{getPriceTotal(price)}zł</p>
                            </div>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <Button
                              size="sm"
                              color="danger"
                              variant="light"
                              onClick={() => removeFromCart(price.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-4"
                    color="primary"
                    onClick={checkout}
                    // @ts-ignore
                    disabled={items.length === 0}
                  >
                    Checkout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        {router.pathname === '/store' && (
          <NavbarItem>
            <Popover>
              <PopoverTrigger>
                <Button
                  isIconOnly
                  variant="light"
                  className="text-sm font-normal text-default-600"
                >
                  <ShoppingBagIcon className="h-6 w-6" />
                  <span className="ml-2">{items?.length}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="absolute top-16 inset-x-0 mt-px pb-6 bg-white dark:bg-gray-700 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                <div className="p-5 w-full">
                  <h2 className="">Shopping Cart</h2>
                  <Divider className="my-4" />
                  <ul className="divide-y divide-gray-200">
                    {items?.map((price) => (
                      <li key={price.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={getProductImage(price.product)}
                            alt={getProductDescription(price.product)}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{getProductName(price.product)}</h3>
                              <p className="ml-4">{getPriceTotal(price)}zł</p>
                            </div>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <Button
                              size="sm"
                              color="danger"
                              variant="light"
                              onClick={() => removeFromCart(price.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-4"
                    color="primary"
                    onClick={checkout}
                    // @ts-ignore
                    disabled={items.length === 0}
                  >
                    Checkout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>
        )}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;