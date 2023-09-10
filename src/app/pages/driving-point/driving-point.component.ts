import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driving-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driving-point.component.html',
  styleUrls: ['./driving-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrivingPointComponent {

}
