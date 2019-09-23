import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUSD'
})

export class ConvertUSDPipe implements PipeTransform {
   transform(value: any, args?: any): any {
      return (value * 0.76).toFixed(2);
   }
}


@Pipe({
    name: 'convertEURO'
})

export class ConvertEUROPipe implements PipeTransform {
    transform(value: any, args?: any): any {
       return (value * 0.67).toFixed(2);
    }
 }
 