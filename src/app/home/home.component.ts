import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../data.service';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  // animations: [
  //   trigger("goals", [
  //     transition("*=>*", [
  //       transition(":enter", [
  //         style({ opacity: 0 }),
  //         animate("0.5s ease-out", style({ opacity: 0 }))
  //       ]),
  //       transition(":leave", [animate("1s ease-out", style({ opacity: 1 }))])
  //     ])

  //     //   transition('* => *', [
  //     //     query(': enter', style({ opcacity: 0 }), {optional: true} ),
  //     //     query(': enter', stagger('300ms' , [
  //     //        animate('.6s ease-in ', keyframes([
  //     //          style({oacity: 0 , transform: 'translateY(-70%)' , offset: 0 }),
  //     //          style({oacity: 0.5 , transform: 'translateY(35px)' , offset: 0.3 }),
  //     //          style({oacity: 1 , transform: 'translateY(0)' , offset: 1 }),
  //     //        ]))]), {optional: true})
  //     //   ])
  //   ])
  // ]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string = "Add an item";
  goalText: string = "My first life goal";
  goals = [];
  constructor(private _data : DataService) {}

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
}
