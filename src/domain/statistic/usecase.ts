import UseCase from '@domain/statistic/statistic'
import QR from '@model/qr'

class StatisticUseCase implements UseCase {
  async FactorizeQR(matrix: number[][]): Promise<QR> {
    return Promise.resolve({ q: matrix, r: matrix })
  }
}

export default StatisticUseCase
