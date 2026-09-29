import { CircleAlert, CircleCheckBig, LoaderCircle, Mail, MapPin, Send } from 'lucide-react'
import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { profile } from '@/data/profile'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'
import { validateContact, type ContactErrors, type ContactForm } from '@/utils/validation'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

type Status = 'idle' | 'sending' | 'success' | 'error' | 'mailto' | 'unavailable'

const initial: ContactForm = { name: '', email: '', message: '' }

function ChannelLink({ href, icon, label, value, external }: { href: string; icon: ReactNode; label: string; value: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-strong"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-elevated text-muted transition-colors group-hover:text-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-subtle">{label}</span>
        <span className="block truncate text-sm text-fg">{value}</span>
      </span>
    </a>
  )
}

export function Contact() {
  const { t, l } = useLanguage()
  const f = t.contact.form
  const uid = useId()
  const [form, setForm] = useState<ContactForm>(initial)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [touched, setTouched] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [honeypot, setHoneypot] = useState('')

  const onChange = (field: keyof ContactForm) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...form, [field]: e.target.value }
    setForm(next)
    if (touched) setErrors(validateContact(next))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTouched(true)
    const result = validateContact(form)
    setErrors(result)
    if (Object.keys(result).length > 0) {
      const first = (['name', 'email', 'message'] as const).find((k) => result[k])
      document.getElementById(`${uid}-${first}`)?.focus()
      return
    }
    if (honeypot) return

    if (site.contactEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(site.contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error(String(res.status))
        setStatus('success')
        setForm(initial)
        setTouched(false)
      } catch {
        setStatus('error')
      }
      return
    }

    if (profile.email) {
      const subject = encodeURIComponent(`Portfolio — ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n${form.name} <${form.email}>`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('unavailable')
  }

  const field = (name: keyof ContactForm) => ({
    id: `${uid}-${name}`,
    name,
    value: form[name],
    onChange: onChange(name),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${uid}-${name}-error` : undefined,
    className: cn(
      'w-full rounded-lg border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-subtle transition-colors outline-none focus:border-accent focus-visible:outline-none focus:ring-2 focus:ring-accent/25',
      errors[name] ? 'border-danger' : 'border-border hover:border-border-strong',
    ),
  })

  const fieldError = (name: keyof ContactForm) =>
    errors[name] && (
      <p id={`${uid}-${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
        <CircleAlert className="size-3.5" aria-hidden />
        {f.errors[errors[name]]}
      </p>
    )

  const feedback: Partial<Record<Status, { tone: 'ok' | 'bad'; text: string }>> = {
    success: { tone: 'ok', text: f.success },
    mailto: { tone: 'ok', text: f.mailtoOpened },
    error: { tone: 'bad', text: f.error },
    unavailable: { tone: 'bad', text: f.unavailable },
  }
  const message = feedback[status]

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 [&>*]:min-w-0">
        <Reveal>
          <div className="flex flex-col gap-3">
            {profile.email && (
              <ChannelLink href={`mailto:${profile.email}`} icon={<Mail className="size-4" aria-hidden />} label={t.contact.email} value={profile.email} />
            )}
            <ChannelLink
              href={profile.social.linkedin}
              external
              icon={<LinkedinIcon className="size-4" />}
              label={t.contact.linkedin}
              value={profile.social.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
            />
            <ChannelLink
              href={profile.social.github}
              external
              icon={<GithubIcon className="size-4" />}
              label={t.contact.github}
              value={profile.social.github.replace(/^https?:\/\//, '')}
            />
            {profile.location && (
              <p className="mt-2 flex items-center gap-2 px-1 text-sm text-muted">
                <MapPin className="size-4" aria-hidden />
                {l(profile.location)}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-5 sm:p-7">
            <form noValidate onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${uid}-name`} className="mb-1.5 block text-sm font-medium">
                    {f.name}
                  </label>
                  <input type="text" autoComplete="name" required maxLength={100} {...field('name')} />
                  {fieldError('name')}
                </div>
                <div>
                  <label htmlFor={`${uid}-email`} className="mb-1.5 block text-sm font-medium">
                    {f.email}
                  </label>
                  <input type="email" autoComplete="email" inputMode="email" required maxLength={200} {...field('email')} />
                  {fieldError('email')}
                </div>
              </div>
              <div>
                <label htmlFor={`${uid}-message`} className="mb-1.5 block text-sm font-medium">
                  {f.message}
                </label>
                <textarea rows={5} required maxLength={5000} {...field('message')} className={cn(field('message').className, 'resize-y')} />
                {fieldError('message')}
              </div>

              {/* Honeypot anti-spam: invisível para pessoas, preenchido por bots. */}
              <div aria-hidden className="absolute -left-[9999px] h-0 overflow-hidden">
                <label>
                  Website
                  <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </label>
              </div>

              <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p role="status" aria-live="polite" className="min-h-5 text-sm">
                  {message && (
                    <span className={cn('flex items-start gap-2', message.tone === 'ok' ? 'text-success' : 'text-danger')}>
                      {message.tone === 'ok' ? <CircleCheckBig className="mt-0.5 size-4 shrink-0" aria-hidden /> : <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />}
                      {message.text}
                    </span>
                  )}
                </p>
                <Button type="submit" disabled={status === 'sending'} className="shrink-0">
                  {status === 'sending' ? (
                    <>
                      <LoaderCircle className="size-4 animate-spin" aria-hidden /> {f.sending}
                    </>
                  ) : (
                    <>
                      <Send className="size-4" aria-hidden /> {f.submit}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
