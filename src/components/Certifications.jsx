import { FaCertificate } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const CERTIFICATIONS = [
  {
    title: "GFG Nation Skill-Up Program (Top 50)",
    description: (
      <>
        Secured <strong>Rank 41</strong>, placing in the{" "}
        <strong>Top 50 out of 12,500+</strong> participants nationwide.
        Demonstrates consistency, competitive problem-solving, and performance
        under large-scale evaluation.
      </>
    ),
    skills: ["Problem Solving", "Competitive Ranking", "Consistency", "GFG"],
    image: "/GFGSkillUp.jpg",
    pdf: "/certificates/gfg-nation-skill-up.pdf",
  },
  {
    title: "Frontend Battle – IIT Bhubaneswar",
    description: (
      <>
        Certified by <strong>IIT Bhubaneswar</strong> for participation in a
        frontend-focused Vibe Coding competition. Reflects practical UI
        development, logical breakdown, and execution under constraints.
      </>
    ),
    skills: ["Frontend Engineering", "UI Logic", "Vibe Coding", "IIT Bhubaneswar"],
    image: "/FrontendVibeCode.jpg",
    pdf: "/certificates/frontend-battle-iit-bhubaneswar.pdf",
  },
  {
    title: "IIT BHU – COPS Week 25",
    description: (
      <>
        Participated in IIT BHU’s COPS Week, focusing on algorithmic thinking,
        structured problem-solving, and translating logic into correct
        implementations.
      </>
    ),
    skills: ["Algorithms", "Problem Solving", "Logical Thinking", "IIT BHU"],
    image: "/Hack_Img.jpg",
  },
  {
    title: "JavaScript Certification Test",
    description: (
      <>
        Completed a comprehensive JavaScript assessment covering core language
        behavior, async flow, DOM interaction, and modern ES6+ features.
      </>
    ),
    skills: ["JavaScript", "Async", "Closures", "DOM"],
    image: "/js.jpg",
  },
];

const Certifications = () => {
  return (
    <div id="certifications" className="font-medium p-6 mt-20 min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-4">
          <HiSparkles className="text-lg" />
          Skill Validation
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Certifications & Competitive Achievements
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Ranked programs and competitions that reflect applied skills,
          execution, and consistency
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {CERTIFICATIONS.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-gray-600 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content */}
              <div className="p-8">
                <div className="flex gap-4">
                  <FaCertificate className="text-2xl text-gray-300 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 border border-gray-600 rounded-full text-sm text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate */}
              <div className="p-4 flex items-stretch">
                {item.pdf ? (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-xl border border-gray-600"
                    />
                  </a>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-xl border border-gray-600"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
