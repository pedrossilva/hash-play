import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  private player:string;
  private list:Array<any> = Array(9).fill(null);
  private count:number = 0;
  private winner:string;
  private draw:boolean = false;
  private winners:any = {};
  private dataSet:{x?:string,o?:string,winner?:string} = {};
  @Input() dataForm:any = {};
  @Output() newPlay:EventEmitter<boolean> = new EventEmitter();


  constructor() {}

  choice(position:number) {
    if(this.winner) return;
    if(this.list[position] === null) {
      this.list[position] = this.player;
      this.player = (this.player === 'x') ? 'o': 'x';
      this.count++;

      if(this.count > 2) {
        let winner = this.checkWinner();
        if(winner != null) {
          setTimeout( () => { this.winner = winner } )
        }
        else if(this.count == 9) {
          setTimeout( () => { this.draw = true } )
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

  newRound() {
    this.newPlay.emit(true);
  }

  ngOnInit() {

    this.player = this.randomChoice(['x','o']);

    this.dataSet = {
      x: this.dataForm.playerX,
      o: this.dataForm.playerO,
      winner: null
    }
  }

  randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
  }


}
