import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  category!: string;
  section!: string;
  data!: object;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params.category;
      this.section = params.section;
      let url = `assets/${this.category}/${this.section}.json`;
      
      this.getJSON(url).subscribe(response => {
        this.data = response;
      })
    });
  }

  getJSON(url: string): Observable<object> {
    return this.http.get(url);
  }

}
