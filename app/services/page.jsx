"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern technologies.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      " Crafting user-friendly interfaces and engaging user experiences.",
    href: "#",
  },
  {
    num: "03",
    title: "Machine Learning/Deep Learning",
    description:
      "Implementing intelligent systems and predictive models using ML/DL techniques.",
    href: "#",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimizing websites to improve search engine rankings and visibility.",
    href: "#",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-4xl font-extrabold text-outline text-transparent 
                  group-hover:text-outline-hover transition-all duration-500"
                  >
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[22px] font-bold leading-none text-white  group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                {/* description */}
                <h2 className="text-white/60 group-hover:text-accent">
                  {item.description}
                </h2>
                {/* border */}
                <div className="border-b border-white/20  w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
