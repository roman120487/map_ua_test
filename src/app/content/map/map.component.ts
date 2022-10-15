import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DepositsDto, DepositsModel } from 'src/app/models/deposits.model';
import { SelectMineralModel } from 'src/app/models/select-region.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() deposits: DepositsModel[] | null;
  @Output() selectMineral: EventEmitter<SelectMineralModel> = new EventEmitter();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,// add custom icon,
  ) {
    this.matIconRegistry.addSvgIcon('coal', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/coal.svg'));
    this.matIconRegistry.addSvgIcon('oil', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/oil.svg'));
    this.matIconRegistry.addSvgIcon('salt', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/salt.svg'));

  }

  ngOnInit(): void {

  }

  onSelect(event: EventTarget | any): void {
    const id: string = event?.attributes?.id?.nodeValue;
    const region: string = event?.attributes?.region?.value;
    const mineral: string = event?.attributes?.mineral?.value;

    this.selectMineral.emit({ id, region, mineral })
  }

}
