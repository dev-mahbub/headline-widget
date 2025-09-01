import { motion } from "framer-motion";

interface Props {
  text: string;
  settings: {
    fontSize: number;
    fontFamily: string;
    fontWeight: string;
    gradient: boolean;
    gradientDirection: string;
    gradientColors: string[];
  };
}

export default function HeadlineWidget({ text, settings }: Props) {
  const {
    fontSize,
    fontFamily,
    fontWeight,
    gradient,
    gradientDirection,
    gradientColors,
  } = settings;

  const style: React.CSSProperties = {
    fontSize: `${fontSize}px`,
    fontFamily,
    fontWeight,
    background: gradient
      ? `linear-gradient(${gradientDirection}, ${gradientColors[0]}, ${gradientColors[1]})`
      : "none",
    WebkitBackgroundClip: gradient ? "text" : undefined,
    WebkitTextFillColor: gradient ? "transparent" : "black",
  };

  return (
    <motion.h1
      className="text-center font-bold"
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, textShadow: "0px 0px 20px rgba(0,0,0,0.3)" }}
    >
      {text}
    </motion.h1>
  );
}
