import {
  createPublicClient,
  http
} from "viem";

import { bsc }
from "viem/chains";

const client =
  createPublicClient({
    chain:bsc,
    transport:http()
  });

export async function getBalance(
  address:`0x${string}`
) {

  return client.getBalance({
    address
  });

}
