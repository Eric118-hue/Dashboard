import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  menus = [
    {
      name: 'DASHBOARD', 
      routeLink:'/dashboard',
      icon: '/assets/icons/dashboard.svg'
    },
    {
      name: 'Live Tracking',
      routeLink:'/live-tracking',
      icon: '/assets/icons/icon-livetracking.svg'
    },
    {
      name: 'Reports',
      routeLink:'/reports',
      icon: '/assets/icons/ic-media-collection.svg',
      chevron:'/assets/icons/chevron-down.svg'
    },
    {
      name: 'Trajet', 
      routeLink:'/trajet',
      icon: '/assets/icons/route.svg', 
      chevron:'/assets/icons/chevron-down.svg'
    },
    {
      name: 'Passenger control', 
      routeLink:'/passenger-control',
      icon: '/assets/icons/siege.svg'
    },
    {
      name: 'Driving point', 
      routeLink:'/driving-point',
      icon: '/assets/icons/ic-actions-list-users.svg', 
      chevron:'/assets/icons/chevron-down.svg'
    },
  ]

  constructor(private rolseService: RoleService) {

  }

  ngOnInit(): void {
    this.rolseService.isSuperAdmin()
    .then(isAdmin => {
      if (isAdmin) this.menus.push({
        name: 'Configuration', 
        routeLink:'/configurations',
        icon: '/assets/icons/ic-media-mixer.svg',
        chevron:'/assets/icons/chevron-down.svg'
      })
    })
  }
}
