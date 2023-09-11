import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { PassengerService } from 'src/app/services/data/passenger.service';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { IDownloadable, WIDGET_TOKEN } from 'src/app/components/widget/widget.component';
import { DownloadService } from 'src/app/services/download.service';

@Component({
  selector: 'app-evolution-entry',
  standalone: true,
  imports: [
    CommonModule,
    NgChartsModule,
  ],
  templateUrl: './evolution-entry.component.html',
  styleUrls: ['./evolution-entry.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DownloadService,
    {
      provide: WIDGET_TOKEN,
      useExisting: EvolutionEntryComponent
    }
  ],
})
export class EvolutionEntryComponent implements OnInit, IDownloadable {
  evolutionEntryExit$ = inject(PassengerService).evolutionEntryExitByTrip()
  
  private downloadService = inject(DownloadService);
 
  public chartData!: ChartConfiguration<'bar'>['data'];
  public chartOptions!: ChartOptions<'bar'>;

  constructor() {
  
  }

  ngOnInit(): void {
    this.evolutionEntryExit$.subscribe(tripEntryExits => {
      const labels = tripEntryExits.map(tripEntryExit => tripEntryExit.trip);
      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'y',
        plugins: {
          legend: {
            position: 'bottom',
          }
        }, 
        scales: {
          x: {
            grid: {
              display: true,
            },
            max: Math.max(...tripEntryExits.map(tripEntryExit => Math.max(tripEntryExit.entry, tripEntryExit.exit))),
            ticks: {
              stepSize: 500,
              font: {
                size: 9.2,
              },
              callback: function (value, index, values) {
                const formatter = Intl.NumberFormat('en', { notation: 'compact' });
                return formatter.format(value as number)
              }
            }
          },
          y: {
            grid: {
              display: false,
            },
          }
        }
      };
      this.chartData = {
        labels: labels,
        datasets: [{
          label: 'Entry Passenger',
          backgroundColor: '#0DA6CE',
          data: tripEntryExits.map(tripEntryExit => tripEntryExit.entry)
        }, {
          label: 'Exit Passenger',
          backgroundColor: '#F6B80E',
          data: tripEntryExits.map(tripEntryExit => tripEntryExit.exit)
        }]
      };
    });
  }

  download() {
    this.downloadService.downloadFromJson(
      (this.chartData.labels as string[]).join(';')
      + "\n"
      + this.chartData.datasets.map(d => d.data.join(';')).join("\n"),
      'entry-evolution.csv'
    );
  }
}
