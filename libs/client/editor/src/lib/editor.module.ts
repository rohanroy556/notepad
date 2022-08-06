import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from "ngx-editor";
import { EditorComponent } from './component/editor/editor.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgxEditorModule
	],
	declarations: [EditorComponent],
	exports: [EditorComponent]
})
export class EditorModule {}
