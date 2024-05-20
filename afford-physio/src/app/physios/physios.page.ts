import { Component } from '@angular/core';

@Component({
  selector: 'app-physios',
  templateUrl: 'physios.page.html',
  styleUrls: ['physios.page.scss'],
})
export class PhysiosPage {
  physios: string[] = [
    'John Smith',
    'Jane Doe',
    'Michael Johnson',
    'Emily Davis',
    'William Brown',
    'Olivia Wilson',
    'James Jones',
    'Ava Garcia',
    'Benjamin Martinez',
    'Sophia Rodriguez',
    'Lucas Hernandez',
    'Mia Lopez',
    'Henry Gonzalez',
    'Isabella Perez',
    'Alexander White',
    'Charlotte Lee',
    'Daniel Thompson',
    'Amelia Harris',
    'Matthew Clark',
    'Harper Lewis',
  ];
  constructor() {}
}
