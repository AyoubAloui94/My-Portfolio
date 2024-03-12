import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    gap: 0.5rem;
  }
`

const P = styled.p`
  font-size: 1rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`

const PaginationButton = styled.button`
  background-color: ${props => (props.$active ? "#64748b" : "#d1d5db")};
  color: ${props => (props.$active ? " #d1d5db" : "inherit")};
  border: none;
  border-radius: 10rem;
  font-weight: 500;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  &:hover:not(:disabled) {
    background-color: #4f46e5;
    color: #f3f4f6;
  }

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))
  const pageCount = Math.ceil(count / import.meta.env.VITE_PER_PAGE)

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1
    searchParams.set("page", next)
    setSearchParams(searchParams)
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1
    searchParams.set("page", prev)
    setSearchParams(searchParams)
  }

  if (pageCount <= 1) return null
  return (
    <StyledPagination>
      <P>
        Showing <span>{1 + import.meta.env.VITE_PER_PAGE * (currentPage - 1)}</span> to <span>{currentPage < pageCount ? import.meta.env.VITE_PER_PAGE * currentPage : count}</span> out of <span>{count}</span> projects
      </P>
      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  )
}

export default Pagination
