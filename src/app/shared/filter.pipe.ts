import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      if (it.title) {
        return it.title.toLowerCase().includes(searchText);
      } else if (it.program) {
        const year = new Date(it.startDate).getFullYear();
        const reviewTitle = (`${it.program.name.toLowerCase()} ${year}-${year + 1}`);
        return reviewTitle.includes(searchText);
      }
    });
  }
}
