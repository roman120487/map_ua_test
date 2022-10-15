import { Component, OnInit } from '@angular/core';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { BehaviorSubject } from 'rxjs';
import { DepositsDto, ServerResponseDto } from 'src/app/models/deposits.model';
import { DepositsService } from 'src/app/services/deposits.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends OnDestroyMixin implements OnInit {
  deposits$: BehaviorSubject<DepositsDto[]> = new BehaviorSubject([{}])
  constructor(
    private depositsService: DepositsService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.getDeposits();
  }

  onSelectMineral(event: DepositsDto): void {
    this.deposits$.next(
      this.deposits$.getValue().map((elem: DepositsDto) => {
        return {
          ...elem,
          selected: elem.id === event.id ? true : false
        }
      })
    )
  }

  getDeposits(): void {
    this.depositsService.getDepositList().pipe(
      untilComponentDestroyed(this),
    ).subscribe((res: ServerResponseDto) => {
      this.deposits$.next(res.deposits)
    });
  }

}
