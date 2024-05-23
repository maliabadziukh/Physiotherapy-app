import { Injectable } from '@angular/core';
import { Physio } from './physio.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhysiosService {
  private physios: Physio[] = [];
  private physiosUpdated = new Subject<Physio[]>();

  constructor(private httpClient: HttpClient) {}

  getPhysios() {
    this.httpClient
      .get<{ message: string; physios: Physio[] }>(
        'http://localhost:3000/api/physios'
      )
      .subscribe((physioData) => {
        this.physios = physioData.physios;
        this.physiosUpdated.next([...this.physios]);
      });
  }
  getPhysiosUpdateListener() {
    return this.physiosUpdated.asObservable();
  }
}