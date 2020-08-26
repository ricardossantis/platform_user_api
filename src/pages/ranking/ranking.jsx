import React from "react";

import { BackGround, BoxRanking, RankTag } from "./ranking.js";

import RankingImg from "../../assets/images/Frame 2.svg";
const Ranking = () => {
  return (
    <BackGround>
      <img src={RankingImg} style={{ width: "100%", height: "100%" }}></img>
    </BackGround>
  );
};

export default Ranking;
