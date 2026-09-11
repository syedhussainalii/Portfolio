import ServiceCard from '../cards/ServiceCard'
import { Reveal, RevealChild } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

function ServicesSection({ services }) {
  return (
    <section className="page-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content">
              <div className="row">
                <div className="col-12">
                  <SectionHeading 
                    title="My Services"
                    subtitle="Services I offer to my clients"
                    className="page-heading"
                  />
                </div>
              </div>

              <div className="services-section single-section">
                <Reveal cascade className="row">
                  {services.map((service) => (
                    <RevealChild
                      key={service.title}
                      className="col-12 col-md-6 col-lg-4"
                    >
                      <ServiceCard
                        iconClass={service.iconClass}
                        title={service.title}
                        description={service.description}
                      />
                    </RevealChild>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection