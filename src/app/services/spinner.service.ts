import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public loading = new BehaviorSubject<boolean>(false);

  constructor() { }

  showSpinner() {
    this.loading.next(true);
  }

  hideSpinner() {
    this.loading.next(false);
  }
}
