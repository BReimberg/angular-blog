import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //Propriedades:
  @Input()
  photoContentCover: string = "https://miro.medium.com/v2/resize:fit:1358/0*KNqK1IFDqENcyGXS"
  @Input()
  titleContent: string = "Lançamento do Angular 17 chega para melhorar a vida de todos os Devs"
  @Input()
  descriptionContent: string = "texto"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
      )
  }

}
