const reputation = {

  Momentum: 100,
  Narrative: 100,
  Whale: 100,
  Risk: 100,
  Chaos: 100

};

export function reward(elder:string) {

  reputation[elder] += 5;

}

export function punish(elder:string) {

  reputation[elder] -= 5;

}

export function getReputation() {

  return reputation;

}
