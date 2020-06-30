import { Component } from '@angular/core';

@Component({
  selector: 'server-root',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  
  // showSecret=false;
  log = [];

  onToggleDetails(){
    // this.showSecret=!this.showSecret;
    this.log.push(this.log.length +1);

  }
}
