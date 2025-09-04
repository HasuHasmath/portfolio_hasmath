import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="full">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-2">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl mb-2">Software Engineer</span>
            <h1 className="h1">
              Hello I am <br />
              <span className="text-accent">Mohamed Hasmath</span>
            </h1>
            <p className="max-w-[500px] mt-2 mb-9 text-white/80">
              I am excel at crafting elegant digital experience and I am
              proficient in various programming language and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="md"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-l" />
              </Button>
              <div className="mb-8 xl:mb-3">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>{" "}
      <Stats />
    </section>
  );
};

export default Home;
