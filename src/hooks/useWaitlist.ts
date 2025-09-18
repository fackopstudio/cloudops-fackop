'use client'

import { useState } from 'react'

export function useWaitlist() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulation d'ajout à la liste d'attente
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Email ajouté à la liste d\'attente:', email)
      
      setSubmitStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Erreur ajout liste d\'attente:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    email,
    setEmail,
    isSubmitting,
    submitStatus,
    handleWaitlistSubmit,
    scrollToContact
  }
}
