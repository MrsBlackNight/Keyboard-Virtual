import { Component, Directive } from '@angular/core';
import { KeyboardService } from './keyboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'keyboard';
  valueInput: string = "";
  constructor(private keyboardService: KeyboardService) {

  }

  getInputValue(event: any){
    this.valueInput += event.target.value;
    console.log(this.valueInput)
    if(this.valueInput.length == 12){
      //check recovery
      console.log(this.valueInput)
    }
  }

  checkInputCode(){

  }

  move(event: any, p: any, c: any, n: any) {
    const length = c.value.length;
    const maxLength = c.getAttribute('maxlength');
    //Khi input di chuyển đi
    if (length == maxLength) {
      if (n != '') {
        n.focus();
      }
    }
    //Khi xóa
    else if (length != maxLength){
      if(p!= '' && length < 2 ){
        if(length < maxLength && n == ''){
          p.focus()
        }
        //Khi xóa từ giữa dòng 1 kí tự
        else if (length < maxLength && p.value.length == maxLength && n.value.length == maxLength){
          c.focus()
        } 
        //Khi xóa từ cuối dòng
        else{
          p.focus()
        }
      }
      this.valueInput == ""
      console.log (this.valueInput)
    }
  }

  onBackspace() {
    this.keyboardService.fireBackspacePressed();
  }
  onEnter() {
    this.keyboardService.fireEnterPressed();
  }
  getLengthInput() {}
}
