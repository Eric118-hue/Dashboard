import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, InjectionToken, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

export interface IDownloadable {
  download(): void;
}

export const WIDGET_TOKEN: InjectionToken<IDownloadable> = new InjectionToken('Downloadable widget');

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements AfterViewInit {
  @Input('title') tit?: any 
  
  @ContentChild(WIDGET_TOKEN) content!: IDownloadable;

  constructor(){}

  ngAfterViewInit(): void {
    
  }

  download(): void {
    if(this.content) this.content.download();
  }
}
