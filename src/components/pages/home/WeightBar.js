import React from 'react'
import styled, {css} from 'styled-components'
import { usePortfolio } from '../../../context'
import { transparentize } from 'polished'
import { BiRestaurant } from 'react-icons/bi'

const Wrapper = styled.div`
  height: 1rem;
  display: flex;
  align-items: stretch;
  background: ${props => props.theme.colors.neutral[300]};
`

const Item = styled.div`
  width: ${({ weight }) => css`${weight}fr`};
  background: ${({ color }) => transparentize(0.8, color)};
`

export const WeightBar = ({...rest}) => {

  const {assets} = usePortfolio()

  return (
    <Wrapper {...rest}>
      {assets.map(asset => {
        return <Item color={asset.color} weight={asset.weight} />
      })}
    </Wrapper>
  )
}
