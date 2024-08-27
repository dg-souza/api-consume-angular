import { Component } from '@angular/core';

import { GameDTO } from '../../dto/gameDTO';

import { GameApi } from '../../services/gameapi.services';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(private api: GameApi) {}

  modalVisibility: boolean = false
  gameInfo: GameDTO

  handleVisibility() {
    this.modalVisibility = !this.modalVisibility
  }

  async getGameInfo(id: number) {
    this.findById(id)
  }

  findById(id: number) {
    this.api.findById(id)
      .then((response: any) => {
        this.gameInfo = response.data
      }).finally(() => { this.handleVisibility() })
  }
}
