var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LssPaperDatePicker = (function (_super) {
    __extends(LssPaperDatePicker, _super);
    function LssPaperDatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._observerLock = false;
        return _this;
    }
    LssPaperDatePicker.prototype.valueChanged = function (value) {
        var m = moment(value);
        if (!m.isValid()) {
            return;
        }
        this._observerLock = true;
        this.set('dateString', m.toISOString().substr(0, 10));
        this._observerLock = false;
    };
    LssPaperDatePicker.prototype.dateStringChanged = function (date) {
        if (this._observerLock)
            return;
        var m = moment(date);
        if (!m.isValid()) {
            return;
        }
        this.value = moment(date);
        this.date = moment(date).toDate();
    };
    LssPaperDatePicker.prototype.getDateString = function (date) {
        return date.toISOString().substring(0, 10);
    };
    LssPaperDatePicker.prototype.dateChanged = function (date) {
        var m = moment(date);
        if (!m.isValid()) {
            return;
        }
        this.value = m;
        this._observerLock = true;
        this.set('dateString', m.toISOString().substr(0, 10));
        this._observerLock = false;
    };
    LssPaperDatePicker.prototype.attached = function () {
        this.isNativeSupported = !bowser.msie && !bowser.firefox && !bowser.mac;
        if (bowser.ios && !this.value) {
            this.value = moment();
        }
    };
    return LssPaperDatePicker;
}(polymer.Base));
__decorate([
    property({
        type: String,
        notify: true
    })
], LssPaperDatePicker.prototype, "dateString", void 0);
__decorate([
    property({
        type: Date,
        notify: true
    })
], LssPaperDatePicker.prototype, "min", void 0);
__decorate([
    property({
        type: Date,
        notify: true
    })
], LssPaperDatePicker.prototype, "max", void 0);
__decorate([
    property({
        type: Date,
        notify: true
    })
], LssPaperDatePicker.prototype, "date", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true
    })
], LssPaperDatePicker.prototype, "required", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true
    })
], LssPaperDatePicker.prototype, "isNativeSupported", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true,
        value: false
    })
], LssPaperDatePicker.prototype, "opened", void 0);
__decorate([
    property({
        type: String
    })
], LssPaperDatePicker.prototype, "errorMessage", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true,
        value: false
    })
], LssPaperDatePicker.prototype, "disabled", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true,
        value: false
    })
], LssPaperDatePicker.prototype, "focused", void 0);
__decorate([
    property({
        type: Boolean,
        notify: true
    })
], LssPaperDatePicker.prototype, "invalid", void 0);
__decorate([
    property({
        type: Object,
        notify: true
    })
], LssPaperDatePicker.prototype, "value", void 0);
__decorate([
    observe('value')
], LssPaperDatePicker.prototype, "valueChanged", null);
__decorate([
    observe('dateString')
], LssPaperDatePicker.prototype, "dateStringChanged", null);
__decorate([
    observe('date')
], LssPaperDatePicker.prototype, "dateChanged", null);
LssPaperDatePicker = __decorate([
    component("lss-paper-date-picker")
], LssPaperDatePicker);
LssPaperDatePicker.register();
//# sourceMappingURL=lss-paper-date-picker.js.map