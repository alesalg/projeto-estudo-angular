import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor() { }

  sortear(nomes: string[]): Observable<string> {
    return new Observable((Subscriber) => {
      if(nomes.length === 1) {
        Subscriber.error('Lista Vazia')
      }else {
        const sorteado = Math.floor(Math.random() * nomes.length);

        Subscriber.next(nomes[sorteado]);
        Subscriber.complete();
      }
    });
  }
}
