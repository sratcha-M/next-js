import React from "react";
import styled from "styled-components";
const { motion } = require("framer-motion");
import { useScroll, useWindowScroll } from "react-use";

type Props = {};

const HomePage = (props: Props) => {
  const scrollRef = React.useRef(null);
//   const { x, y } = useScroll(scrollRef);
  const {x, y} = useWindowScroll();

  console.log('scrollRef :>> ', scrollRef);
  console.log("x,y :>> ", x, y);
  const list = {
    hidden: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };
  return (
    <div style={{ height: "3000px", width: "100%" }} ref={scrollRef}>
      <Title>test</Title>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ width: 100, height: 100, background: "red" }}
      />
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        animate={{ rotate: 160 }}
        transition={{ duration: 3 }}
        style={{ width: 50, height: 50, background: "red" }}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ width: 100, height: 100, background: "red" }}
      />
      <motion.ul variants={list} animate="hidden">
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
      <div>{x + "" + y}</div>
    </div>
  );
};

export default HomePage;

const Title = styled.h1`
  color: red;
`;
