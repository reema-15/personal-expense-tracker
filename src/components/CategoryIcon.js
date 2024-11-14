import React from "react";
import { motion } from "framer-motion"; // for animation effects
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import HomeIcon from "@mui/icons-material/Home";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

//animation variants for the icons
const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.5,
    },
  },
};

// to display the icons based on the type of expense
const CategoryIcon = ({ category }) => {
  // function to determine which icon to diplay based on the category
  const getIcon = () => {
    switch (category) {
      case "Food":
        return <FastfoodIcon />;
      case "Transportation":
        return <DirectionsBusIcon />;
      case "Housing":
        return <HomeIcon />;
      case "Utilities":
        return <WbIncandescentIcon />;
      case "Entertainment":
        return <TheaterComedyIcon />;
      default:
        return <HelpOutlineIcon />;
    }
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {getIcon()} {/* render the appropriate icon */}
    </motion.div>
  );
};

export default CategoryIcon;
