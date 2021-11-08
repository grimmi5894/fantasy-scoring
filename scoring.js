const calculatePassingScore = (player) => {
  const yards = player.stats.passing.yards / 25
  const touchdowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * -3

  return yards + touchdowns + interceptions
}

const calculateRushingScore = (player) => {
  const yards = player.stats.rushing.yards / 10
  const touchdowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * -3

  return yards + touchdowns + fumbles
}

const calculateReceivingScore = (player) => {
  const receptions = player.stats.receiving.receptions
  const yards = player.stats.receiving.yards / 10
  const touchdowns = player.stats.receiving.touchdowns * 6
  const fumbles = player.stats.receiving.fumbles * -3

  return receptions + yards + touchdowns + fumbles
}

const calculateReturnScore = (player) => {
  const kickReturnYards = player.stats.return.kickreturn.yards / 15
  const kickReturnTouchdowns = player.stats.return.kickreturn.touchdowns * 6
  const kickReturnFumbles = player.stats.return.kickreturn.fumbles * -3
  const puntReturnYards = player.stats.return.puntreturn.yards / 15
  const puntReturnTouchdowns = player.stats.return.puntreturn.touchdowns * 6
  const puntReturnFumbles = player.stats.return.puntreturn.fumbles * -3

  return kickReturnYards + kickReturnTouchdowns + kickReturnFumbles +
    puntReturnYards + puntReturnTouchdowns + puntReturnFumbles
}

const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return calculatePassingScore(player) +
        calculateRushingScore(player)
    case 'RB':
      return calculateRushingScore(player) +
        calculateReceivingScore(player) +
        calculateReturnScore(player)
    case 'WR':
      return calculateRushingScore(player) +
      calculateReceivingScore(player) +
      calculateReturnScore(player)
    case 'TE':
      return calculateReceivingScore(player)
    default:
      return 0
  }
}

module.exports = calculateScore
