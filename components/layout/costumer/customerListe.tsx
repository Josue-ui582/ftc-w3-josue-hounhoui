import React from "react";
import { Carousel } from "antd";
import { costumers } from "@/data/costumer";
import CustomerCard from "./customerCard";

const CustomerList: React.FC = () => {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="md:w-[90%] w-[98%]">
        <p className="font-bold text-xl mb-4">Our lovely customers</p>
        <Carousel
          autoplay={{dotDuration : true}}
          autoplaySpeed={5000}
          dots={true}
          infinite
          slidesToShow={4}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768, // mobile
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {costumers.map((customer) => (
            <div key={customer.id} className="px-2">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerList;