"use client"

import { useRouter } from "next/navigation"

export function useNavigate() {
  const router = useRouter()

  const goTo = (path: string) => {
    router.push(path)
  }

  const goBack = () => {
    router.back()
  }

  const replace = (path: string) => {
    router.replace(path)
  }

  return {
    goTo,
    goBack,
    replace
  }
}