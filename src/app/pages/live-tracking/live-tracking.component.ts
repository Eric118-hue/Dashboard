import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-tracking.component.html',
  styleUrls: ['./live-tracking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveTrackingComponent {

}
