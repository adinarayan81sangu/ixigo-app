import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

   images=[
     "../../../assets/images/agra.jpg",
    "../../../assets/images/bali.jpg",
    "../../../assets/images/londo.jpg",
    "../../../assets/images/udaipur.webp"
  ]

  photo="";
  changecount:number=0;
  constructor() { }

  ngOnInit(): void {
    this.photo=this.images[0];
    setInterval(()=>{
      this.changecount++;
      if(this.changecount>this.images.length-1){
        this.changecount=0;
      }
      this.photo=this.images[this.changecount];
    },5000)
  }

}
