import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseItemById } from '../../../shared/models/response-item-by-id';
import { concatAll, first, map, Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent implements OnInit {
  public result$!: Observable<ResponseItemById>;

  constructor(private readonly router: Router, private readonly apiService: ApiService) {}

  ngOnInit() {
    const id = this.router.url.replace('/search/', '');
    this.result$ = this.apiService.getVideosById([id]).pipe(
      map((response) => response.items),
      concatAll(),
      first(),
    ) as Observable<ResponseItemById>;
  }

  goBack() {
    this.router.navigate(['..']);
  }
}
