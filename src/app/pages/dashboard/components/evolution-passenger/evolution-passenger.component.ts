import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { PassengerService } from 'src/app/services/data/passenger.service';
import { IDownloadable, WIDGET_TOKEN } from 'src/app/components/widget/widget.component';
import { DownloadService } from 'src/app/services/download.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-evolution-passenger',
  standalone: true,
  imports: [
    CommonModule,
    NgChartsModule,
  ],
  templateUrl: './evolution-passenger.component.html',
  styleUrls: ['./evolution-passenger.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DownloadService,
    {
      provide: WIDGET_TOKEN,
      useExisting: EvolutionPassengerComponent
    }
  ],
})
export class EvolutionPassengerComponent implements IDownloadable {
  private downloadService = inject(DownloadService);

  public evolutionTrip$ = inject(PassengerService).evolutionByTrip()
  public chartData!: ChartConfiguration<'bar'>['data'];
  public chartOptions!: ChartOptions<'bar'>;
  public chartPlugins = [ChartDataLabels];

  constructor() {
    this.evolutionTrip$.subscribe(tripPassengers => {
      const labels = tripPassengers.map(tripPassenger => tripPassenger.trip);
      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: '#FFFFFF',
            anchor: 'end',
            align: 'left',
          }
        }, 
        scales: {
          x: {
            grid: {
              display: true,
            },
            max: Math.max(...tripPassengers.map(tripPassenger => tripPassenger.passenger)),
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
        },
        layout: {
          padding: 0,
          
        }
      };
      this.chartData = {
        labels: labels,
        datasets: [{
          backgroundColor: '#0DA6CE',
          data: tripPassengers.map(tripPassenger => tripPassenger.passenger)
        }]
      };
    })
  }

  download() {
    this.downloadService.downloadFromJson(
      (this.chartData.labels as string[]).join(';')
      + "\n"
      + this.chartData.datasets.map(d => d.data.join(';')).join("\n"),
      'passenger-evolution.csv'
    );
  }
}
