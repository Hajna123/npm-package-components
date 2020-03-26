import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeedQbCheckboxItem } from './feed-qb-checkbox-item';

@Component({
  selector: 'feed-qb-checkbox',
  templateUrl: './feed-qb-checkbox.component.html',
  styleUrls: ['./feed-qb-checkbox.component.scss']
})
export class FeedQbCheckboxComponent implements OnInit {
  @Input() options = Array<FeedQbCheckboxItem>();
  @Input() selectedValues: string[];
  @Output() toggle = new EventEmitter<any[]>();
  @Output() changeSelection = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onToggle() {
    const checkedOptions = this.options.filter(x => x.checked);
    this.selectedValues = checkedOptions.map(x => x.value);
    this.toggle.emit(checkedOptions.map(x => x.value));
    let groupId = this.options[0].groupId;

    this.changeSelection.emit({ groupId, checkedOptions });
  }
}