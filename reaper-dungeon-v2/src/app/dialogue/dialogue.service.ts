import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  public book: any = [
    {
      "id": 0,
      "question": "Reaper Dungeon V1.4 By: SZABÓ ATTILA",
      "answers": {
        1: "Only Fight",
        2: "Story Mode",
        3: "Something something...."
      },
      "ref": {
        1: 1, // answer[1]esetén erre(1) a kérdésre ugrunk
        2: 2, // answer[2]esetén erre(2) a kérdésre ugrunk
        3: 3  // answer[3]esetén erre(3) a kérdésre ugrunk
      }
    },
    {
      "id": 1,
      "question": "ID: 1",
      "answers": {
        1: "Jump to ID:4",
        2: "Jump to ID:5",
        3: "Jump to ID:6"
      },
      "ref": {
        1: 4, 
        2: 5, 
        3: 6  
      }
    },
    {
      "id": 2,
      "question": "ID: 2",
      "answers": {
        1: "Jump to ID:7",
        2: "Jump to ID:8",
        3: "Jump to ID:9"
      },
      "ref": {
        1: 7, 
        2: 8, 
        3: 9  
      }
    },
    {
      "id": 3,
      "question": "ID: 3",
      "answers": {
        1: "Jump to ID:10",
        2: "Jump to ID:11",
        3: "Jump to ID:12"
      },
      "ref": {
        1: 10, 
        2: 11, 
        3: 12  
      }
    }
  ];
}
