import Image from "next/image";
import { motion } from "framer-motion";
export default function SkillDiv(props: any) {
  const skill = props;
  return (
    <motion.div className="flex my-2 items-center" whileHover={{ scale: 1.1 }}>
      <Image src={skill.src} alt={skill.alt} width={"50"} height={"50"} />
      <div className="w-44 h-6 bg-light-black ml-3">
        <motion.div
          whileInView={{
            width: skill.level,
            transition: {
              duration: 1,
            },
          }}
          initial={{ width: 0 }}
          className="level"
        ></motion.div>
      </div>
    </motion.div>
  );
}
