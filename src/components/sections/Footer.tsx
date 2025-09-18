'use client'

import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Image 
                    src="/cloud-ops-logo/cloud-ops-logo-blanc.png" 
                    alt="CloudOps Logo" 
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">CloudOps</span>
                  <span className="text-sm font-medium text-slate-400 -mt-1">Fackop</span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-lg leading-relaxed text-lg">
              Plateforme self-service pour provisionner, déployer, monitorer et superviser des workloads multi-cloud avec une approche DevOps moderne.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <span className="text-white font-bold">T</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <span className="text-white font-bold">L</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <span className="text-white font-bold">G</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Plateforme</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="/features" className="hover:text-blue-400 transition-colors duration-300 font-medium">Fonctionnalités</a></li>
              <li><a href="/login" className="hover:text-blue-400 transition-colors duration-300 font-medium">Connexion</a></li>
              <li><a href="/signup" className="hover:text-blue-400 transition-colors duration-300 font-medium">Inscription</a></li>
              <li><a href="/dashboard" className="hover:text-blue-400 transition-colors duration-300 font-medium">Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">&copy; 2025 CloudOps Fackop. Tous droits réservés.</p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Conditions d&apos;utilisation</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
