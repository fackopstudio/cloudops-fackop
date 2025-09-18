'use client'

import { motion } from 'framer-motion'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui'

export function ThemeToggle() {
  const { theme, actualTheme, toggleTheme } = useTheme()

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="w-5 h-5" />
      case 'dark':
        return <MoonIcon className="w-5 h-5" />
      case 'system':
        return <ComputerDesktopIcon className="w-5 h-5" />
      default:
        return <SunIcon className="w-5 h-5" />
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="relative overflow-hidden"
        aria-label={`Changer le thème (actuellement: ${theme})`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {getIcon()}
        </motion.div>
      </Button>
    </motion.div>
  )
}
