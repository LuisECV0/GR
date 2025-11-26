"use client"

import { useMemo } from "react"
import QuestionDisplay from "./question-display"
import verdadORetoData from "../data/verdad-o-reto.json"

interface VerdadORetoGameProps {
  gameId: string
  difficulty: string
  onBack: () => void
}

export default function VerdadORetoGame({ difficulty, onBack }: VerdadORetoGameProps) {
  const questions = useMemo(() => {
    const data = verdadORetoData as Record<string, { truth: string[]; dare: string[] }>
    const difficultyData = data[difficulty]
    if (!difficultyData) return []

    return difficultyData.truth.map((truth, index) => ({
      truth,
      dare: difficultyData.dare[index] || "",
    }))
  }, [difficulty])

  return <QuestionDisplay items={questions} difficulty={difficulty} onBack={onBack} gameType="verdad-reto" />
}
