import UseCase from '@domain/matrix/matrix'
import ErrorResponse from '../error/error'

class MatrixUseCase implements UseCase {
  GetMaxValue(matrix: number[][]): number {
    return Math.max(...matrix.flat())
  }

  GetMinValue(matrix: number[][]): number {
    return Math.min(...matrix.flat())
  }

  GetAverage(matrix: number[][]): number {
    const flatMatrix = matrix.flat()
    const sum = flatMatrix.reduce((acc, value) => acc + value, 0)

    return sum / flatMatrix.length
  }

  GetTotalSum(matrix: number[][]): number {
    return matrix.flat().reduce((acc, value) => acc + value, 0)
  }

  IsDiagonal(matrix: number[][]): boolean {
    const rows = matrix.length
    const cols = matrix[0].length

    if (rows !== cols) {
      console.warn('Error', 'Una matriz no cuadrada no puede ser diagonal')

      new ErrorResponse('InvalidMatrix', 'Una matriz no cuadrada no puede ser diagonal')

      return false
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (i !== j && matrix[i][j] !== 0) {
          return false
        }
      }
    }

    return true
  }
}

export default MatrixUseCase
