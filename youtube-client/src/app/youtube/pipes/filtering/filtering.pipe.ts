import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../../../shared/models/response-item';

@Pipe({
  name: 'filtering',
})
export class FilteringPipe implements PipeTransform {
  transform(results: ResponseItem[], filterTerm: string): ResponseItem[] {
    if (!results || !results.length || !filterTerm) return results;

    return results.filter((result) =>
      result?.snippet?.title.toLowerCase().includes(filterTerm.toLowerCase()),
    );
  }
}
