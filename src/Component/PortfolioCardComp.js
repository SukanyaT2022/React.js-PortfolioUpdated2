import { useState } from "react";

const teas = [
  {
    id: "green",
    label: "HTML |  CSS   Javascript",
    description: "Web Apps",
    gradient: "from-[#3d5a2e] via-[#5a7a3a] to-[#2d4a1e]",
    accent: "#8bc34a",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
  },
  {
    id: "herbal",
    label: "React.js | Next.js",
    description: "Web Apps",
    gradient: "from-[#6b1a1a] via-[#8b2a2a] to-[#4a0f0f]",
    accent: "#e57373",
    img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&q=80",
  },
  {
    id: "oolong",
    label: "React Native",
    description: "Cross-platform mobile apps ",
    gradient: "from-[#5a4020] via-[#7a5a30] to-[#3a2a10]",
    accent: "#d4a44c",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&q=80",
  },
  {
    id: "black",
    label: "SwiftUI",
    description: "IOS mobile apps",
    gradient: "from-[#1a1a1a] via-[#2d2d2d] to-[#0d0d0d]",
    accent: "#a0a0a0",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80",
  },
];

export default function PortfolioCardComp() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
      className="min-h-screen bg-[#faf8f4] flex flex-col items-center justify-center py-20 px-6"
    >
      {/* Header */}
      <div className="text-center mb-16">
        {/* <p className="text-xs tracking-[0.4em] text-[#999] uppercase mb-3">
          Curated Collection
        </p> */}
        <h1
          className="text-5xl font-light text-[#1a1a1a] tracking-wide"
          style={{ letterSpacing: "0.08em" }}
        >
       Portfolio
        </h1>
        <div className="mt-4 mx-auto w-12 h-px bg-[#c8a96e]" />
      </div>

      {/* Tea Circles */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
        {teas.map((tea) => {
          const isHovered = hovered === tea.id;
          return (
            <div
              key={tea.id}
              className="flex flex-col items-center cursor-pointer group"
              onMouseEnter={() => setHovered(tea.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Circle */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: 220,
                  height: 220,
                  transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
                  transform: isHovered ? "scale(1.06)" : "scale(1)",
                  boxShadow: isHovered
                    ? `0 20px 60px rgba(0,0,0,0.22), 0 0 0 3px ${tea.accent}`
                    : "0 8px 30px rgba(0,0,0,0.12)",
                }}
              >
                {/* Background image */}
                <img
                  src={tea.img}
                  alt={tea.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transition: "transform 0.6s ease",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                  }}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tea.gradient}`}
                  style={{
                    opacity: isHovered ? 0.55 : 0.42,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="text-white font-semibold text-sm tracking-[0.2em] uppercase text-center px-4"
                    style={{
                      fontFamily: "'Trebuchet MS', sans-serif",
                      textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                      transition: "transform 0.3s ease, opacity 0.3s ease",
                      transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                    }}
                  >
                    {tea.label}
                  </span>

                  {/* Description on hover */}
                  <span
                    className="text-white text-xs tracking-wide text-center px-6 mt-2"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontStyle: "italic",
                      textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
                    }}
                  >
                    {tea.description}
                  </span>
                </div>

                {/* Accent ring pulse */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `2px solid ${tea.accent}`,
                      opacity: 0.6,
                      animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                    }}
                  />
                )}
              </div>

              {/* Accent dot */}
              <div
                className="mt-4 rounded-full"
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: tea.accent,
                  opacity: isHovered ? 1 : 0.3,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  transform: isHovered ? "scale(1.5)" : "scale(1)",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Footer tagline */}
     

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes ping {
          75%, 100% { transform: scale(1.15); opacity: 0; }
        }
      `}</style>
    </div>
  );
}