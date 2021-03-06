import { Component, OnInit } from '@angular/core';

import { DialogueService } from '../shared/dialogue.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {

  constructor(private dialogueService: DialogueService) { }

  question = "";
  answerOne = "";
  answerTwo = "";
  answerThree = "";
  whereAreWe = 0;
  searchMore = false;

  ngOnInit() {
    this.question = this.dialogueService.book[0]["question"];
    this.answerOne = this.dialogueService.book[0]["answers"][1];
    this.answerTwo = this.dialogueService.book[0]["answers"][2];
    this.answerThree = this.dialogueService.book[0]["answers"][3];
  }

  onDialogueChoice(idIndex: number) {
    this.searchMore = true;

    this.dialogueService.book.forEach((elem)=> {
      if (elem.id === this.whereAreWe && this.searchMore) {
        this.searchMore = false;
        this.whereAreWe = elem.ref[idIndex];

        this.question = this.dialogueService.book[this.whereAreWe]["question"];
        this.answerOne = this.dialogueService.book[this.whereAreWe]["answers"][1];
        this.answerTwo = this.dialogueService.book[this.whereAreWe]["answers"][2];
        this.answerThree = this.dialogueService.book[this.whereAreWe]["answers"][3];
      }
    });
  };
}
