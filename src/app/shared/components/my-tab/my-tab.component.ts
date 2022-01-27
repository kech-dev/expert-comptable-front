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
  isDisabled?: boolean;
}

const ELEMENT_DATA: Tab_Element[] = [
  { icon_tab: 'bx-file', title_tab: 'Les infos de base', content_tab: 'Content 1' },
  { icon_tab: 'bx-upload', title_tab: 'Certificat Négatif', content_tab: 'Content 2' },
  { icon_tab: 'bx-wallet', title_tab: 'Génération de dossier', content_tab: 'Content 3' },
  { icon_tab: 'bx-loader-circle', title_tab: 'Le suivi', content_tab: 'Content 4' },
  { icon_tab: 'bx-money', title_tab: 'La facturation', content_tab: 'Content 5' ,isDisabled:true },

];
