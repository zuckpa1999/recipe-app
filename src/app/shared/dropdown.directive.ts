import { HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirectives {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
