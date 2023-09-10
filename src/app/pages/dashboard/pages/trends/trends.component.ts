import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendsComponent {

}
