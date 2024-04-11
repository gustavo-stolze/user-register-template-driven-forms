import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStateService } from '../services/brazilian-states.service';

@Pipe({
  name: 'stateDescription',
})
export class StateDescriptionPipe implements PipeTransform {
  constructor(private readonly _stateService: BrazilianStateService) {}
  transform(stateId: number): string {
    return this._stateService.getStateDescription(stateId);
  }
}
