import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configurations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationsComponent {

}
