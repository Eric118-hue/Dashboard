import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entry-exit-passenger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry-exit-passenger.component.html',
  styleUrls: ['./entry-exit-passenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryExitPassengerComponent {

}
