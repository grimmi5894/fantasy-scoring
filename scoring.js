const calculatePassingScore = (player) => {
  const yards = player.stats.passing.yards / 25
  const touchdowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * -3

  return yards + touchdowns + interceptions
}

