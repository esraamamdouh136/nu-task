import { HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  private requests: HttpRequest<any>[] = [];
  onStarted(req: HttpRequest<any>): void {
    this.requests.push(req);
    this.notify();
  }
  onFinished(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }
  
  /**
   * Notifies observers about whether there are any requests on fly
   */
  private notify(): void {
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }
}
