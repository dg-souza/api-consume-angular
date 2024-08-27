import { Component } from '@angular/core';
import { GameApi } from '../../services/gameapi.services';
import { CardComponent } from '../card/card.component';
import { GameDTO } from '../../dto/gameDTO';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  games: Array<GameDTO> = [];
  originalGames: Array<GameDTO> = [];
  search: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(private api: GameApi) {
    this.searchSubject.pipe(debounceTime(300)).subscribe(value => this.searchGameByName(value));
  }

  async ngOnInit(): Promise<void> {
    await this.findAll();
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  searchGameByName(value: string) {
    if (value.trim() === '') {
      this.games = [...this.originalGames];
    } else {
      this.games = this.originalGames.filter(item =>
        item.title?.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
  }

  async findAll() {
    try {
      const response = await this.api.findAll();
      console.log(response);
      this.originalGames = response.data;
      this.games = [...this.originalGames];
    } catch (err) {
      console.error(err);
    }
  }
}