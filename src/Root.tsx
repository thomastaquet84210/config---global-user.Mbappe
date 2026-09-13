import "./index.css";
import { Composition } from "remotion";
import { MbappeBallonDor } from "./MbappeBallonDor";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MbappeBallonDor"
        component={MbappeBallonDor}
        durationInFrames={1140}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
