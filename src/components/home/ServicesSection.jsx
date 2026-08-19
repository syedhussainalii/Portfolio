import ServiceCard from '../cards/ServiceCard'

function ServicesSection({ services }) {
  return (
    <section className="page-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content">

              <div className="row">
                <div className="col-12">
                  <div className="section-heading page-heading">
                    <p className="section-description">
                      Services I offer to my clients
                    </p>

                    <h2
                      className="section-title"
                      id="services-title"
                    >
                      My Services
                    </h2>

                    <div className="animated-bar" />
                  </div>
                </div>
              </div>

              <div className="services-section single-section">
                <div className="row">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="col-12 col-md-6 col-lg-4"
                    >
                      <ServiceCard
                        iconClass={service.iconClass}
                        title={service.title}
                        description={service.description}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection