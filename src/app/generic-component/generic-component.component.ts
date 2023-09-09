import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './generic-component.component.html',
  styleUrls: ['./generic-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericComponentComponent implements AfterViewInit {
  @Input('title') tit?: any 

  constructor(){}

  ngAfterViewInit(): void {
    console.log(this.tit);
    
  }
}
