'use client'

import { useRef } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const name = form.name.valueOf
    const email = form.email.value
    const subject = form.subject.value || 'New Contact Form Submission'
    const message = form.message.value

    const mailtoLink = `mailto:someone@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`

    window.location.href = mailtoLink
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Input label="Full name" id="name" name="name" placeholder="Your name here" required />
      <Input
        label="Email address"
        id="email"
        type="email"
        name="email"
        placeholder="Your email address here"
        required
      />
      <Input label="Subject" id="subject" name="subject" placeholder="Your subject here" />
      <Textarea
        label="Message"
        id="message"
        name="message"
        placeholder="Your message here"
        rows={7}
        required
      />
      <Button text="Send via Email" />
    </form>
  )
}

export default ContactForm
