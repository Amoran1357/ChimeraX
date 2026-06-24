const reputation = {

  governance: 0,
  staking: 0,
  contributions: 0,
  transactions: 0

};

export function updateReputation(
  category: string,
  points: number
) {

  reputation[category] += points;

}

export function getReputation() {

  return reputation;

}
