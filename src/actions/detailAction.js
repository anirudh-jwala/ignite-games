import axios from "axios";

import { gameDetailsUrl, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  // Fetch using axios
  const detailData = await axios.get(gameDetailsUrl(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenShotData.data,
    },
  });
};
