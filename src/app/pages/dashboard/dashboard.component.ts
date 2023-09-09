import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { GenericComponentComponent } from 'src/app/generic-component/generic-component.component';
import { OverviewPassengerComponent } from 'src/app/components/generic/overview-passenger/overview-passenger.component';
import { EntryExitPassengerComponent } from 'src/app/components/generic/entry-exit-passenger/entry-exit-passenger.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    GenericComponentComponent,
    OverviewPassengerComponent,
    EntryExitPassengerComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  menus = [
    {name:'Overview'},
    {name: 'Violations Analysis /100km'},
    {name: 'Trends'},
    {name: 'Trips & Passenger'}
  ]
}
