import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';

  getAlbum(id: number){
    return this._http.get(this._albumUrl)
  }

  constructor(private _http: Http) { }

}
