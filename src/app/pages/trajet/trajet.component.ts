import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trajet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrajetComponent {

}
