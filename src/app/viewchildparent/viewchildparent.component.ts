import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { ViewchildchildComponent } from '../viewchildchild/viewchildchild.component';

@Component({
  selector: 'app-viewchildparent',
  templateUrl: './viewchildparent.component.html',
  styleUrls: ['./viewchildparent.component.css']
})
export class ViewchildparentComponent implements OnInit, AfterViewInit {

  @ViewChild('box') box!: ElementRef;
  userName: any;
  @ViewChild(ViewchildchildComponent) child!: ViewchildchildComponent;
  constructor(private rederer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor = "blue";
    // this.box.nativeElement.innerHTML = "this is modified HTML";
    // this.rederer.setStyle(this.box.nativeElement, 'backgroundColor', 'blue')
    // const div = this.rederer.createElement('div')
    // const text = this.rederer.createText('this is create element')
    // this.rederer.appendChild(div, text)
    // this.rederer.appendChild(this.box.nativeElement, div)
    //this.rederer.setProperty(this.box.nativeElement, 'innerText', 'this is redered text')
    // console.log(this.box)
    // console.log(this.child);
  }

  CallChildMethod() {
    this.child.ClickMe();
  }

  ChangeChildProperty() {
    this.child.userName = "ABC"
  }



}
