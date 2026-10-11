import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { contactFormInitialState, contactIntro, contactSocialLinks } from '../../data/contact'
import { Reveal } from '../ui/Reveal'

function ContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState(contactFormInitialState)
  const [submitState, setSubmitState] = useState('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? '' 

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!web3FormsAccessKey) {
      setSubmitState('error')
      setFeedbackMessage('The contact form is not configured yet. Please try again later.')
      return
    }

    setSubmitState('sending')
    setFeedbackMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          ...formData,
          replyto: formData.email,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Form submission failed')
      }

      setSubmitState('success')
      setFeedbackMessage("Message sent successfully. Thanks for reaching out \u2014 I'll get back to you soon.")
      setFormData(contactFormInitialState)

      window.setTimeout(() => {
        setSubmitState('idle')
        setFeedbackMessage('')
      }, 4000)
    } catch {
      setSubmitState('error')
      setFeedbackMessage('Something went wrong. Please try again.')
    }
  }

  const statusClassName =
    submitState === 'success'
      ? 'contact-status contact-status--success'
      : submitState === 'error'
        ? 'contact-status contact-status--error'
        : 'contact-status'

  const submitLabel = submitState === 'sending' ? 'Sending...' : 'Send Message'

  return (
    <section className="page-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-shell">
          <Reveal><header className="contact-header">
            <p className="contact-eyebrow">{contactIntro.eyebrow}</p>
            <h2 className="contact-title" id="contact-title">
              {contactIntro.title}
            </h2>
            <p className="contact-description">{contactIntro.description}</p>
          </header></Reveal>

          <Reveal delay={0.1}><div className="contact-form-wrap">
            <div className="contact-form-heading">
              <h3>Message Me</h3>
            </div>

            <form className="contact-form" id="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What can I help you with?"
                  required
                  autoComplete="off"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field contact-field--message">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-actions">
                <button
                  className={`contact-submit-button${submitState === 'sending' ? ' is-sending' : ''}`}
                  id="contact-submit"
                  type="submit"
                  disabled={submitState === 'sending'}
                >
                  <span>{submitLabel}</span>
                  {submitState !== 'sending' ? (
                    <span className="contact-submit-arrow" aria-hidden="true">
                      {'\u2192'}
                    </span>
                  ) : null}
                </button>

                <p className={statusClassName} aria-live="polite">
                  {feedbackMessage}
                </p>
              </div>
            </form>
          </div></Reveal>

          <Reveal delay={0.15}><div className="contact-social">
            <p className="contact-social-kicker">FIND ME ONLINE</p>
            <ul className="contact-social-links" aria-label="Social links">
              {contactSocialLinks.map((link) => {
                const SocialIcon = link.icon
                const isExternal = link.href.startsWith('http')

                return (
                  <li key={link.label}>
                    <motion.a
                      className="contact-social-link"
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    >
                      <SocialIcon aria-hidden="true" />
                      <span>{link.label}</span>
                      <span aria-hidden="true">{'\u2197'}</span>
                    </motion.a>
                  </li>
                )
              })}
            </ul>
          </div></Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
