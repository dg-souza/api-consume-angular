import { Injectable } from '@angular/core'
import axios from 'axios'

@Injectable({
    providedIn: 'root'
})
export class GameApi {
    constructor() { }

    baseUrl: string = 'https://www.freetogame.com/api/game'

    async findAll() {
        return await axios.get(`${this.baseUrl}s`)
    }

    async findById(id: number) {
        return await axios.get(`${this.baseUrl}`, 
            {
                params: { id: id }
            })
    }
}