import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child-main',
  templateUrl: './child-main.component.html',
  styleUrls: ['./child-main.component.scss']
})
export class ChildMainComponent {

  @Input() info = ''


}
