import QR from '@model/qr'
import { Statistics } from '@model/statistic'

interface UseCase {
  Statistic(data: QR): Promise<Statistics>
}

export default UseCase
