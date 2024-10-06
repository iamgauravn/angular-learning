import { Component, computed, Output, signal  } from '@angular/core';
import { UserCardViewComponent } from '../user-card-view/user-card-view.component';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'events';
import { last, single } from 'rxjs';

interface CardModel {
  name:String;
  number:String;
  type:'gold' | 'silver' | 'platinum';
}

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [UserCardViewComponent, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {

  counter = 5;
 
  constructor(private router : Router) {

  }


  //signal
  firstName = signal("gaurav")
  lastName = signal("nandankar");

  //computed
  fullName = computed(()=>`${this.firstName()} ${this.lastName()}`)
  
  // starts

  //this is how we send data to another component
  @Output() selectedCard = new EventEmitter<any>();
  sendDataToAnotherComponent() {
    this.selectedCard.emit(this.cardList)

    this.router.navigate(['output-view']);

  }

  // ends

  username : string | undefined | null = "";
  password : string | undefined | null = "";

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  handleSubmit() {
    this.showMebaby(this.loginForm.value.username,this.loginForm.value.password);
  }

  showMebaby(username:string | undefined | null, password : string | undefined | null) {
    this.username = username;
    this.password = password;
  }

  card : CardModel = {
    name: "username1",
    number: "123",
    type: "gold"
  };

  cardList : Array<CardModel> = [
    {
      name: "username1",
      number: "123",
      type: "gold"
    },
    {
      name: "username2",
      number: "123",
      type: "silver"
    },
    {
      name: "username3",
      number: "123",
      type: "platinum"
    },
    {
      name: "username4",
      number: "123",
      type: "gold"
    },
    {
      name: "username5",
      number: "123",
      type: "silver"
    },
    {
      name: "username6",
      number: "123",
      type: "platinum"
    }
  ];

  //property binding
  isDisabled : Boolean = true;

  //event handling
  isEnabled = false;
  handleClick() {

  }

}
