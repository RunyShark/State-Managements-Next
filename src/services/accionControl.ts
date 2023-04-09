import { Observable, Subject } from 'rxjs';

export type Tnext = string | boolean;

export class AccionControl {
  private subject$ = new Subject();

  public get getAccionControl(): Observable<unknown> {
    return this.subject$.asObservable();
  }

  public set setAccionControl(vale: Tnext) {
    this.subject$.next(vale);
  }
}

export const accionControl = new AccionControl();
