import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filesize' })
export class FileSizePipe implements PipeTransform {
    transform(size: number): string {
        console.log(size);
        return (size / (1024 * 1024)).toFixed(2) + 'MB';
      }
}