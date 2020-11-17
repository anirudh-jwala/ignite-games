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
import releaseDate from "../img/clock.svg";

const Game = ({ name, released, image, id, genres }) => {
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
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={getSmallImage(image, 640)}
          alt={name}
        />
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <ReleaseDate>
          <img src={releaseDate} alt="Release date" /> <p>{released}</p>
        </ReleaseDate>
        <Badge>
          {genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </Badge>
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

const ReleaseDate = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.2rem;
  }
`;

const Badge = styled(motion.div)`
  display: flex;
  background: #ff7676;
  text-align: center;
  p {
    color: white;
    width: 100%;
  }
`;

export default Game;
