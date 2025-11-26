"use client"

import { useMemo } from "react"
import QuestionDisplay from "./question-display"
import prefieresData from "../data/prefieres.json"

interface PrefieresGameProps {
  gameId: string
  difficulty: string
  onBack: () => void
}

export default function PrefieresGame({ difficulty, onBack }: PrefieresGameProps) {
  const questions = useMemo(() => {
    const data = prefieresData as Record<string, { question: string[] }>
    const difficultyData = data[difficulty]
    if (!difficultyData) return []

    return difficultyData.question.map((question) => ({
      question,
    }))
  }, [difficulty])

  return <QuestionDisplay items={questions} difficulty={difficulty} onBack={onBack} gameType="prefieres" />
}
