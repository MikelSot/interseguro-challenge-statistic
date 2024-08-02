import { Application } from 'express'

import RouteSpecification from '@model/route-specification'

import StatisticHandler from './handler'
import StatisticUseCase from '../../../domain/statistic/usecase'
import MatrixUseCase from '../../../domain/matrix/usecase'

const _privateRoutePrefix = '/statistic/api/v1/'

const NewRouter = (spec: RouteSpecification) => {
  const handler = buildHandler()

  privateRoute(spec.App, handler)
}

const buildHandler = (): StatisticHandler => {
  const matrixUseCase = new MatrixUseCase()
  const useCase = new StatisticUseCase(matrixUseCase)

  return new StatisticHandler(useCase)
}

const privateRoute = (app: Application, handler: StatisticHandler) => {
  app.post(_privateRoutePrefix, handler.Statistic)
}

export default NewRouter
