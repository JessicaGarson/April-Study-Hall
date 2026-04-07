import { Shader, Aurora } from "shaders/react";

export default function App() {
  return (
    <div style={{ width: "180vw", height: "106vh", background: "#301934" }}>
      <Shader>
        <Aurora
          colorA="#AA336A"
          colorB="#22ee88"
          colorC="#1694e8"
          colorSpace="oklab"
          balance={4}
          intensity={800}
          curtainCount={2}
          center={{"x":0.8,"y":0}}
          speed={67}
          waviness={1}
          rayDensity={99}
          height={20}
          seed={9}
        />
      </Shader>
    </div>
  );
}