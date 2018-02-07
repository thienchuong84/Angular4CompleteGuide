import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  logs = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret; // mỗi lần gọi nó trả về true -> false -> true -> false
    // this.log.push(this.log.length + 1);
    this.logs.push(new Date());
  }
}
