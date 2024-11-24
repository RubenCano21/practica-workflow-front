import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roles',
  standalone: true
})
export class RolesPipe implements PipeTransform {

  transform(roles:{name: string}[]): string {
    return roles.map(role => role.name.split('_').pop()).join(' , ');
  }

}
