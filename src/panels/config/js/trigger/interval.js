import { h, Component } from "preact";

import "@polymer/paper-input/paper-input";

import { onChangeEvent } from "../../../../common/preact/event";

export default class IntervalTrigger extends Component {
  constructor() {
    super();

    this.onChange = onChangeEvent.bind(this, "trigger");
  }

  /* eslint-disable camelcase */
  render({ trigger, localize }) {
    const { hours, minutes, seconds } = trigger;
    return (
      <div>
        <paper-input
          label={localize(
            "ui.panel.config.automation.editor.triggers.type.interval.hours"
          )}
          name="hours"
          value={hours}
          onvalue-changed={this.onChange}
        />
        <paper-input
          label={localize(
            "ui.panel.config.automation.editor.triggers.type.interval.minutes"
          )}
          name="minutes"
          value={minutes}
          onvalue-changed={this.onChange}
        />
        <paper-input
          label={localize(
            "ui.panel.config.automation.editor.triggers.type.interval.seconds"
          )}
          name="seconds"
          value={seconds}
          onvalue-changed={this.onChange}
        />
      </div>
    );
  }
}

IntervalTrigger.defaultConfig = {
  hours: "0",
  minutes: "0",
  seconds: "0",
};
