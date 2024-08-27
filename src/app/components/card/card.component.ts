import { Component, Input, ViewChild } from '@angular/core';

import { ModalComponent } from '../modal/modal.component';

import { GameDTO } from '../../dto/gameDTO';

import { GameApi } from '../../services/gameapi.services';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  constructor(private api: GameApi) { }

  @ViewChild(ModalComponent) child: ModalComponent

  @Input() gamesArray: Array<GameDTO>
  modalVisibility: boolean = false

  async ngOnInit(): Promise<void> {
    console.log(this.gamesArray)
  }

  handleVisibility(id: number) {
    this.child.getGameInfo(id)
  }
}
