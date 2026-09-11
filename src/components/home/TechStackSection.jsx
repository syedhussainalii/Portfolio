import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaGoogle,
  FaNodeJs,
  FaReact,
  FaPalette,
} from "react-icons/fa6";
import {
  SiAndroidstudio,
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNpm,
  SiPostman,
  SiPostgresql,
  SiReactrouter,
  SiRedux,
  SiCss,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  TbApi,
  TbBrandVisualStudio,
  TbBrandReactNative,
  TbComponents,
  TbLayoutBoardSplit,
  TbDeviceDesktopCode,
  TbSparkles,
  TbSquareRoundedLetterX,
} from "react-icons/tb";
import {
  techStackFilters,
  techStackIntro,
  techStackSkills,
} from "../../data/techStack";
import TechCard from "../cards/TechCard";
import { Reveal, RevealChild } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const ALL_FILTER = { id: "all", label: "All" };
const ALL_TECH_LIMIT = 9;

const techIconMap = {
  react: FaReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  reactRouter: SiReactrouter,
  hooks: TbComponents,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  materialUi: SiMui,
  jquery: SiJquery,
  responsive: TbDeviceDesktopCode,
  nodejs: FaNodeJs,
  express: SiExpress,
  api: TbApi,
  reactNative: TbBrandReactNative,
  flutter: SiFlutter,
  androidStudio: SiAndroidstudio,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  figma: SiFigma,
  xd: TbSquareRoundedLetterX,
  illustrator: FaPalette,
  wireframing: TbLayoutBoardSplit,
  prototyping: TbSparkles,
  google: FaGoogle,
  git: SiGit,
  github: FaGithub,
  vscode: TbBrandVisualStudio,
  npm: SiNpm,
  vite: SiVite,
  postman: SiPostman,
  googleStitch: FaGoogle,
};

function TechStackSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [displayFilter, setDisplayFilter] = useState("all");
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState("idle");
  const transitionTimerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    },
    [],
  );

  const filterCounts = useMemo(() => {
    const counts = [...techStackFilters, ALL_FILTER].reduce((accumulator, filter) => {
      accumulator[filter.id] = 0;
      return accumulator;
    }, {});

    counts.all = techStackSkills.length;

    techStackSkills.forEach((skill) => {
      skill.categories.forEach((category) => {
        if (counts[category] !== undefined) {
          counts[category] += 1;
        }
      });
    });

    return counts;
  }, []);

  const visibleSkills = useMemo(() => {
    if (displayFilter === ALL_FILTER.id) {
      return techStackSkills;
    }

    return techStackSkills.filter((skill) => skill.categories.includes(displayFilter));
  }, [displayFilter]);

  const renderedSkills = useMemo(
    () =>
      displayFilter === ALL_FILTER.id && !isAllExpanded
        ? visibleSkills.slice(0, ALL_TECH_LIMIT)
        : visibleSkills,
    [displayFilter, isAllExpanded, visibleSkills],
  );

  const handleFilterChange = (nextFilter) => {
    if (nextFilter === activeFilter) {
      return;
    }

    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
    }

    setActiveFilter(nextFilter);
    setIsAllExpanded(false);
    setTransitionPhase("leaving");

    transitionTimerRef.current = window.setTimeout(() => {
      setDisplayFilter(nextFilter);
      setTransitionPhase("entering");

      window.requestAnimationFrame(() => {
        setTransitionPhase("idle");
      });
    }, 300);
  };

  return (
    <section
      ref={sectionRef}
      className={`page-section tech-stack-section${isVisible ? " is-visible" : ""}`}
      id="tech-stack"
      aria-labelledby="tech-stack-title"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content tech-stack-content">
              <SectionHeading title={techStackIntro.title} subtitle={techStackIntro.subtitle} className="page-heading tech-stack-heading" headingId="tech-stack-title" />

              <Reveal
                className="filter-tabs"
                aria-label="Tech stack filters"
                role="tablist"
                cascade
                style={{ width: "auto" }}
              >
                {[ALL_FILTER, ...techStackFilters].map((filter) => {
                  const isActive = activeFilter === filter.id;

                  return (
                    <RevealChild key={filter.id} y={12}>
                    <motion.button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-pressed={isActive}
                      className={`filter-tab${isActive ? " active" : ""}`}
                      onClick={() => handleFilterChange(filter.id)}
                      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    >
                      {filter.label}
                      <span className="filter-tab-badge">
                        {filterCounts[filter.id]}
                      </span>
                    </motion.button>
                    </RevealChild>
                  );
                })}
              </Reveal>

              <div className="tech-stack-results">
                <div
                  className={`tech-grid tech-grid--filtered${transitionPhase !== "idle" ? ` is-${transitionPhase}` : ""}`}
                >
                  {renderedSkills.map((skill, skillIndex) => {
                    const icon = techIconMap[skill.iconKey];
                    const activeCategoryTitle =
                      displayFilter === ALL_FILTER.id
                        ? "All Technologies"
                        : techStackFilters.find(
                            (filter) => filter.id === displayFilter,
                          )?.label ?? "Tech Stack";

                    return (
                      <TechCard
                        key={skill.name}
                        icon={icon}
                        name={skill.name}
                        categoryTitle={activeCategoryTitle}
                        animationState={transitionPhase}
                        isVisible={isVisible}
                        delay={skillIndex * 12}
                      />
                    );
                  })}
                </div>

                {displayFilter === ALL_FILTER.id && visibleSkills.length > ALL_TECH_LIMIT ? (
                  <div className="tech-stack-toggle">
                    <button
                      type="button"
                      className="filter-tab"
                      aria-expanded={isAllExpanded}
                      onClick={() => setIsAllExpanded((expanded) => !expanded)}
                    >
                      {isAllExpanded ? "View Less" : "View More"}
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
