import styled, { keyframes } from "styled-components"
import { BiLoaderAlt } from "react-icons/bi"

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`

const SpinnerMini = styled(BiLoaderAlt)`
  width: 1.75rem;
  height: 1.75rem;
  animation: ${rotate} 1.5s infinite linear;
  margin-left: auto;
  margin-right: auto;
`

export default SpinnerMini
