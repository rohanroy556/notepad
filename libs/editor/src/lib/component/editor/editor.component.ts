import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, HostBinding, Inject, Input, OnDestroy, Optional, Self, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { Content } from '@notepad/models';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { map, Subject } from 'rxjs';
import { TOOLBAR } from '../../configuration';

@Component({
	selector: 'notepad-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
	providers: [{ provide: MatFormFieldControl, useExisting: EditorComponent }]
})
export class EditorComponent implements ControlValueAccessor, MatFormFieldControl<Content>, OnDestroy {
	static nextId = 0;

	@ViewChild('editorInput') editorInput!: HTMLInputElement;

	editor: Editor = new Editor();
	toolbar: Toolbar = TOOLBAR;
	form = new FormGroup({
		editorContent: new FormControl({ value: null, disabled: false }, Validators.required())
	});

	@Input()
	get value(): Content {
		if (this.form.valid) {
			const {
				value: { editorContent }
			} = this.form;
			return editorContent;
		}
		return null;
	}
	set value(value: Content) {
		this.form.setValue({ editorContent: value });
		this.stateChanges.next();
	}

	@Input()
	get placeholder(): string {
		return this._placeholder;
	}
	set placeholder(value: string) {
		this._placeholder = value;
		this.stateChanges.next();
	}
	private _placeholder = 'Enter Text';

	@Input()
	get required(): boolean {
		return this._required;
	}
	set required(value: BooleanInput) {
		this._required = coerceBooleanProperty(value);
		this.stateChanges.next();
	}
	private _required = false;

	@Input()
	get disabled(): boolean {
		return this._disabled;
	}
	set disabled(value: BooleanInput) {
		this._disabled = coerceBooleanProperty(value);
		this._disabled ? this.form.disable() : this.form.enable();
		this.stateChanges.next();
	}
	private _disabled = false;

	@HostBinding('class.editor-label-floating')
	get getEditorLabelFloatingClass() {
		return this.shouldLabelFloat;
	}
	@HostBinding('class.editor-negative-margin')
	get getEditorNegativeMarginClass() {
		return !!this._formField;
	}
	@HostBinding('id')
	get getId() {
		return this.id;
	}

	stateChanges = new Subject<void>();
	id = `notepad-editor-${EditorComponent.nextId++}`;
	focused = false;
	touched = false;
	shouldLabelFloat = true;
	get empty(): boolean {
		return !this.value;
	}
	get errorState(): boolean {
		return this.form.invalid && this.touched;
	}
	controlType = 'notepad-editor';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	onChange = (_: Content) => {};
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onTouched = () => {};

	constructor(
		private _focusMonitor: FocusMonitor,
		private _elementRef: ElementRef<HTMLElement>,
		@Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
		@Optional() @Self() public ngControl: NgControl | null
	) {
		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
		this.form.valueChanges.pipe(map(({ editorContent = null }) => editorContent)).subscribe((value: Content) => this.onChange(value));
	}

	onFocusIn() {
		if (!this.focused) {
			this.focused = true;
			this.stateChanges.next();
		}
	}

	onFocusOut(event: FocusEvent) {
		if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
			this.touched = true;
			this.focused = false;
			this.onTouched();
			this.stateChanges.next();
		}
	}

	setDescribedByIds(ids: string[]): void {
		const controlElement = this._elementRef.nativeElement.querySelector('.editor-container');
		controlElement?.setAttribute('aria-describedby', ids.join(' '));
	}

	onContainerClick(): void {
		this._focusMonitor.focusVia(this.editorInput, 'program');
	}

	writeValue(value: Content): void {
		this.value = value;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	ngOnDestroy(): void {
		this.stateChanges.complete();
		this._focusMonitor.stopMonitoring(this._elementRef);
		this.editor.destroy();
	}
}
