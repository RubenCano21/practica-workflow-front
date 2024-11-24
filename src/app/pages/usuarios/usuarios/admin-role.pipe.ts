import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminRole',
  standalone: true
})
export class AdminRolePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'ADMIN' : 'USER';
  }

}
