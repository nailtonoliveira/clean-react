import faker from 'faker'
import { RemoteLoadSurveyList } from '@/data/usecases'

export const mockRemoteModelSurvey = (): RemoteLoadSurveyList.Model => ({
  id: faker.random.uuid(),
  question: faker.random.words(10),
  didAnswer: faker.random.boolean(),
  date: faker.date.recent().toISOString()
})

export const mockRemoteSurveyListModel = (): RemoteLoadSurveyList.Model[] => ([
  mockRemoteModelSurvey(),
  mockRemoteModelSurvey(),
  mockRemoteModelSurvey()
])
