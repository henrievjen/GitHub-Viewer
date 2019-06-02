import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getPrimes(amount: number): number[] {
    let primes: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
  
    let returnedPrimes: number[] = [];

    for(let i = 0; i < amount; i++) {
      returnedPrimes.push(primes[i]);
    }

    return returnedPrimes;
  }

  range(from: number, to: number): number[] {
    let returnedArray: number[] = [];

    for(let i = from; i < to; i++) {
      returnedArray.push(i);
    }

    return returnedArray;
  }

}
