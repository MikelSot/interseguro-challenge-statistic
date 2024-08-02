import UseCase from '@domain/statistic/statistic'
import MatrixUseCase from '@domain/matrix/matrix'
import QR from '@model/qr'
import { Statistic, Statistics } from '@model/statistic'

import ErrorResponse from '../error/error'

class StatisticUseCase implements UseCase {
  private useCase: MatrixUseCase

  constructor(useCase: MatrixUseCase) {
    this.useCase = useCase
  }

  async Statistic(data: QR): Promise<Statistics> {
    const { q, r } = data

    if (q.length === 0 || r.length === 0) {
      console.warn('Error', '¡Uy! la matriz no es válida')

      throw new ErrorResponse('InvalidPayload', '¡Uy! la matriz no es válida')
    }

    const statisticQ = this.getAllStatistics(q)
    const statisticR = this.getAllStatistics(r)

    return {
      statistic_q: statisticQ,
      statistic_r: statisticR,
    }
  }

  private getAllStatistics(matrix: number[][]): Statistic {
    return {
      max_value: this.useCase.GetMaxValue(matrix),
      min_value: this.useCase.GetMinValue(matrix),
      average: this.useCase.GetAverage(matrix),
      total_sum: this.useCase.GetTotalSum(matrix),
      is_diagonal: this.useCase.IsDiagonal(matrix),
    }
  }
}

export default StatisticUseCase
