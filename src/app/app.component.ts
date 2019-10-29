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
  values = [];
  counter = 0;
  
  onKey(value: string){
    this.value= value;
  }

  addZero(event: any){
    this.value += '0';
  }

  addOne(event: any){
    this.value += '1'
  }


  addBin(event: any){
      this.values[this.counter]=this.value;
      this.value='';
      this.counter++;                 //Pomyśleć czy nie dodawać od razu :)
      this.values[this.counter]="+";
      this.counter++;
  }

  subBin(event: any){
    this.values[this.counter]=this.value;
    this.value='';
    this.counter++;
    this.values[this.counter]="-";
    this.counter++;
  }

  clearBin(event: any){
    this.value= '';
    this.name= '';
    this.values = [];
    this.counter = 0;
  }

  // onChange($event){

  // to do html'a ->   (change)="onChange($event)
  //   this.name='';
  //   this.name += event.target.value;
  // }
}
