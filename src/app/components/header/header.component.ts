import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserService } from 'src/app/services/user.service';
import { AppService } from 'src/app/services/app.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private appService = inject(AppService);
  public user$ = inject(UserService).getUserInfo();
  public lightMode = true;

  setMode() {
    this.lightMode = !this.lightMode;
    this.appService.setLightMode(this.lightMode ? 'light' : 'dark');
  }
}
