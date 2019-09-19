import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'


const ArrowDown = () => {
  return (
    <ArrowDownContainer className='bounce'>
      <Link to='/#first'>
        <FaArrowDown />
      </Link>
    </ArrowDownContainer>
  )
}

export default ArrowDown


export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`

const ArrowDownContainer = styled.div`
  animation: ${bounce};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;

  a {
    padding: 12px 10px 10px 10px;

    svg {
      position: static;
    }
  }
`
