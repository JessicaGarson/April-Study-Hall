import { Shader, Aurora } from "shaders/react";

export default function App() {
  return (
    <div style={{ width: "180vw", height: "100vh", background: "#301934" }}>
      <Shader>
        <Aurora
          colorA="#AA336A"
          colorB="#22ee88"
          colorC="#1694e8"
          colorSpace="hsl"
          balance={20}
          intensity={160}
          curtainCount={2}
          center={{"x":0.5,"y":0}}
          speed={60}
          waviness={200}
          rayDensity={11}
          height={200}
          seed={9}
        />
      </Shader>
    </div>
  );
}
