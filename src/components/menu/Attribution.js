import React from 'react'
import styled from 'styled-components/macro'
import {CoinGeckoLogo, CoinTelegraphLogo} from '../assets'
import {Link} from '../common'

const Wrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  align-items: center;
  grid-gap: 0.5rem;
  justify-content: center;
  font-weight: bold;
  border-top: 1px solid ${props => props.theme.colors.neutral[800]}; 
  box-shadow: 0 1rem 2rem ${props => props.theme.colors.neutral[400]}; 
`

const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
`

const CoinGecko = styled(CoinGeckoLogo)`
  height: 2.25rem;
  margin-top: 0.3rem;
  border-right: 1px solid ${props => props.theme.colors.neutral[800]};
  padding-right: 0.5rem;
`
const CoinTelegraph = styled(CoinTelegraphLogo)`
  margin-left: 1rem;
`

const Poweredby = styled.p`
  margin: 0 auto;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color:  ${props => props.theme.colors.neutral[1200]};
`

export const Attribution = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Poweredby>Noveria is Powered by</Poweredby>
      <LogosWrapper>
        <Link external to="https://www.coingecko.com"><CoinGecko/></Link>
        <Link external to="https://www.cointelegraph.com"><CoinTelegraph/></Link>
      </LogosWrapper>
    </Wrapper>
  )
}
