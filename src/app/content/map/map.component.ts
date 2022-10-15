import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectMineralModel } from 'src/app/models/select-region.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // deposits$: DepositsDto;
  @Output() selectMineral: EventEmitter<SelectMineralModel> = new EventEmitter();
  constructor(

  ) { }

  ngOnInit(): void {

  }



  onSelect(event: EventTarget | any): void {
    const id: string = event?.attributes?.id.nodeValue;
    const region: string = event?.attributes?.title.nodeValue;
    this.selectMineral.emit({ id, region })
  }

}
