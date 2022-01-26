import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tab',
  templateUrl: './my-tab.component.html',
  styleUrls: ['./my-tab.component.css'],
})
export class MyTabComponent implements OnInit {
  tabs: Tab_Element[] = [];
  constructor() {}

  ngOnInit(): void {
    this.tabs = ELEMENT_DATA;
  }
}
declare interface Tab_Element {
  icon_tab: string;
  title_tab: string;
  content_tab: string;
}

const ELEMENT_DATA: Tab_Element[] = [
  { icon_tab: 'bx-user-circle', title_tab: 'Tab 1', content_tab: 'Content 1' },
  { icon_tab: 'bx-user-circle', title_tab: 'Tab 2', content_tab: 'Content 2' },
  { icon_tab: 'bx-user-circle', title_tab: 'Tab 3', content_tab: 'Content 3' },
  { icon_tab: 'bx-user-circle', title_tab: 'Tab 4', content_tab: 'Content 4' },

];
