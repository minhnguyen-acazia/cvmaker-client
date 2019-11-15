import React from 'react'
import { PageLayout } from 'components/page-layout/page-layout'
import { CVCreator } from 'components/cv-creator/cv-creator'

export function HomeRoute() {
  return (
    <PageLayout content={(
      <CVCreator />
    )} />
  )
}
