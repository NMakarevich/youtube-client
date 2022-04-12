import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import { debounceTime, filter, fromEvent, map } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public userName = 'User Name';

  public auth!: boolean;

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.subject.subscribe((value) => (this.auth = value));
  }

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

  logout() {
    this.youtubeService.logout();
    this.authService.subject.next(false);
    this.authService.subject.subscribe((value) => (this.auth = value));
  }
}
