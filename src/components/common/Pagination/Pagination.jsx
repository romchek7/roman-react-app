import React, {useEffect, useMemo, useState} from "react"
import styles from "./Pagination.module.css"

let Pagination = ({onPageChanged, currentPage, pagesLimit, totalItemsCount, pageSize}) => {
    let totalPages = useMemo(() => {
        return Math.ceil(totalItemsCount / pageSize)
    }, [totalItemsCount, pageSize])

    let leftPortionPage = useMemo(() => {
        return ((Math.floor((currentPage - 1) / pagesLimit) * pagesLimit) + 1)
    }, [currentPage, pagesLimit])

    let rightPortionPage = useMemo(() => {
        return leftPortionPage + pagesLimit - 1
    }, [leftPortionPage, pagesLimit])

    let pagesItems = useMemo(() => {
        let array = []
        for (let i = 1; i <= totalPages; i++) {
            array.push(i)
        }
        return array
    }, [totalPages])

    let pagesElements = pagesItems
        .filter(p => p >= leftPortionPage && p <= rightPortionPage)
        .map(p => <div key={p} onClick={(e) => {
            onPageChanged(p)
        }} className={currentPage === p ? styles.paginationNumberActive : styles.paginationNumber}>
            {p}
        </div>)

    return (
        <div className={styles.paginationNumbers}>
            <div
                className={currentPage > pagesLimit ? styles.paginationNumber : styles.paginationNumberHold}
                onClick={() => {
                    onPageChanged(1)
                }}>
                First page
            </div>
            <div
                onClick={() => {
                    onPageChanged(currentPage - 1)
                }}
                className={currentPage > 1 ? styles.paginationNumber : styles.paginationNumberHold}>
                Previous
            </div>
            {pagesElements}
            <div
                onClick={() => {
                    onPageChanged(currentPage + 1)
                }}
                className={currentPage === totalPages ? styles.paginationNumberHold : styles.paginationNumber}>
                Next
            </div>
            <div
                className={currentPage <= (totalPages - pagesLimit) ? styles.paginationNumber : styles.paginationNumberHold}
                onClick={() => {
                    onPageChanged(totalPages)
                }}>
                Last page
            </div>
        </div>
    )
}

export default Pagination