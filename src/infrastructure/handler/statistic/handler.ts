import { Request, Response } from 'express'
import UseCase from '@domain/statistic/statistic'
import QR from '@model/qr'
import { MessageResponse } from '@model/response'

import ErrorResponse from '../../../domain/error/error'

class StatisticHandler {
  private useCase: UseCase

  constructor(useCase: UseCase) {
    this.useCase = useCase
  }

  Statistic = async (req: Request, res: Response) => {
    const payload: QR = req.body

    if (!payload || !payload) {
      const responseError: MessageResponse = {
        errors: [{ code: 'InvalidPayload', message: '¡Uy! la matriz no es válida' }],
      }

      return res.status(400).json(responseError)
    }

    try {
      const statistic = await this.useCase.Statistic(payload)

      return res.status(200).json({ ...statistic })
    } catch (error) {
      console.warn('Error', error)

      if (error instanceof ErrorResponse) {
        const responseError: MessageResponse = {
          errors: [{ code: error.name, message: error.message }],
        }

        return res.status(400).json(responseError)
      }

      const responseError: MessageResponse = {
        errors: [{ code: 'Failure', message: 'Error al factorizar la matriz' }],
      }

      return res.status(500).json(responseError)
    }
  }
}

export default StatisticHandler
