import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passenger-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './passenger-control.component.html',
  styleUrls: ['./passenger-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassengerControlComponent {

}
