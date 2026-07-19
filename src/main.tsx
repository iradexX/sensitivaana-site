import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import "./index.css";
import "aos/dist/aos.css";
import App from "./App";

const initializeParticles = async (
  engine: Parameters<typeof loadSlim>[0]
) => {
  await loadSlim(engine);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParticlesProvider init={initializeParticles}>
      <App />
    </ParticlesProvider>
  </StrictMode>
);