'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import { useWaitlist } from '@/hooks/useWaitlist'
import { Button } from '@/components/ui'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { CTASection } from '@/components/sections/CTASection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

export default function HomeMarketingPage() {
  const { scrollToContact } = useWaitlist()
  
  

  const stats = [
    { label: "Déploiements", value: "900+", suffix: "/mois" },
    { label: "Utilisateurs", value: "500+", suffix: "actifs" },
    { label: "Uptime", value: "99.9", suffix: "%" },
    { label: "Clouds", value: "4", suffix: "supportés" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header avec navigation sticky */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-white/20 dark:border-slate-700/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex items-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-2 sm:mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Image 
                    src="/cloud-ops-logo/cloud-ops-logo-blanc.png" 
                    alt="CloudOps Logo" 
                    width={24}
                    height={24}
                    className="object-contain sm:w-7 sm:h-7"
                    priority
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">CloudOps</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 -mt-1">Fackop</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button 
                onClick={scrollToContact} 
                variant="ghost"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Nous contacter</span>
                <span className="sm:hidden">Contact</span>
              </Button>
              <Button 
                onClick={scrollToContact} 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Rejoindre la liste d&apos;attente</span>
                <span className="sm:hidden">Liste d&apos;attente</span>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-slate-700 mb-8 shadow-lg"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Plateforme en production</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-8 leading-tight">
              CloudOps
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Fackop
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed mb-8 font-light">
              La plateforme <span className="font-semibold text-blue-600 dark:text-blue-400">self-service</span> pour{' '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">provisionner</span>,{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">déployer</span> et{' '}
              <span className="font-semibold text-pink-600 dark:text-pink-400">monitorer</span> vos workloads multi-cloud
            </p>
            
            {/* Message de liste d'attente */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700 mb-12 shadow-lg"
            >
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm md:text-base font-semibold text-blue-700 dark:text-blue-300">
                🚀 Bientôt disponible ! Rejoignez la liste d&apos;attente pour être parmi les premiers
              </span>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  variant="secondary"
                  className="bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-xl hover:shadow-2xl transform transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg border border-slate-200 dark:border-slate-700"
                >
                  <span className="mr-3 text-xl">📧</span>
                  <span>Nous contacter</span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transform transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg"
                >
                  <span className="mr-3 text-xl">✨</span>
                  Rejoindre la liste d&apos;attente
                  <ArrowRightIcon className="w-5 h-5 ml-3" />
                </Button>
              </motion.div>
            </div>

            {/* Bouton de démo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center"
            >
              <Button
                variant="ghost"
                onClick={scrollToContact}
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
              >
                <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Découvrir nos fonctionnalités
              </Button>
            </motion.div>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-3 sm:p-4 md:p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex flex-col justify-center overflow-hidden"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-tight">
                  <div className="flex flex-col items-center justify-center gap-0.5">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="whitespace-nowrap text-center">{stat.value}</span>
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-slate-600 dark:text-slate-400">{stat.suffix}</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider leading-tight px-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <FeaturesSection />

      {/* Section Avantages */}
      <BenefitsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Section Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
