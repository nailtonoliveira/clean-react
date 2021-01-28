import React, { useEffect, useState } from 'react'
import Styles from './survey-list-styles.scss'
import { Footer, Header } from '@/presentation/components'
import { Error, SurveyContext, SurveyListItem } from '@/presentation/pages/survey-list/components'
import { LoadSurveyList } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList = ({ loadSurveyList }: Props): JSX.Element => {
  const [state, setState] = useState({
    surveys: [] as SurveyModel[],
    error: ''
  })
  useEffect(() => {
    loadSurveyList.loadAll()
      .then(surveys => setState(oldState => ({ ...oldState, surveys })))
      .catch(error => setState(oldState => ({ ...oldState, error: error.message })))
  }, [])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <SurveyContext.Provider value={{ state, setState }}>
          {state.error ? <Error /> : <SurveyListItem /> }
        </SurveyContext.Provider>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
