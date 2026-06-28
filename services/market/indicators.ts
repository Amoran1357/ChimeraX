export function volatility(

prices:number[]

){

const avg=

prices.reduce(

(a,b)=>a+b,

0

)/prices.length;

const variance=

prices.reduce(

(a,p)=>a+

Math.pow(

p-avg,

2

),

0

)/prices.length;

return Math.sqrt(

variance

);

}

export function momentum(

change24:number,

change7:number

){

return(

change24*0.6+

change7*0.4

).toFixed(2);

}

export function trend(

change:number

){

if(change>5)return"BULLISH";

if(change<-5)return"BEARISH";

return"NEUTRAL";

}
