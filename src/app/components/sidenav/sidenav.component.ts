import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  menus = [
    {name: 'DASHBOARD', routeLink:'/dashboard', icon: '../../../assets/icons/dashboard.svg'},
    {name: 'Live Tracking', icon: '../../../assets/icons/icon-livetracking.svg'},
    {name: 'Reports', icon: '../../../assets/icons/ic-media-collection.svg', chevron:'../../../assets/icons/chevron-down.svg'},
    {name: 'Trajet', icon: '../../../assets/icons/route.svg', chevron:'../../../assets/icons/chevron-down.svg'},
    {name: 'Passenger control', icon: '../../../assets/icons/siege.svg'},
    {name: 'Driving point', icon: '../../../assets/icons/ic-actions-list-users.svg', chevron:'../../../assets/icons/chevron-down.svg'},
    {name: 'Configuration', icon: '../../../assets/icons/ic-media-mixer.svg'},
  ]
}
