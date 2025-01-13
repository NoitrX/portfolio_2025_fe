"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { convertDate } from "@/types/helper";

interface CardProps {
  i: number;
  project_name: string;
  services: string;
  thumbnail: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  date_project: string;
}
const Card = ({
  i,
  project_name,
  services,
  thumbnail,
  progress,
  range,
  targetScale,
  date_project,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        className={`${styles.card} shadow `}
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundColor: "#fff",
        }}
      >
        <div className={styles.body}>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/public/storage/${thumbnail}`}
                alt="image"
              />
            </motion.div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between">
              <div>
                <h4 className="font-bold text-xl">{project_name}</h4>
                <p className="text-sm">{services}</p>
              </div>
              <div className="text-sm font-medium">
                {convertDate(date_project)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
