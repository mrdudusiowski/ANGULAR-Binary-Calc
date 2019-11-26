import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binary Calculator';
  value = '';
  values = [];
  binary = '';
  decimal = 0;

  onKey(ev: KeyboardEvent, value: string){
    console.log(ev);
    if(ev.key != "0" && ev.key != "1"){
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
      if(this.values[(length-1)]!='+'|| this.values[(length-1)]!='-'){
        this.value+='+';
        this.tableOperation();
      }
      else{
        this.value;
      }
  }


  subBin(event: any){
    if(this.values[(length-1)]!='+'|| this.values[(length-1)]!='-'){
      this.value+='-';
      this.tableOperation();
    }
    else{
      this.value;
    }
  }

  clearBin(event: any){
    this.value= '';
    this.values = [];
    this.binary = '';
    this.decimal = 0;
  }

  endBin(event: any){ 
    if(this.values.length >= 2){
        if(this.values[this.values.length] != '-' && this.values[this.values.length] != '+'){
          this.values[this.values.length] = this.value;
        }

        for(let i=0; i < this.values.length; i++){
          if(this.values[i]!='+' && this.values[i]!='-'){
              this.values[i]=parseInt(this.values[i],2);
          }
        }
        if(this.values[1]=='+'){
          this.decimal = this.values[0]+this.values[2];
        }
        if(this.values[1]=='-'){
          this.decimal = this.values[0]-this.values[2];
        }

        this.binary = this.decimal.toString(2);
        this.value = this.binary;
        this.values = [];
        this.binary = '';
        this.decimal = 0;
    }
  }

  tableOperation(){
    this.values[this.values.length]=this.value.substring(0,this.value.length-1);
    this.values[this.values.length]=this.value[this.value.length-1];
    this.value='';
  }
}
