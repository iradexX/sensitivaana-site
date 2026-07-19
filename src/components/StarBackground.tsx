import Particles from "@tsparticles/react";

export default function StarBackground() {
  return (
    <Particles
      id="stars"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#05010d",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
            },
          },

          color: {
            value: ["#ffffff", "#ffd700"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.2,
              max: 0.7,
            },
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            random: true,
            straight: false,

            outModes: {
              default: "out",
            },
          },

          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}