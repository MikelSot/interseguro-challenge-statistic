export interface Statistic {
  max_value: number
  min_value: number
  average: number
  total_sum: number
  is_diagonal: boolean
}

export interface Statistics {
  statistic_q: Statistic
  statistic_r: Statistic
}
