import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css',
})
export class NgtemplateComponent {
  isLoggedIn: boolean = false;
  loggerUserName: string = 'Gaurav';
  @ViewChild('dynamicTem') dynamicTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynaContainer:
    | ViewContainerRef
    | undefined;

  loadTemplate() {
    if (this.dynamicTemplate) {
      this.dynaContainer?.createEmbeddedView(this.dynamicTemplate);
    }
  }
}
