var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let LssPaperDatePicker = class LssPaperDatePicker extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.opened = false;
        this.disabled = false;
        this.focused = false;
    }
    valueChanged(value, oldValue) {
        if (value === oldValue)
            return;
        if (typeof value === 'object')
            this.set('value', moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD'));
    }
    validate() {
        if (this.shadowRoot) {
            let nativeInput = this.shadowRoot.querySelector('#nativeInput');
            if (nativeInput)
                return nativeInput.validate();
        }
        return true;
    }
    connectedCallback() {
        super.connectedCallback();
        this.isNativeSupported = !bowser.msie && !bowser.firefox && !bowser.mac;
        if (bowser.ios && !this.value)
            this.value = moment();
    }
};
__decorate([
    property({
        reflectToAttribute: true
    }),
    __metadata("design:type", Boolean)
], LssPaperDatePicker.prototype, "required", void 0);
__decorate([
    property({
        reflectToAttribute: true
    }),
    __metadata("design:type", Boolean)
], LssPaperDatePicker.prototype, "isNativeSupported", void 0);
__decorate([
    property({
        reflectToAttribute: true
    }),
    __metadata("design:type", Boolean)
], LssPaperDatePicker.prototype, "opened", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], LssPaperDatePicker.prototype, "errorMessage", void 0);
__decorate([
    property({
        reflectToAttribute: true
    }),
    __metadata("design:type", Boolean)
], LssPaperDatePicker.prototype, "disabled", void 0);
__decorate([
    property({
        reflectToAttribute: true
    }),
    __metadata("design:type", Boolean)
], LssPaperDatePicker.prototype, "focused", void 0);
__decorate([
    property({
        notify: true
    }),
    __metadata("design:type", Boolean)
], LssPaperDatePicker.prototype, "invalid", void 0);
__decorate([
    property({
        notify: true
    }),
    __metadata("design:type", Object)
], LssPaperDatePicker.prototype, "value", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], LssPaperDatePicker.prototype, "label", void 0);
__decorate([
    observe('value'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LssPaperDatePicker.prototype, "valueChanged", null);
LssPaperDatePicker = __decorate([
    customElement('lss-paper-date-picker')
], LssPaperDatePicker);
//# sourceMappingURL=lss-paper-date-picker.js.map