declare var bowser: any;
declare var moment: any;

@customElement('lss-paper-date-picker')
class LssPaperDatePicker extends Polymer.Element {

    @property({
        reflectToAttribute: true
    })
    required: boolean;

    @property({
        reflectToAttribute: true
    })
    isNativeSupported: boolean;

    @property({
        reflectToAttribute: true
    })
    opened: boolean = false;

    @property()
    errorMessage: string;

    @property({
        reflectToAttribute: true
    })
    disabled: boolean = false;

    @property({
        reflectToAttribute: true
    })
    focused: boolean = false;

    @property({
        notify: true
    })
    invalid: boolean;

    @property({
        notify: true
    })
    value: any;

    @property()
    label: string;

    @observe('value')
    valueChanged(value: any, oldValue: any) {
        if (value === oldValue)
            return;
        if (typeof value === 'object')
            this.set('value', moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD'));
    }

    validate(): boolean {
        if (this.shadowRoot) {
            let nativeInput: any = this.shadowRoot.querySelector('#nativeInput');
            if (nativeInput)
                return nativeInput.validate();
        }
        return true;
    }

    connectedCallback() {
        super.connectedCallback();
        this.isNativeSupported = !bowser.msedge && !bowser.msie && !bowser.firefox && !bowser.mac;
        if (bowser.ios && !this.value)
            this.value = moment();
    }
}