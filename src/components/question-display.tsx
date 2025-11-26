"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface QuestionDisplayProps {
  items: { truth?: string; dare?: string; question?: string }[]
  difficulty: string
  onBack: () => void
  gameType: "verdad-reto" | "que-harias" | "prefieres"
}

export default function QuestionDisplay({ items, gameType }: QuestionDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTruth, setShowTruth] = useState<boolean | null>(null)

  const currentItem = items[currentIndex]
  const isLastQuestion = currentIndex === items.length - 1

  const handleNext = () => {
    if (isLastQuestion) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
    setShowTruth(null)
  }

  const handleTruth = () => {
    setShowTruth(true)
  }

  const handleDare = () => {
    setShowTruth(false)
  }

  // ============================================
  // 🔥 CORRECCIÓN: displayText arreglado
  // ============================================
  let displayText = ""

  if (gameType === "verdad-reto") {
    if (showTruth === null) {
      displayText = "Selecciona Verdad o Reto"
    } else {
      displayText = showTruth ? currentItem.truth || "" : currentItem.dare || ""
    }
  } else {
    displayText = currentItem.question || ""
  }
  // ============================================

  return (
    <div className="flex flex-col min-h-screen bg-background">
        <div className="text-xs md:text-sm text-muted-foreground">
          Pregunta {currentIndex + 1} de {items.length}
        </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 flex flex-col items-center justify-center p-4 md:p-6"
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/50 rounded-3xl p-6 md:p-12 mb-8 min-h-[250px] md:min-h-[300px] flex items-center justify-center">
            <p className="text-xl md:text-3xl font-bold text-foreground text-center leading-relaxed text-balance">
              {displayText} 
            </p>
          </div>

          {gameType === "verdad-reto" && showTruth === null ? (
            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTruth}
                className="py-3 md:py-4 px-6 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold text-base md:text-lg hover:shadow-lg transition-shadow"
              >
                Verdad
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDare}
                className="py-3 md:py-4 px-6 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground font-bold text-base md:text-lg hover:shadow-lg transition-shadow"
              >
                Reto
              </motion.button>
            </div>
          ) : (
            <div className="mb-8" />
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="w-full py-3 md:py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-base md:text-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
          >
            {isLastQuestion ? "Volver al inicio" : "Siguiente jugador"}
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
