import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-violation-analysis',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './violation-analysis.component.html',
  styleUrls: ['./violation-analysis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViolationAnalysisComponent {

}
