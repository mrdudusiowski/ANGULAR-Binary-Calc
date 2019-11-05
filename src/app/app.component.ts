import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binary Calculator';
  value= '';
  name= '';
  result=0;
  stringResult='';
  signTab=[];
  i=0;

  onKey(ev: KeyboardEvent, value: string){
    console.log(ev);
    if(ev.key !== "0" && ev.key !== "1"){
      ev.preventDefault();
    }

    this.value= value;
  }


  addZero(event: any){
    this.value += '0';
  }

  addOne(event: any){
    this.value += '1';
  }


  addBin(event: any){     
      if(this.value !== '0' && this.value !== ''){
        this.result += parseInt(this.value,2);
        this.value='';
      }
      else{
        this.result+=0;
      }
      this.signTab[this.i]+='+';
      this.i++;
     }


  subBin(event: any){
    if(this.value !== '0' && this.value !== ''){
      this.result -= parseInt(this.value,2);
      this.value='';
    }
    else{
      this.result+=0;
    }
    this.signTab[this.i]+='-';
    this.i++;
  }

  clearBin(event: any){
    this.value= '';
    this.name= '';
    this.result=0;
    this.signTab = [];
    this.i=0;
  }

  endBin(event: any){
    if(this.signTab[(this.signTab.length)-1]=='+'){
      this.result += parseInt(this.value,2);
    }
    else{
      this.result -= parseInt(this.value,2);  
    }
    this.stringResult=this.result.toString();
    this.value=parseInt(this.stringResult,10).toString(2);

    this.signTab = [];
    this.i=0;
  }

  // onChange($event){

  // to do html'a ->   (change)="onChange($event)
  //   this.name='';
  //   this.name += event.target.value;
  // }
}
