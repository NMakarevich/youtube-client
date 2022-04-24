import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import { debounceTime, filter, fromEvent, map } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  public userName = 'User Name';

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly authService: AuthService,
  ) {}

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map((event: Event) => {
          const target = event.target as HTMLInputElement;
          return target.value;
        }),
        filter((text) => text.length > 3),
        debounceTime(500),
      )
      .subscribe((val) => this.youtubeService.searchVideosId(val));
  }

  toggleFilterState() {
    this.youtubeService.toggleFilterState();
  }

  getAuth() {
    return this.authService.getAuth();
  }

  logout() {
    this.authService.logout();
  }
}
