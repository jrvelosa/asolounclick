import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeResponse, Item } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youTubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyDCKT5Ifj3-6nnve0lJXVLHcGoJ3gA_rQ8';
  private playList = 'UU-nF8pZsaQ66feJ4_g3iNsA';
  private nextPageToken = '';


  constructor(private http: HttpClient) { }

  getVideos(){
  
    const url = `${this.youTubeUrl}/playlistItems`;
    const params = new HttpParams()
          .set('part','snippet')
          .set('key',this.apiKey)
          .set('key',this.apiKey)
          .set('playlistId',this.playList)
          .set('maxResults','1')


    return this.http.get<YoutubeResponse>(url, {params} )
    .pipe(

       map( resp =>{
         
          return resp.items;
       }),

       map( items =>{
         
        return items.map( video => video.snippet);
     })
    )

   }
}
