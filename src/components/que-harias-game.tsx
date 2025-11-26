"use client"

import { useMemo } from "react"
import QuestionDisplay from "./question-display"
import queHariasData from "../data/que-harias.json"

interface QueHariasGameProps {
  gameId: string
  difficulty: string
  onBack: () => void
}

export default function QueHariasGame({ difficulty, onBack }: QueHariasGameProps) {
  const questions = useMemo(() => {
    const data = queHariasData as Record<string, { question: string[] }>
    const difficultyData = data[difficulty]
    if (!difficultyData) return []

    return difficultyData.question.map((question) => ({
      question,
    }))
  }, [difficulty])

  return <QuestionDisplay items={questions} difficulty={difficulty} onBack={onBack} gameType="que-harias" />
}
