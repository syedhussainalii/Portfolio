import { educationItems } from '../../data/education'
import { experienceItems } from '../../data/experience'
import TimelineItem from '../cards/TimelineItem'

function ResumeSection() {
  return (
    <section className="page-section" id="resume" aria-labelledby="resume-title">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading page-heading">
                    <p className="section-description">Check out my Resume</p>
                    <h2 className="section-title" id="resume-title">
                      Resume
                    </h2>
                    <div className="animated-bar" />
                  </div>
                </div>
              </div>

              <div className="resume-section single-section">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="col-block education">
                      <h3 className="col-title">Education</h3>
                      {educationItems.map((item) => (
                        <TimelineItem
                          key={item.title}
                          title={item.title}
                          details={item.details}
                          description={item.description}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="col-block experience">
                      <h3 className="col-title">Experience</h3>
                      {experienceItems.map((item) => (
                        <TimelineItem
                          key={item.title}
                          title={item.title}
                          details={item.details}
                          description={item.description}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
