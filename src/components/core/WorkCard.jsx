import { CardBody} from "@nextui-org/react";
import WorkItem from "../common/WorkItem";
import SparklesText from "../magicui/sparkles-text";
import { MyCard } from "../common/MyCard";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { project } from "../constants/project";

const WorkCard = () => {
  const [offset, setOffset] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 834);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevOffset = () => {
    let sizing = isMobile ? 80 : 220;
    if (offset) {
      setOffset((prev) => prev - sizing);
    }
  };
  const handleNextOffset = () => {
    let sizing = isMobile ? 80 : 220;
    if (offset === sizing) {
      setOffset(0);
    } else setOffset((next) => next + sizing);
  };


  return (
    <MyCard
      color="zinc"
      className="md:px-4 py-3 w-full flex flex-col gap-10 md:h-[310px] items-center justify-center"
    >
      <SparklesText text="Projects" />
      <CardBody className="flex flex-col gap-3 overflow-hidden md:w-[480px] md:justify-center">
        <motion.div
          className="flex flex-row gap-3 md:w-[1200px]"
          animate={{ x: -offset }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {
            project?.map((item, index) => (
              <WorkItem key={index} {...item} />
            ))
          }
        </motion.div>
        <div className="flex flex-row justify-between">
          <Icon
            icon="icon-park-solid:left-c"
            style={{ color: "#5e5e5e" }}
            width={26}
            className="cursor-pointer"
            onClick={handlePrevOffset}
          />
          <Icon
            icon="icon-park-solid:right-c"
            style={{ color: "#5e5e5e" }}
            width={26}
            className="cursor-pointer"
            onClick={handleNextOffset}
          />
        </div>
      </CardBody>
    </MyCard>
  );
};

export default WorkCard;
