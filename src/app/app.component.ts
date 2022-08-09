import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    HELLO am an Angular dec!!!!!
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
