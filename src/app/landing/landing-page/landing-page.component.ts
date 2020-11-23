import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import Swal from 'sweetalert2'
import { Video } from '../../models/youtube.models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
};

focus;
focus1;

  videos: Video[] = [] ;

  constructor(private YoutubeService: YoutubeService ) { }

  ngOnInit() {
      
    this.YoutubeService.getVideos()
    .subscribe( resp=> {
       
        this.videos.push(...resp);
        console.log(this.videos);

    } );

 }

 mostrarVideo(video: Video){
  console.log(video);
  Swal.fire({
    html: `<H4>${video.title}<H4>
           <hr>
           <iframe width="100%" 
                   height="315" src="https://www.youtube.com/embed/${video.resourceId.videoId}" 
                   frameborder="0" 
                   allow="accelerometer; 
                   autoplay; 
                   clipboard-write; 
                   encrypted-media;
                   gyroscope; 
                   picture-in-picture"
                   allowfullscreen>
            </iframe>`
  });
}

}
