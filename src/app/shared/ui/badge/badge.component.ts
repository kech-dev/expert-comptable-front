import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() badge_icon!: any;
  @Input() badge_type!: any;
  @Input() badge_title!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
