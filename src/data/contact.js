import { FiClock, FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { socialLinks as siteSocialLinks } from './siteContent'

export const contactEmail = 'syedhussainalii2003@gmail.com'

const socialLinkHref = (label) =>
  siteSocialLinks.find((link) => link.label === label)?.href ?? '#0'

export const contactIntro = {
  eyebrow: "LET'S CONNECT",
  title: "Let's Build Something Great",
  description:
    "Have a project, idea, or opportunity in mind? I'd love to hear about it. Send me a message and let's start a conversation.",
}

export const contactFormInitialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const contactAvailability = 'Available for Freelance & Full-Time Opportunities'

export const contactDetails = [
  {
    label: 'Based in',
    value: 'Karachi, Pakistan',
    icon: FiMapPin,
  },
  {
    label: 'Email',
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: FiMail,
  },
  {
    label: 'Availability',
    value: 'Open to opportunities',
    icon: FiClock,
  },
]

export const contactSocialLinks = [
  {
    label: 'LinkedIn',
    icon: FiLinkedin,
    href: socialLinkHref('LinkedIn'),
  },
  {
    label: 'GitHub',
    icon: FiGithub,
    href: socialLinkHref('GitHub'),
  },
  {
    label: 'Email',
    icon: FiMail,
    href: socialLinkHref('Email'),
  },
  {
    label: 'Instagram',
    icon: FiInstagram,
    href: socialLinkHref('Instagram'),
  },
]
