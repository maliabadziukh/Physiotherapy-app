import { Component, OnDestroy, OnInit } from '@angular/core';
import { Physio } from '../physio.model';
import { PhysiosService } from '../physios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-physios',
  templateUrl: 'physios.page.html',
  styleUrls: ['physios.page.scss'],
})
export class PhysiosPage implements OnInit, OnDestroy {
  physios: Physio[] = [];
  private physiosSub: Subscription;

  constructor(public physiosService: PhysiosService) {}

  ngOnInit(): void {
    this.physiosService.getPhysios();
    this.physiosSub = this.physiosService
      .getPhysiosUpdateListener()
      .subscribe((physios: Physio[]) => {
        this.physios = physios;
      });
  }
  ngOnDestroy(): void {
    this.physiosSub.unsubscribe();
  }
}
