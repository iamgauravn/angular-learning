import { Component, Input } from '@angular/core';
 
interface CardModel {
  name:String;
  number:String;
  type:'gold' | 'silver' | 'platinum';
}

@Component({
  selector: 'app-output-component',
  standalone: true,
  imports: [],
  templateUrl: './output-component.component.html',
  styleUrl: './output-component.component.css'
})

//this component has the same output but don't get confused by this actually 
//this is the component which get the data from another component let's say if you want to pass 10,000+ 
// users data from one component to another this is how to catch the data 

export class OutputComponentComponent {

    //with default data
    @Input() userCardData: CardModel = {
      name: '--',
      number: '--',
      type: 'gold'
    };
   
}
