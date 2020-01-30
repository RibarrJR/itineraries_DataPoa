import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Lines } from 'src/app/models/lines.model';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-list-lines',
  templateUrl: './list-lines.component.html',
  styleUrls: ['./list-lines.component.scss']
})
export class ListLinesComponent implements OnInit {
  @Input() listLines: Observable<Lines>
  @Output() selecteLine = new EventEmitter<number>()
  public search = new FormControl();
  public page:number=0;
  public pageSize:number=10;
  public selectedId: number;
  constructor() { }

  ngOnInit() {
  }

  selected(id: number) {
    this.selectedId=id;
    this.selecteLine.emit(id);
  }

}
