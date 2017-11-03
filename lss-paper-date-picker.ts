declare var bowser: any;
declare var moment: any;

@component("lss-paper-date-picker")
class LssPaperDatePicker extends polymer.Base {
    @property({
        type: String,
        notify: true
    })
    dateString: string;

    @property({
        type: Date,
        notify: true
    })
    min: Date;

    @property({
        type: Date,
        notify: true
    })
    max: Date;

    @property({
        type: Date,
        notify: true
    })
    date: Date;

    @property({
        type: Boolean,
        reflectToAttribute: true
    })
    required: boolean;

    @property({
        type: Boolean,
        reflectToAttribute: true
    })
    isNativeSupported: boolean;

    @property({
        type: Boolean,
        reflectToAttribute: true,
        value: false
    })
    opened: boolean;

    @property({
        type: String
    })
    errorMessage: string;

    @property({
        type: Boolean,
        reflectToAttribute: true,
        value: false
    })
    disabled: boolean;

    @property({
        type: Boolean,
        reflectToAttribute: true,
        value: false
    })
    focused: boolean;

    @property({
        type: Boolean,
        notify: true
    })
    invalid: boolean;

    @property({
        type: Object,
        notify: true
    })
    value: any; //Moment Object

    _observerLock = false;
    @observe('value')
    valueChanged(value: any) {
        var m = moment(value);
        if (!m.isValid()) {
            return;
        }

        this._observerLock = true;
        this.set('dateString', m.toISOString().substr(0, 10));
        this._observerLock = false;
    }

    @observe('dateString')
    dateStringChanged(date: any) {
        if (this._observerLock)
            return;

        var m = moment(date);
        if (!m.isValid()) {
            return;
        }

        this.value = moment(date);
        this.date = moment(date).toDate();
    }

    getDateString(date: Date): string {
        return date.toISOString().substring(0, 10);
    }

    @observe('date')
    dateChanged(date: any) {
        var m = moment(date);
        if (!m.isValid()) {
            return;
        }

        this.value = m;
        this._observerLock = true;
        this.set('dateString', m.toISOString().substr(0, 10));
        this._observerLock = false;
    }

    attached() {
        this.isNativeSupported = !bowser.msedge && !bowser.msie && !bowser.firefox && !bowser.mac;
        if (bowser.ios && !this.value) {
            this.value = moment();
        }
    }
}

LssPaperDatePicker.register();