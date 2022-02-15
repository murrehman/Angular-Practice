import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestdirectiveDirective } from '../appDirectives/testdirective.directive';

@Component({
  selector: 'app-viewchildchild',
  templateUrl: './viewchildchild.component.html',
  styleUrls: ['./viewchildchild.component.css']
})
export class ViewchildchildComponent implements OnInit, AfterContentInit {

  @ContentChild('childCon') Childparagraph!: ElementRef;

  constructor(private rederer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.Childparagraph);
    this.rederer.setStyle(this.Childparagraph.nativeElement, 'color', 'red')
  }

  userName: any = "Default"
  @ViewChild(TestdirectiveDirective) myDir!: TestdirectiveDirective;

  ClickMe() {
    alert(this.userName)
    var text = this.rederer.createText('This text is created by content child rederer')
    this.rederer.appendChild(this.Childparagraph.nativeElement, text)
  }

  changeColor(color: string) {
    this.myDir.changeBg(color);
  }

}
