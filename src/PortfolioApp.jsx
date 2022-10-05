import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const PortfolioApp = () => {
  return (
    <>
        <AppTheme>
            <AppRouter /> 
        </AppTheme>
    </>
  )
}
