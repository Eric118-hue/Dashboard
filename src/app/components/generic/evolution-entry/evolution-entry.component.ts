import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evolution-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evolution-entry.component.html',
  styleUrls: ['./evolution-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvolutionEntryComponent {

}
