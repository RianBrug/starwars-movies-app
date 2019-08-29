import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { FormControl } from '@angular/forms';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  results: any[] = [];
  queryField: FormControl = new FormControl();
  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this.queryField.valueChanges
    .subscribe( result => console.log(result));
  }

}
