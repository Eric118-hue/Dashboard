import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerService } from 'src/app/services/data/passenger.service';
import { IDownloadable, WIDGET_TOKEN } from 'src/app/components/widget/widget.component';
import { DownloadService } from 'src/app/services/download.service';
import { map } from 'rxjs';
import { TripEntryExit } from 'src/app/models/trip';

@Component({
  selector: 'app-entry-exit-passenger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry-exit-passenger.component.html',
  styleUrls: ['./entry-exit-passenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DownloadService,
    {
      provide: WIDGET_TOKEN,
      useExisting: EntryExitPassengerComponent
    }
  ]
})
export class EntryExitPassengerComponent implements IDownloadable {
  protected downloadService = inject(DownloadService);
  
  public entryExit: {
    inTransit: TripEntryExit;
    inTown: TripEntryExit;
  } | null = null;

  public entryExit$ = inject(PassengerService).passengerEntryExit().pipe(map(entryExit => {
    this.entryExit = entryExit;
    return entryExit;
  }));

  constructor() {
    
  }
  
  download(): void {
    this.entryExit
    this.downloadService.downloadFromJson(
      "In town;;In transit;\n" + 
      "entry;exit;entry;exit\n" + 
      `${this.entryExit?.inTown.entry};${this.entryExit?.inTown.exit};${this.entryExit?.inTransit.entry};${this.entryExit?.inTransit.exit}`,
      'passenger-entry-exit.csv'
    );
  }
}
