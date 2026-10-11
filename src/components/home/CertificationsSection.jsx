import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TbCertificate } from "react-icons/tb";
import {
  certificationIntro,
  certificationItems,
} from "../../data/certifications";
import { Reveal, RevealChild } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function CertificationsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("Meta");

  const filters = [
    {
      label: "Meta",
      value: "Meta",
    },
    {
      label: "LinkedIn Learning",
      value: "LinkedIn",
    },
  ];
  const filteredCertificates = certificationItems.filter(
    (item) => item.category === activeFilter,
  );

  return (
    <section
      className="page-section"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content">
              {/* Heading */}
              <SectionHeading title={certificationIntro.title} subtitle={certificationIntro.subtitle} className="page-heading" headingId="certifications-title" />

              {/* Filter */}
              {/* Filter */}
              <Reveal
                className="filter-tabs"
                style={{ marginBottom: "55px" }}
                role="tablist"
                aria-label="Certificate filters"
                cascade
              >
                {filters.map((filter) => {
                  const total = certificationItems.filter(
                    (item) => item.category === filter.value,
                  ).length;

                  return (
                    <RevealChild key={filter.value} y={12}>
                    <motion.button
                      type="button"
                      role="tab"
                      aria-selected={activeFilter === filter.value}
                      aria-pressed={activeFilter === filter.value}
                      className={`filter-tab ${
                        activeFilter === filter.value ? "active" : ""
                      }`}
                      onClick={() => setActiveFilter(filter.value)}
                      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    >
                      {filter.label}

                      <span className="filter-tab-badge">{total}</span>
                    </motion.button>
                    </RevealChild>
                  );
                })}
              </Reveal>

              {/* Cards */}
              <div className="certifications-section single-section">
                <div className="row">
                  {filteredCertificates.map((item) => (
                    <div
                      key={item.title}
                      className="col-12 col-md-6 col-xl-4 certification-card-col"
                    >
                      <motion.article className="certification-card" whileHover={shouldReduceMotion ? undefined : { y: -6 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
                        {/* Header */}
                        <div className="certification-header">
                          <div className="certification-card-icon">
                            <TbCertificate />
                          </div>

                          <div className="certification-header-content">
                            <h3 className="certification-card-title">
                              {item.title}
                            </h3>

                            <p className="certification-card-meta">
                              {item.issuer}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="certification-card-description">
                          {item.description}
                        </p>

                        {/* Footer */}
                        <div className="certification-footer">
                          <div className="certification-meta-row">
                            <span>{item.date}</span>

                            {item.verified && (
                              <span className="certificate-badge">
                                Verified
                              </span>
                            )}
                          </div>

                          <a
                            href={item.image}
                            target="_blank"
                            rel="noreferrer"
                            className="certificate-btn"
                          >
                            View Certificate →
                          </a>
                        </div>
                      </motion.article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
