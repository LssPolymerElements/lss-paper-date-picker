declare var bowser: any;
declare var moment: any;
declare class LssPaperDatePicker extends Polymer.Element {
    required: boolean;
    isNativeSupported: boolean;
    opened: boolean;
    errorMessage: string;
    disabled: boolean;
    focused: boolean;
    invalid: boolean;
    value: any;
    label: string;
    valueChanged(value: any, oldValue: any): void;
    validate(): boolean;
    connectedCallback(): void;
}
