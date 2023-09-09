import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-overview-passenger',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule
  ],
  templateUrl: './overview-passenger.component.html',
  styleUrls: ['./overview-passenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewPassengerComponent {

}
