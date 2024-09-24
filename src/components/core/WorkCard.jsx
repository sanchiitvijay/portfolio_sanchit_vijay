import { CardBody} from "@nextui-org/react";
import WorkItem from "../common/WorkItem";
import SparklesText from "../magicui/sparkles-text";
import { MyCard } from "../common/MyCard";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ProjectModal from "../modals/ProjectModal";

const WorkCard = () => {
  const [offset, setOffset] = useState(0);
  const handlePrevOffset = () => {
    if (offset) {
      setOffset((prev) => prev - 220);
    }
  };
  const handleNextOffset = () => {
    if (offset === 220) {
      setOffset(0);
    } else setOffset((next) => next + 220);
  };

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <MyCard
      color="zinc"
      className="px-4 py-3 w-full flex flex-col gap-10 h-[310px] items-center justify-center"
    >
      <SparklesText text="Projects" />
      <CardBody className="flex flex-col gap-3 overflow-hidden w-[140px] md:w-[460px] md:justify-center">
        <motion.div
          className="flex flex-row gap-3 w-[1200px]"
          animate={{ x: -offset }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <button onClick={() => setIsOpen(true)}>

          <WorkItem name="Confetti" desc="A fully fledged working college confession website using mern stack."  />
          </button>

          {isOpen && (
            <ProjectModal onClose={onClose} />
      )}
          <WorkItem name="Chatting-app" desc="A whatsapp alike chatting app using socket-io with user authorization" />
          <WorkItem name="Phishing" desc="This project aims to detect phishing URLs using a RandomForest classifier." />
          {/* <WorkItem name="name4" desc="desc4" /> */}
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
