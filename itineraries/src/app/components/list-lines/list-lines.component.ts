import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Lines } from 'src/app/models/lines.model';
import { debounceTime, distinctUntilChanged, map, take, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-list-lines',
  templateUrl: './list-lines.component.html',
  styleUrls: ['./list-lines.component.scss']
})
export class ListLinesComponent implements OnInit {
  @Input() $listLines: Observable<Array<Lines>>
  @Output() selecteLine = new EventEmitter<number>()

  public listLines= new BehaviorSubject<Array<Lines>>([]);

  public search = new FormControl();
  public page: number = 0;
  public pageSize: number = 10;
  public listSize:number;
  public selectedId: number;
  constructor() { }

  ngOnInit() {
    this.$listLines.subscribe((lines:Array<Lines>)=> this.listLines.next(lines))
  }

  selected(id: number) {
    this.selectedId = id;
    this.selecteLine.emit(id);
  }

}
