import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeLogin } from '../factories/pages/login/login-factory'
import { makeSignup } from '../factories/pages/signup/signup-factory'
import { SurveyList } from '@/presentation/pages'
import { ApiContext } from '@/presentation/contexts'
import { setCurrentAccountAdapter } from '@/main/adapters/current-account-adapter'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={makeLogin} />
          <Route path="/signup" exact component={makeSignup} />
          <Route path="/" exact component={SurveyList} />
        </Switch>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
