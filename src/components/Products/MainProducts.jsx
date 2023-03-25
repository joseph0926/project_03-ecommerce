import React from "react";
import Product from "./Product";
import { Tab } from "@headlessui/react";

const MainProducts = ({ products }) => {
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const showProducts = (categoryIdx) => {
    return products
      .filter((product) => product.category === categories[categoryIdx])
      .map((product) => <Product product={product} key={product.id} />);
  };

  return (
    <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
      <div className="space-y-10 py-16">
        <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
          Products
        </h1>

        <Tab.Group>
          <Tab.List className="flex justify-center">
            {categories.map((category) => (
              <Tab
                key={category}
                id={category}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base uppercase ${
                    selected
                      ? "borderGradient bg-[#35383C] text-white"
                      : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
            <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default MainProducts;
