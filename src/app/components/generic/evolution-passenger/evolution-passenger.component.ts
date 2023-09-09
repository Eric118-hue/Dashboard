import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evolution-passenger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evolution-passenger.component.html',
  styleUrls: ['./evolution-passenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvolutionPassengerComponent {

}
