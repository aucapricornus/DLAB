import { useState } from "react"

export const useModalPage = () => {
    const [page, setPage] = useState(1)

    const handleNextPage = () => {
        if (page < 6) {
            setPage(prev => prev + 1)
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prev => prev - 1)
        }
    }

    return { page, handleNextPage, handlePrevPage, setPage }
}