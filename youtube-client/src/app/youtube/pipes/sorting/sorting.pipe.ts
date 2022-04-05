import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../../../shared/models/response-item';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(results: ResponseItem[], sortTerm: string): ResponseItem[] {
    if (!results || !results.length || !sortTerm) return results;

    const [sortCriteria, sortDirection] = sortTerm.split('-');

    return results.sort((a, b) => {
      if (sortCriteria === 'date') {
        const aDate = new Date(a?.snippet?.publishedAt).getTime();
        const bDate = new Date(b?.snippet?.publishedAt).getTime();
        return (aDate - bDate) * (sortDirection === 'up' ? 1 : -1);
      }

      if (sortCriteria === 'views') {
        const aViews = Number(a?.statistics?.viewCount);
        const bViews = Number(b?.statistics?.viewCount);
        return (aViews - bViews) * (sortDirection === 'up' ? 1 : -1);
      }

      return 0;
    });
  }
}
