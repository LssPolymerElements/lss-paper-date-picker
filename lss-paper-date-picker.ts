declare var bowser: any;

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

    getDateString(date: Date): string {
        return date.toISOString().substring(0, 10);
    }

    @listen("dateInput.tap")
    openDateModal() {
        if (!this.isNativeSupported) {
            this.set('opened', true);
        }
    }

    confirmDate() {
        this.set('opened', false);
    }

    dateStringChanged() {
        if (this.dateString) {
            this.set('date', new Date(this.dateString + " 12:00"));
        }
    }

    @observe('date')
    dateChanged(date: any) {
        if (date && date !== "Invalid Date") {
            this.set('dateString', date.toISOString().substr(0, 10));
        }
    }

    attached() {
        this.isNativeSupported = !bowser.msie && !bowser.msedge && !bowser.firefox;
        this.dateStringChanged();
    }
}

LssPaperDatePicker.register();
