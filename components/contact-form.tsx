"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-muted">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
        <p className="mt-2 text-muted-foreground">Thank you for contacting us. We&apos;ll get back to you soon.</p>
        <Button
          variant="outline"
          className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="border-border focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="border-border focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help?"
          required
          className="border-border focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or question..."
          rows={6}
          required
          className="border-border focus:border-primary focus:ring-primary resize-none"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
