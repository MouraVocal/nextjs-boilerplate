'use client'

import { PropsWithChildren } from 'react'
import { GlobalStyle } from './GlobalStyle'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
