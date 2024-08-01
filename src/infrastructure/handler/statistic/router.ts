import { Application } from 'express'

import RouteSpecification from '@model/route-specification'

import StatisticHandler from './handler'
import StatisticUseCase from '../../../domain/statistic/usecase'

const _privateRoutePrefix = '/qr/api/v1/factorize'

const NewRouter = (spec: RouteSpecification) => {
  const handler = buildHandler()

  privateRoute(spec.App, handler)
}

const buildHandler = (): StatisticHandler => {
  const useCase = new StatisticUseCase()

  return new StatisticHandler(useCase)
}

const privateRoute = (app: Application, handler: StatisticHandler) => {
  app.post(_privateRoutePrefix, handler.FactorizeQR)
}

export default NewRouter
