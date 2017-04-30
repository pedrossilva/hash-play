import {Component, OnInit, Input} from '@angular/core';
import {FormControl, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  private playerX:boolean = true;
  private list:Array<any> = Array(9).fill(null);
  private count:number = 0;
  private winner:string;
  private draw:boolean = false;
  private winners:any = {};
  private history:any = [];
  private round:number = 0;
  private end:boolean = false;
  @Input() dataForm:any;


  constructor() {}

  choice(position:number) {
    if(this.winner) return;
    if(this.list[position] === null) {
      this.list[position] = this.playerX === true ? 'x' : 'o';
      this.playerX = !this.playerX;
      this.count++;

      if(this.count > 2) {
        let winner = this.checkWinner();
        if(winner != null) {
          setTimeout(
            () => {
              // alert(winner+' Winner!');
              this.winner = winner;
              this.history[this.round].win = winner;
              this.checkEnd();
            }
          )
        }
        else if(this.count == 9) {
          setTimeout(
            () => {
              this.draw = true;
              this.checkEnd();
            }
          )
        }
      }


    }
  }

  checkWinner():string {
    let possibilyties:Array<Array<number>> = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]

    for(let i=0; i<possibilyties.length; i++) {
      let [a, b, c] = possibilyties[i];
      let first = this.list[a];
      if(first == null) continue;
      if(first != this.list[b]) continue;
      if(first == this.list[c]) {
        possibilyties[i].map(p => this.winners[p] = true);
        return first;
      }
    }

    return null;
  }

  checkEnd() {
    if(this.round >= this.dataForm.rounds-1) {
      this.end = true;
      console.log('history', this.history);
    }
  }

  newRound() {
    this.playerX = true;
    this.count = 0;
    this.winner = undefined;
    this.draw = false;
    this.winners = {};
    this.list = Array(9).fill(null);

    let itemHistory = {win:null};
    console.log('history', this.round, this.history);
    console.log('history by round', this.history[this.round]);
    // if(!this.round)
    if(this.history[this.round].x == this.dataForm.player1) {
      itemHistory['x'] = this.dataForm.player2;
      itemHistory['o'] = this.dataForm.player1;
    } else {
      itemHistory['x'] = this.dataForm.player1;
      itemHistory['o'] = this.dataForm.player2;
    }

    this.history.push(itemHistory);
    if(this.round < this.dataForm.rounds-1) this.round++;

  }

  ngOnInit() {
    this.history.push({
      x: this.dataForm.player1,
      o: this.dataForm.player2,
      win: null
    })
  }

}
