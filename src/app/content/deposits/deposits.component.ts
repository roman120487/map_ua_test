import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DepositsDto, DepositsModel } from 'src/app/models/deposits.model';
import { SelectMineralModel } from 'src/app/models/select-region.model';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent implements OnInit {
  @Input() deposits: DepositsModel[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
