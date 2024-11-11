import { Section } from "@/components";
import { Button } from "../ui/button";

export default function HeroSection({}: Props) {
  return (
    <Section className="relative min-h-screen bg-slate-50 md:py-0">
      {/* Large Decorative Circle */}
      <svg
        className="absolute right-0 top-0 w-[600px] h-[600px]"
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient
            id="circleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#circleGradient)">
          <animate
            attributeName="r"
            values="80;85;80"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Grid Pattern */}
      <svg
        className="absolute left-20 bottom-20 w-[400px] h-[400px] opacity-30"
        viewBox="0 0 100 100"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={i}>
            <line
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="#6366f1"
              strokeWidth="0.2"
            />
            <line
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="#6366f1"
              strokeWidth="0.2"
            />
          </g>
        ))}
      </svg>

      {/* Abstract Shape */}
      <svg
        className="absolute left-1/2 top-20 w-[300px] h-[300px] -translate-x-1/2 opacity-20"
        viewBox="0 0 100 100"
      >
        <path
          d="M20,50 Q50,20 80,50 T20,50"
          fill="none"
          stroke="#6366f1"
          strokeWidth="1"
        >
          <animate
            attributeName="d"
            values="
              M20,50 Q50,20 80,50 T20,50;
              M20,50 Q50,80 80,50 T20,50;
              M20,50 Q50,20 80,50 T20,50
            "
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-cyan-600 font-semibold text-lg mb-6 block">
            Welcome to Wisdom School
          </span>

          <h1 className="text-6xl md:text-6xl font-bold leading-tight mb-8 uppercase">
            Learn{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-cyan-600">Skills</span>
              {/* Underline SVG */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 z-0"
                viewBox="0 0 100 20"
              >
                <path
                  d="M0,10 Q30,5 50,10 T100,10"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="3"
                >
                  <animate
                    attributeName="d"
                    values="
                      M0,10 Q30,5 50,10 T100,10;
                      M0,10 Q30,15 50,10 T100,10;
                      M0,10 Q30,5 50,10 T100,10
                    "
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </span>{" "}
            that{" "}
            <span className="text-cyan-600">
              <br />
              really
            </span>{" "}
            matters in life
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Wisdom School is the world&lsquo;s only educational platform that teaches
            useful subjects
          </p>

          <Button
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl"
          >
            Explore Courses
          </Button>
        </div>
      </div>

      {/* Bottom Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#818cf8"
          fillOpacity="0.1"
          d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            values="
              M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,160L48,170C96,180,192,200,288,192C384,184,480,148,576,154.7C672,161,768,211,864,218.7C960,226,1056,192,1152,181.3C1248,171,1344,184,1392,190.7L1440,197L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Section>
  );
}
