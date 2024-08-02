interface UseCase {
  GetMaxValue(matrix: number[][]): number
  GetMinValue(matrix: number[][]): number
  GetAverage(matrix: number[][]): number
  GetTotalSum(matrix: number[][]): number

  IsDiagonal(matrix: number[][]): boolean
}

export default UseCase
