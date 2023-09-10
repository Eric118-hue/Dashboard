import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { PassengerService } from 'src/app/services/data/passenger.service';
import { TripOverview } from 'src/app/models/trip';
import { IDownloadable, WIDGET_TOKEN } from 'src/app/components/widget/widget.component';
import { DownloadService } from 'src/app/services/download.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-overview-passenger',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule
  ],
  templateUrl: './overview-passenger.component.html',
  styleUrls: ['./overview-passenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DownloadService,
    {
      provide: WIDGET_TOKEN,
      useExisting: OverviewPassengerComponent
    }
  ]
})
export class OverviewPassengerComponent implements OnInit, IDownloadable {
  private tripOverview: TripOverview | null = null;
  private downloadService = inject(DownloadService);

  public tripOverview$ = inject(PassengerService).tripOverview().pipe(map(overview => {
    this.tripOverview = overview;
    return overview;
  }))

  constructor() {

  }
  ngOnInit(): void {
  }

  download() {
    this.downloadService.downloadFromJson(
      'Sommanry;Average\n' + `${this.tripOverview?.sommanry};${this.tripOverview?.averragePassenger}`,
      'trip-overview.csv'
    );
  }
}
