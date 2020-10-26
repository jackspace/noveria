import React from 'react'
import { getPortfolioHistory } from "./getPortfolioHistory"
import {useSettings} from '../../context'
import {usePortfolio} from '../../context'
import {useQuery} from 'react-query'

export const usePortfolioHistory = (initialHistoryDays) => {
  const [historyDays, setHistoryDays] = React.useState(initialHistoryDays)
  const {currency} = useSettings()
  const {assets} = usePortfolio()

  console.log(assets, currency, historyDays)
  const {data, ...asyncInfo} = useQuery(['portfolio-history', currency, assets, historyDays], async () => {
    return await getPortfolioHistory({assets, currency, days: historyDays})
  })

  console.log({data})
  return {
    history: data,
    setHistoryDays,
    ...asyncInfo
  }
}