import { Fraction, OUTCOMES, PROB_TO_ODDS } from "@/utils/constants"

const getTrueOdds = (resourceTiles: number[]): number => {
  const uniqueResourceTiles = [...new Set(resourceTiles)]
  const sumOfOutcomes = uniqueResourceTiles.reduce((sum, resourceTile) => {
    return sum + OUTCOMES[resourceTile]
  }, 0)
  return Number((sumOfOutcomes / (sumOfOutcomes + 6)).toFixed(2))
}

function getFractionAndNextWorstFraction(probability: number): Fraction[] {
  if (probability < 0 || probability > 1) {
    throw new Error("Probability must be between 0 and 1")
  }

  let fraction = PROB_TO_ODDS[0.02]
  let nextWorstFraction = PROB_TO_ODDS[0.01]
  for (const prob in PROB_TO_ODDS) {
    if (Number(prob) <= probability) {
      fraction = PROB_TO_ODDS[prob]
      break
    }
    nextWorstFraction = PROB_TO_ODDS[prob]
  }
  return [fraction, nextWorstFraction]
}

const getCasinoOdds = (fraction: Fraction) =>
  `${fraction.numerator} to ${fraction.denominator}`

const getHouseEdge = (oddsFraction: Fraction, payoutFraction: Fraction) => {
  return (
    1 -
    (payoutFraction.numerator * oddsFraction.denominator) /
      (oddsFraction.numerator * payoutFraction.denominator)
  )
}

function getInfo(resourceTiles: number[]) {
  const probability = getTrueOdds(resourceTiles)
  const [fraction, nextWorseFraction] =
    getFractionAndNextWorstFraction(probability)
  const odds = getCasinoOdds(fraction)
  const payouts = getCasinoOdds(nextWorseFraction)
  const houseEdgeProb = getHouseEdge(fraction, nextWorseFraction)
  const houseEdge = `${(houseEdgeProb * 100).toFixed(2)}%`
  return { payouts, odds, houseEdge }
}

export {
  getTrueOdds,
  getFractionAndNextWorstFraction,
  getCasinoOdds,
  getHouseEdge,
  getInfo,
}
