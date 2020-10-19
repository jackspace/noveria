import React from 'react'
import styled from 'styled-components/macro'
import { MdBrightness2 as DarkModeIcon } from 'react-icons/md'

const Icon = styled(DarkModeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutral[1200]};
  }
`

export const DarkModeButton = ({ ...rest }) => {
  return <Icon title="Toggle dark mode." {...rest} />
}