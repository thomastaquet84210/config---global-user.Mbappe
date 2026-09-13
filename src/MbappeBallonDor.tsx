import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { Background } from "./components/Background";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2RealMadrid } from "./scenes/Scene2RealMadrid";
import { Scene3WorldCup } from "./scenes/Scene3WorldCup";
import { Scene4LaLiga } from "./scenes/Scene4LaLiga";
import { Scene5ChampionsLeague } from "./scenes/Scene5ChampionsLeague";
import { Scene6Convergence } from "./scenes/Scene6Convergence";
import { Scene7BallonDor } from "./scenes/Scene7BallonDor";

// Scene timeline, matching the narration's beats 1:1 (see mbappe_BO.srt):
//   0.0s –  6.0s  Scene1Hook            (hook, no claim stated yet)
//   6.0s – 11.0s  Scene2RealMadrid      ("il joue au Real Madrid...")
//  11.0s – 14.0s  Scene3WorldCup        ("meilleur buteur de la Coupe du monde")
//  14.0s – 21.0s  Scene4LaLiga          ("meilleur buteur de la Liga... derrière Barcelone")
//  21.0s – 25.0s  Scene5ChampionsLeague ("meilleur buteur... quart de finale")
//  25.0s – 35.0s  Scene6Convergence     ("le joueur le plus performant... toutes les compétitions")
//  35.0s – 38.0s  Scene7BallonDor       ("il doit gagner le Ballon d'or")
export const MbappeBallonDor: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0f1c" }}>
      <Background />
      <Audio src={staticFile("audio/narration.mp4")} />

      <Sequence from={0} durationInFrames={180} name="Hook">
        <Scene1Hook />
      </Sequence>
      <Sequence from={180} durationInFrames={150} name="Real Madrid">
        <Scene2RealMadrid />
      </Sequence>
      <Sequence from={330} durationInFrames={90} name="World Cup">
        <Scene3WorldCup />
      </Sequence>
      <Sequence from={420} durationInFrames={210} name="La Liga">
        <Scene4LaLiga />
      </Sequence>
      <Sequence from={630} durationInFrames={120} name="Champions League">
        <Scene5ChampionsLeague />
      </Sequence>
      <Sequence from={750} durationInFrames={300} name="Convergence">
        <Scene6Convergence />
      </Sequence>
      <Sequence from={1050} durationInFrames={90} name="Ballon d'Or">
        <Scene7BallonDor />
      </Sequence>
    </AbsoluteFill>
  );
};
