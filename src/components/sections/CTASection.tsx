'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui'

export function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Prêt à <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">transformer</span> vos opérations cloud ?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez des centaines d&apos;équipes qui font confiance à CloudOps Fackop pour leurs déploiements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="secondary"
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transform transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg"
              >
                <span className="mr-3 text-xl">📧</span>
                Nous contacter
                <ArrowRightIcon className="w-5 h-5 ml-3" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="ghost"
                onClick={scrollToContact}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                <span className="mr-3 text-xl">✨</span>
                Rejoindre la liste d'attente
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
