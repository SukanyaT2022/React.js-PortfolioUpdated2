import { useRef, useState } from "react";

const teas = [
  {
    id: "green",
    label: "HTML | CSS Javascript",
    description: "Web Apps",
   gradient: "from-[#A8E6E2] via-[#C5E8C0] to-[#F0E6B0]",
    accent: "#6fbf73",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    url: "HtmlPortfolio",
  },
  {
    id: "herbal",
    label: "React.js | Next.js",
    description: "Web Apps",
  gradient: "from-[#F4A96A] via-[#F7C08A] to-[#FDE8C0]",
    accent: "#e57373",
    img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&q=80",
    url: "reactportfolio",
  },
  {
    id: "oolong",
    label: "React Native",
    description: "Cross-platform mobile apps",
   gradient: "from-[#F5C87A] via-[#C8D97A] to-[#8FD68A]",
    accent: "#d4a44c",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&q=80",
    url: "reactnative",
  },
  {
    id: "black",
    label: "SwiftUI",
    description: "IOS mobile apps",
  gradient: "from-[#7DD87A] via-[#3DD9A0] to-[#00D4C8]",
    accent: "#90a4ae",
    url: "swiftportfolio",
  },
];

export default function PortfolioCardComp() {
  const [flipped, setFlipped] = useState(null);
  const navigateTimeoutRef = useRef(null);

  // Short delay so the flip is perceptible, but navigation still feels immediate.
  const NAVIGATE_DELAY_MS = 350;

  const handleClick = (e, item) => {
    e.preventDefault();
    setFlipped(item.id);

    if (navigateTimeoutRef.current) {
      clearTimeout(navigateTimeoutRef.current);
    }

    navigateTimeoutRef.current = setTimeout(() => {
      window.location.href = item.url;
    }, NAVIGATE_DELAY_MS);
  };

  return (
    <div
      style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
      className="xl:min-h-screen bg-[#faf8f4] flex flex-col items-center justify-center py-20 px-6"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1
          className="text-5xl font-light text-[#1a1a1a] tracking-wide"
          style={{ letterSpacing: "0.08em" }}
        >
          Portfolio
        </h1>
        <div className="mt-4 mx-auto w-16 h-[2px] bg-gradient-to-b from-[#7DD87A] via-[#3DD9A0] to-[#00D4C8]" />
      </div>

      {/* Circles */}
      <div className="grid grid-cols-2 xl:grid-cols-4 justify-center gap-6 sm:gap-8 lg:gap-12">
        {teas.map((item) => {
          const isFlipped = flipped === item.id;
          return (
            <a
              href={item.url}
              key={item.id}
              className="flex flex-col items-center cursor-pointer no-underline"
              onClick={(e) => handleClick(e, item)}
              style={{ perspective: "800px" }}
            >
              {/* Flip container */}
              <div
                className="circle-card"
                style={{
                  position: "relative",
                  transformStyle: "preserve-3d",
                  // Animate only the clicked/active circle.
                  // Other circles snap back immediately so it doesn't look like multiple flip at once.
                  transition: isFlipped
                    ? "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                    : "transform 0s linear",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span
                      className="text-white font-semibold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center px-3 sm:px-4"
                      style={{
                        fontFamily: "'Trebuchet MS', sans-serif",
                        textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                      }}
                    >
                      {item.label}               
                    </span>
                           <span
                      className="text-white text-[6px] sm:text-xs tracking-wide text-center"
                      style={{
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </span>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-tl ${item.gradient} opacity-90`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 gap-2">
                    <span
                      className="text-white font-semibold text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase text-center"
                      style={{
                        fontFamily: "'Trebuchet MS', sans-serif",
                        textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                      }}
                    >
                      {item.label}
                    </span>
                    <div
                      className="rounded-full"
                      style={{
                        width: 20,
                        height: 1.5,
                        backgroundColor: item.accent,
                        opacity: 0.8,
                      }}
                    />
                    <span
                      className="text-white text-[10px] sm:text-xs tracking-wide text-center"
                      style={{
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </span>
                   
                  </div>
                </div>
              </div>

              {/* Accent dot */}
              <div
                className="mt-3 sm:mt-4 rounded-full"
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: item.accent,
                  opacity: isFlipped ? 1 : 0.3,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  transform: isFlipped ? "scale(1.5)" : "scale(1)",
                }}
              />
            </a>
          );
        })}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&display=swap');

        .circle-card {
          width: 145px;
          height: 145px;
        }

        @media (max-width: 360px) {
          .circle-card {
            width: 125px;
            height: 125px;
          }
        }

        @media (min-width: 640px) {
          .circle-card {
            width: 180px;
            height: 180px;
          }
        }

        @media (min-width: 1024px) {
          .circle-card {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}