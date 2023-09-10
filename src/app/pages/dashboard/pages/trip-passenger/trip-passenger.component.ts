import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from 'src/app/components/widget/widget.component';
import { OverviewPassengerComponent } from '../../components/overview-passenger/overview-passenger.component';
import { EntryExitPassengerComponent } from '../../components/entry-exit-passenger/entry-exit-passenger.component';
import { EvolutionPassengerComponent } from '../../components/evolution-passenger/evolution-passenger.component';
import { EvolutionEntryComponent } from '../../components/evolution-entry/evolution-entry.component';

@Component({
  selector: 'app-trip-passenger',
  standalone: true,
  imports: [
    CommonModule,
    WidgetComponent,
    OverviewPassengerComponent,
    EntryExitPassengerComponent,   
    EvolutionPassengerComponent, 
    EvolutionEntryComponent,
  ],
  templateUrl: './trip-passenger.component.html',
  styleUrls: ['./trip-passenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripPassengerComponent {

}
