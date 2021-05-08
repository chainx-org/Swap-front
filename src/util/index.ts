import {decodeAddress, encodeAddress} from "@polkadot/keyring";

export function ChangeChainXAddress(address: string){
   return encodeAddress(decodeAddress(address),44)
}

export function convertBalanceToDisplayValue(balance:  undefined | number): number {
   if (!balance) {
     return 0;
   } else if (typeof balance === "number") {
     return balance / 100000000;
   } else {
     return balance / 100000000;
   }
 }

 export default ChangeChainXAddress;