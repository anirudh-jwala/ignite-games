import React from "react";

// Router
import { Link } from "react-router-dom";

// Styling
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { popUp } from "../animations";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// Util -> for images
import { getSmallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  // Load detail
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={getSmallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
