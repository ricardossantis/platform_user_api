import React from "react";

import { BackGround, BoxRanking, RankTag } from "./ranking.js";

const Ranking = () => {
  return (
    <BackGround>
      <BoxRanking>
        <BoxRanking style={{ background: "red", width: "95%", height: "90%" }}>
          <RankTag></RankTag>
          <RankTag></RankTag>
          <RankTag></RankTag>
          <RankTag></RankTag>
          <RankTag></RankTag>
          <RankTag></RankTag>
          <RankTag></RankTag>
          <RankTag></RankTag>
        </BoxRanking>
      </BoxRanking>
    </BackGround>
  );
};

export default Ranking;
