import { Request, Response } from 'express'
import UseCase from '@domain/statistic/statistic'
import Matrix from '@model/matrix'
import { MessageResponse } from '@model/response'

class StatisticHandler {
  private useCase: UseCase

  constructor(useCase: UseCase) {
    this.useCase = useCase
  }

  FactorizeQR = async (req: Request, res: Response) => {
    const payload: Matrix = req.body

    if (!payload || !payload.matrix) {
      const responseError: MessageResponse = {
        errors: [{ code: 'InvalidPayload', message: '¡Uy! la matriz no es válida' }],
      }

      return res.status(400).json(responseError)
    }

    try {
      const factorizedQR = await this.useCase.FactorizeQR(payload.matrix)

      return res.status(200).json({ data: factorizedQR })
    } catch (error) {
      console.warn('QR UseCase error:', error)

      const responseError: MessageResponse = {
        errors: [{ code: 'Failure', message: 'Error al factorizar la matriz' }],
      }

      return res.status(500).json(responseError)
    }
  }
}

export default StatisticHandler
