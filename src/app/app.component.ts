import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    SidenavComponent,
    HeaderComponent,
    FilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'TestDev_Fabruce_Eric';
  @ViewChild(MatSidenav) matSide!: MatSidenav

  constructor(private breakPoint: BreakpointObserver, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    console.log(this.matSide, this.breakPoint);
    this.breakPoint.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.matSide.mode = "over";
        this.matSide.close();
      } else {
        this.matSide.mode = "side";
        this.matSide.open();
      }
    });
    this.cdr.detectChanges()
  }
}
