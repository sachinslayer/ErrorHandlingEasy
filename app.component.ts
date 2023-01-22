import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewError';
  throwError1() {
    try {
      eval("alert('ES6 Exception Handling)");
  } catch(e:any){
      console.warn("Error : " + e.name)
  }
  }

  throwError2() {
    var num = 5;
    var de_num = 0;
    try {
        if(de_num == 0) {
            throw "Divide by zero error";
        } else {
            var sol = num / de_num;
        }
    } catch(e) {
        console.error("Error : " + e);
    }
  }

}
