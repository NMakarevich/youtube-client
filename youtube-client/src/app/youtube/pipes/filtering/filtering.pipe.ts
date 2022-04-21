import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItemById } from '../../../shared/models/response-item-by-id';

@Pipe({
  name: 'filtering',
})
export class FilteringPipe implements PipeTransform {
  transform(results: ResponseItemById[], filterTerm: string): ResponseItemById[] {
    if (!results || !results.length || !filterTerm) return results;

    return results.filter((result) =>
      result?.snippet?.title.toLowerCase().includes(filterTerm.toLowerCase()),
    );
  }
}
