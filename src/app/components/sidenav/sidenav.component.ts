import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  menus = [
    {name: 'DASHBOARD', icon: '../../../assets/icons/dashboard.svg'},
    {name: 'Live Tracking', icon: '../../../assets/icons/icon-livetracking.svg'},
    {name: 'Reports', icon: '../../../assets/icons/ic-media-collection.svg'},
    {name: 'Trajet', icon: '../../../assets/icons/route.svg'},
    {name: 'Passenger control', icon: '../../../assets/icons/siege.svg'},
    {name: 'Driving point', icon: '../../../assets/icons/ic-actions-list-users.svg'},
    {name: 'Configuration', icon: '../../../assets/icons/ic-media-mixer.svg'},

  ]
}
