import { Component, Input } from '@angular/core';
import { BasicsComponent } from '../basics/basics.component';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

interface CardModel {
  name:String;
  number:String;
  type:'gold' | 'silver' | 'platinum';
}

@Component({
  selector: 'app-user-card-view',
  standalone: true,
  imports: [],
  templateUrl: './user-card-view.component.html',
  styleUrl: './user-card-view.component.css'
})

//customizing components with input
export class UserCardViewComponent {

  myCardModel : CardModel | undefined;
  username_ : String = ''

  // @Input({
  //   required: true
  // }) userCardData1! : CardModel;

  //with default data
  @Input() userCardData: CardModel = {
    name: '--',
    number: '--',
    type: 'gold'
  };

  //input with setter
  @Input({ required:false }) 
  set Data(val : CardModel) {
    this.myCardModel = val
  }

  //input with setter 
  //check route here we're receiving the value from url
  @Input({ required:false }) 
  set username(username : string) {
    //got the username not we can do a api call or something to get the data from db

  }


}
