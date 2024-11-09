export class ProfileEditorComponent {
    profileForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        address: this.formBuilder.group({
            street: [''],
            city: [''],
            state: [''],
            zip: [''],
        }),
    });

    constructor(private formBuilder: FormBuilder) { }

}

export class ProfileEditorComponent2 {
    profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''), 
            state: new FormControl(''),
            zip: new FormControl(''), }),
    });
}
