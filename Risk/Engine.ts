export async function
riskEngine(
  confidence:number
) {

  if(confidence < 50) {

    return {
      approved:false
    };

  }

  return {

    approved:true,

    maxPositionSize:5

  };

}
