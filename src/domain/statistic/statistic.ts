import QR from '@model/qr'

interface UseCase {
  FactorizeQR(matrix: number[][]): Promise<QR>
}

export default UseCase
