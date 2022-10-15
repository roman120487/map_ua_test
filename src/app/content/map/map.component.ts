import { Component, HostListener, OnInit } from '@angular/core';
import { DepositsDto } from 'src/app/models/deposits.model';
import { DepositsService } from 'src/app/services/deposits.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // deposits$: DepositsModel;
  constructor(
    private depositsService: DepositsService,
  ) { }

  ngOnInit(): void {
    this.getDeposits();
  }

  getDeposits(): void {
    this.depositsService.getJSON().pipe(
      // need set unsubscribe
    ).subscribe((res) => {
      console.log(res);

    });
  }

  onSelect(event: EventTarget | any): void {
    const id: string = event?.attributes?.id.nodeValue;
    const title: string = event?.attributes?.title.nodeValue;
    console.log('id', id);
    console.log('title', title);

  }

}
