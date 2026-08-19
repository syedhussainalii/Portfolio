import { useState } from "react";
import { TbCertificate } from "react-icons/tb";
import {
  certificationIntro,
  certificationItems,
} from "../../data/certifications";

function CertificationsSection() {
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
              <div className="section-heading page-heading">
                <p className="section-description">
                  {certificationIntro.subtitle}
                </p>

                <h2 className="section-title" id="certifications-title">
                  {certificationIntro.title}
                </h2>

                <div className="animated-bar" />
              </div>

              {/* Filter */}
              {/* Filter */}
              <div
                className="filter-tabs"
                style={{ marginBottom: "55px" }}
                role="tablist"
                aria-label="Certificate filters"
              >
                {filters.map((filter) => {
                  const total = certificationItems.filter(
                    (item) => item.category === filter.value,
                  ).length;

                  return (
                    <button
                      key={filter.value}
                      type="button"
                      role="tab"
                      aria-selected={activeFilter === filter.value}
                      aria-pressed={activeFilter === filter.value}
                      className={`filter-tab ${
                        activeFilter === filter.value ? "active" : ""
                      }`}
                      onClick={() => setActiveFilter(filter.value)}
                    >
                      {filter.label}

                      <span className="filter-tab-badge">{total}</span>
                    </button>
                  );
                })}
              </div>

              {/* Cards */}
              <div className="certifications-section single-section">
                <div className="row">
                  {filteredCertificates.map((item) => (
                    <div
                      key={item.title}
                      className="col-12 col-md-6 col-xl-4 certification-card-col"
                    >
                      <article className="certification-card">
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
                      </article>
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
