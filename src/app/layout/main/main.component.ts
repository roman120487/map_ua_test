import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { DepositsDto, ServerResponseDto } from 'src/app/models/deposits.model';
import { SelectMineralModel } from 'src/app/models/select-region.model';
import { DepositsService } from 'src/app/services/deposits.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  deposits$: BehaviorSubject<DepositsDto[]> = new BehaviorSubject([{}])
  constructor(
    private depositsService: DepositsService,
  ) {
  }

  ngOnInit(): void {
    this.getDeposits();
  }

  onSelectMineral(event: DepositsDto): void {
    console.log(event);
    this.deposits$.next(
      this.deposits$.getValue().map((elem: DepositsDto) => {
        console.log(elem);
        
        return {
          ...elem,
          selected: elem.id === event.id ? true : false
        }
      })
    )
  }

  getDeposits(): void {
    this.depositsService.getDepositList().pipe(
      // need unsubscribe
    ).subscribe((res: ServerResponseDto) => {
      this.deposits$.next(res.deposits)
    });
  }

}
