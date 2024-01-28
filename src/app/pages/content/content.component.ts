import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //Propriedades:
  @Input()
  photoContentCover: string = ""
  @Input()
  titleContent: string = ""
  @Input()
  descriptionContent: string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
      )

      this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    this.photoContentCover = result.photo;
    this.titleContent = result.title;
    this.descriptionContent = result.description;

}
}
