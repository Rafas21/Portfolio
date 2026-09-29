export interface ContactForm {
  name: string
  email: string
  message: string
}

export type ContactErrorKey =
  | 'nameRequired'
  | 'emailRequired'
  | 'emailInvalid'
  | 'messageRequired'
  | 'messageShort'

export type ContactErrors = Partial<Record<keyof ContactForm, ContactErrorKey>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {}
  if (!form.name.trim()) errors.name = 'nameRequired'
  if (!form.email.trim()) errors.email = 'emailRequired'
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = 'emailInvalid'
  if (!form.message.trim()) errors.message = 'messageRequired'
  else if (form.message.trim().length < 10) errors.message = 'messageShort'
  return errors
}
