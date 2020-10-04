import React from 'react'
import styled from 'styled-components/macro'
import { NoveriaLogo } from '../../assets'
import { LoadingBar } from './LoadingBar'
import {useTheme, useAPI} from '../../context'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsFetching } from 'react-query'

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.neutral[100]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LoadingScreen = ({ ...rest }) => {

  const isFetching = useIsFetching()
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    if(!isFetching){
      setLoaded(true)
    }
  }, [isFetching])
 
  return (
    <AnimatePresence>
      {!loaded && isFetching && (
        <Wrapper
          {...rest}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NoveriaLogo />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}