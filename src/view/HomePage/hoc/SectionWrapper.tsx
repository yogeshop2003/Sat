import { motion, MotionProps } from "framer-motion";
import { ReactElement, ComponentType } from "react";

import { styles } from "../../HomePage/Roadmap/styless";
import { staggerContainer } from "../../../utils/motion"


interface StarWrapperProps {
  idName: string;
}


type ComponentTypeWithProps = ComponentType;

const StarWrapper = (Component: ComponentTypeWithProps, idName: string) => {
  return function HOC(): ReactElement {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
};

export default StarWrapper;
