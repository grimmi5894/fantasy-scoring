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
