const cache = new Map();

export function getCache(key:string){

const item=cache.get(key);

if(!item) return null;

if(item.expiry<Date.now()){

cache.delete(key);

return null;

}

return item.value;

}

export function setCache(

key:string,

value:any,

ttl:number=30000

){

cache.set(

key,

{

value,

expiry:Date.now()+ttl

}

);

}
