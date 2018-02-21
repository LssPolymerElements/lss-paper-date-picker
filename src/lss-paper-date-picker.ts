declare var bowser: any;
declare var moment: any;

@Polymer.decorators.customElement('lss-paper-date-picker')
class LssPaperDatePicker extends Polymer.Element {
  @Polymer.decorators.property({reflectToAttribute: true, type: Boolean})
  required: boolean;

  @Polymer.decorators.property({reflectToAttribute: true, type: Boolean})
  isNativeSupported: boolean;

  @Polymer.decorators.property({reflectToAttribute: true, type: Boolean})
  opened: boolean = false;

  @Polymer.decorators.property({type: String})
  errorMessage: string;

  @Polymer.decorators.property({reflectToAttribute: true, type: Boolean})
  disabled: boolean = false;

  @Polymer.decorators.property({reflectToAttribute: true, type: Boolean})
  focused: boolean = false;

  @Polymer.decorators.property({notify: true, type: Boolean})
  invalid: boolean;

  @Polymer.decorators.property({notify: true, type: Boolean})
  value: any;

  @Polymer.decorators.property({type: String})
  label: string;

  @Polymer.decorators.observe('value')
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
    this.isNativeSupported = !bowser.msedge && !bowser.msie && !bowser.safari;
    if (bowser.ios && !this.value)
      this.value = moment();
  }
}