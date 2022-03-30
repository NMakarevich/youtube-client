import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../../interfaces/response-item';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(results: ResponseItem[], sortTerm: string): ResponseItem[] {
    if (!results || !sortTerm) return results;

    const sortParams = sortTerm.split('-');
    const sortCriteria = sortParams[0];
    const sortDirection = sortParams[1] === 'up' ? 1 : -1;

    return results.sort((a, b) => {
      if (sortCriteria === 'date') {
        const aDate = new Date(a?.snippet?.publishedAt).getTime();
        const bDate = new Date(b?.snippet?.publishedAt).getTime();
        return (aDate - bDate) * sortDirection;
      }

      if (sortCriteria === 'views') {
        const aViews = Number(a?.statistics?.viewCount);
        const bViews = Number(b?.statistics?.viewCount);
        return (aViews - bViews) * sortDirection;
      }

      return 0;
    });
  }
}
