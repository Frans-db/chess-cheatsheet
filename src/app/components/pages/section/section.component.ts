import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChessData } from 'src/app/models/chess-data';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  category!: string;
  section!: string;
  data!: ChessData;

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    route.params.subscribe(paramMap => {
      let category = paramMap.category;
      let section = paramMap.section;

      if (!category || !section) {
        return;
      }
      this.category = category;
      this.section = section;
      this.setupData();
    })
  }

  ngOnInit(): void {

  }

  setupData(): void {
    if (!this.category || !this.section) {
      return;
    }
    let url = `assets/${this.category}/${this.section}.json`;
    this.getJSON(url).subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

  getJSON(url: string): Observable<ChessData> {
    return this.http.get<ChessData>(url);
  }
}
