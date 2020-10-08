import React from 'react'
import styled, {css} from 'styled-components/macro'
import { useGlobalData } from '../../../hooks/api'
import {Percentage} from '../../common'
import {useFormatPrice} from '../../../hooks/common'

const Wrapper = styled.div`
  display: flex;
 
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  max-height: 100%;
  margin-top: 0.4rem;
`
const Item = styled.li`
  color: ${props => props.theme.colors.neutral[1200]};
  /* font-size: ${props => props.theme.typeScale.body}; */
  vertical-align: middle;
  
`

const Left = styled.ul`
  display: flex;
  /* grid-auto-flow: column; */
  gap: 1.5rem;
  overflow: hidden;
  flex-wrap: wrap;
  max-height: 100%;
  /* grid-template-columns: repeat(auto-fit, repeat(min-content, 1fr) ); */
`

const Right = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
  
`

const NavButton = styled.p`
  ${props => {
    return !props.enabled && css`
      color: ${props.theme.colors.neutral[800]};
      cursor: none;
      pointer-events: none;
    `
  }}
  :hover{
    cursor: pointer;
  }
`

export const CardHeaderItems = ({page, setPage}) => {

  const {isLoading, globalData} = useGlobalData()
  const {formatPrice} = useFormatPrice()

  return React.useMemo(() => (
    <Wrapper>
      <Left>
        <Item>Assets: {isLoading ? 'Loading...' : globalData.activeCoins}</Item>
        <Item>Markets: {isLoading ? 'Loading...' : globalData.markets}</Item>
        <Item>Total Market Cap: {isLoading ? 'Loading...' : formatPrice(globalData.marketCap)}</Item>
        <Item>Total Volume: {isLoading ? 'Loading...' : formatPrice(globalData.volume)}</Item>
        <Item>BTC Dominance: {isLoading ? 'Loading...' : <Percentage>{ globalData.dominance['btc']}</Percentage>}</Item>
      </Left>
      <Right>
        <NavButton enabled={page > 1} onClick={()=> setPage(page - 1)}>Previous</NavButton>
        <Item css={`font-weight: bold;`}>{page}</Item>
        <NavButton enabled={page < 4} onClick={()=> setPage(page + 1)}>Next</NavButton>
      </Right>
    </Wrapper> 
  ), [globalData])
}