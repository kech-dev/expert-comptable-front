import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() items: any = [];
  @Input() id_dropdown!: string;
  @Input() icon!: string;
  @Input() total_badge_number!: string;
  @Input() width_dropDown!: any;
  @Input() type_dropdown!: any;
  @Input() auto_close!: any;
  constructor() {}

  ngOnInit(): void {}
}
