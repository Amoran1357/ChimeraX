export function detectRegime(
  fearGreed:number
) {

  if (fearGreed > 75)
    return "EUPHORIA";

  if (fearGreed < 25)
    return "PANIC";

  return "NEUTRAL";

}
