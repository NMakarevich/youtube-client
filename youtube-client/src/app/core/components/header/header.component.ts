import { Component } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Store } from '@ngrx/store';
import { searchVideos } from '../../../redux/actions/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public userName = 'User Name';

  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly authService: AuthService,
    private readonly store: Store,
  ) {}

  toggleFilterState() {
    this.youtubeService.toggleFilterState();
  }

  getAuth() {
    return this.authService.getAuth();
  }

  logout() {
    this.authService.logout();
  }

  setSearchTerm($event: Event) {
    this.store.dispatch(searchVideos({ event: $event }));
  }
}
