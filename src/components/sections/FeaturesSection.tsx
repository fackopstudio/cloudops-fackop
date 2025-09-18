'use client'

import { motion } from 'framer-motion'
import { 
  ServerIcon, 
  RocketLaunchIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: ServerIcon,
    title: "Infrastructure as Code",
    description: "Provisionnement automatisé avec Terraform et Kubernetes",
    color: "from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20",
    iconColor: "text-primary-600 dark:text-primary-400"
  },
  {
    icon: RocketLaunchIcon,
    title: "CI/CD Pipeline",
    description: "Déploiements automatisés avec Jenkins et Docker",
    color: "from-success-100 to-success-200 dark:from-success-900/20 dark:to-success-800/20",
    iconColor: "text-success-600 dark:text-success-400"
  },
  {
    icon: CloudIcon,
    title: "Multi-Cloud",
    description: "Support AWS, Azure, GCP et DigitalOcean",
    color: "from-info-100 to-info-200 dark:from-info-900/20 dark:to-info-800/20",
    iconColor: "text-info-600 dark:text-info-400"
  },
  {
    icon: ShieldCheckIcon,
    title: "Sécurité Avancée",
    description: "Authentification JWT, RBAC et audit complet",
    color: "from-warning-100 to-warning-200 dark:from-warning-900/20 dark:to-warning-800/20",
    iconColor: "text-warning-600 dark:text-warning-400"
  },
  {
    icon: ChartBarIcon,
    title: "Monitoring Intelligent",
    description: "Prometheus, Grafana et alertes automatiques",
    color: "from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: CogIcon,
    title: "Auto-Healing",
    description: "Récupération automatique et scaling intelligent",
    color: "from-rose-100 to-rose-200 dark:from-rose-900/20 dark:to-rose-800/20",
    iconColor: "text-rose-600 dark:text-rose-400"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Fonctionnalités
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Outils <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">puissants</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez les fonctionnalités qui font de CloudOps Fackop la solution idéale pour vos besoins DevOps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:shadow-2xl border border-white/20 dark:border-slate-700/20 hover:border-blue-200 dark:hover:border-blue-700/50 min-h-[300px] sm:min-h-[320px] flex flex-col">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg flex-shrink-0">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg flex-1">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">
                    <span>En savoir plus</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
