const calculatePassingScore = (player) => {
    const yards = player.stats.passing.yards / 25
    const touchdowns = player.stats.passing.touchdowns * 6
    const interceptions = player.stats.passing.interceptions * -3
    
    return yards + touchdowns + interceptions
}
    //1 point for every 25 yards passing, 
    //6 points for every passing touchdown
    //-3 points for every interception,
const calculateRushingScore = (player) => {
    const yards = player.stats.rushing.yards / 10
    const touchdowns = player.stats.rushing.touchdowns * 6
    const fumbles = player.stats.rushing.fumbles * -3
    
    return yards + touchdowns + fumbles
}
    //1 point for every 10 yards rushing, 
    //6 points for every rushing touchdown,
    //-3 points for every rushing fumble,
const calculateReceivingScore = (player) => {
    const receptions = player.stats.receiving.receptions
    const yards = player.stats.receiving.yards / 10
    const touchdowns = player.stats.receiving.touchdowns * 6
    const fumbles = player.stats.receiving.fumbles * -3

    return receptions + yards + touchdowns + fumbles
}
    //1 point for every reception, 
    //1 point for every 10 yards receiving, 
    //6 points for every receiving touchdown, 
    //-3 points for every receiving fumble,
const calculateReturnScore = (player) => {
    const kickreturnyards = player.stats.return.kickreturn.yards / 15
    const kickreturntouchdowns = player.stats.return.kickreturn.touchdowns * 6
    const kickreturnfumbles = player.stats.return.kickreturn.fumbles * -3
    const puntreturnyards = player.stats.return.puntreturn.yards / 15
    const puntreturntouchdowns = player.stats.return.puntreturn.touchdowns * 6
    const puntreturnfumbles = player.stats.return.puntreturn.fumbles * -3
    
    return kickreturnyards + kickreturntouchdowns + kickreturnfumbles + puntreturnyards + puntreturntouchdowns + puntreturnfumbles
}
    //1 point for every 15 kick return yards, 
    //6 points for every kick return touchdown, 
    //-3 points for every kick return fumble, 
    //1 point for every 15 punt return yards, 
    //6 points for every punt return touchdown, 
    //-3 points for every punt return fumble
const calculateScore = (player) => {
    switch(player.position) {
//QB calcuate passing score
//   calculate rushing score
//   add rushing and passing scores together and return total
        case 'QB':
            return calculatePassingScore(player) + 
            calculateRushingScore(player)        
//RB calculate rushing score
//   calculate receiving score
//   calculate return score
//   add rushing, receiving, and return scores and return total
        case 'RB':
            return calculateRushingScore(player) + 
            calculateReceivingScore(player) + 
            calculateReturnScore(player) 
//WR calculate rushing score
//   calculate receiving score
//   calculate return score
//   add rushing, receiving, and return scores and return total
        case 'WR':
            return calculateRushingScore(player) + 
            calculateReceivingScore(player) + 
            calculateReturnScore(player)
//TE calculate receiving score
//   return total receiving score
        case 'TE':
            return calculateReceivingScore(player)
        default:
            return 0    
    }
}

module.exports = calculateScore

