import { audit }

from "../../Blockchain/audit";

export async function recordAudit(

type:number,

actor:string,

asset:string,

details:string

){

return audit(

type,

actor,

asset,

details

);

}
