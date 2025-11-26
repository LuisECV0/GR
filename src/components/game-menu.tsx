"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import DifficultySelector from "./difficulty-selector"
import VerdadORetoGame from "./verdad-o-reto-game"
import QueHariasGame from "./que-harias-game"
import PrefieresGame from "./prefieres-game"

interface GameMenuProps {
  gameId: string
  onBack: () => void
}

export default function GameMenu({ gameId, onBack }: GameMenuProps) {
  const gameConfig = {
    "verdad-reto": {
      name: "Verdad o Reto",
      emoji: "🎯",
      component: VerdadORetoGame,
    },
    "que-harias": {
      name: "¿Qué harías si...?",
      emoji: "🤔",
      component: QueHariasGame,
    },
    prefieres: {
      name: "Prefieres",
      emoji: "⚖️",
      component: PrefieresGame,
    },
  }

  const config = gameConfig[gameId as keyof typeof gameConfig]
  const GameComponent = config?.component

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6 bg-background/80 backdrop-blur-sm border-b border-primary/20"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">Atrás</span>
        </button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <div className="text-3xl mb-2">{config?.emoji}</div>
          <h1 className="text-xl md:text-2xl font-bold text-primary">{config?.name}</h1>
        </motion.div>

        <div className="w-[88px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-4 md:p-6"
      >
        <DifficultySelector gameId={gameId} GameComponent={GameComponent} onBack={onBack} />
      </motion.div>
    </motion.div>
  )
}
