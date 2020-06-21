import { SmsChannelStep } from './models/sms-channel-step';
import { WebChannelStep } from './models/web-channel-step';
import { VoiceChannelStep } from './models/voice-channel-step';
import { Component } from '@angular/core';
import { SelectionType, ColumnMode } from '@swimlane/ngx-datatable';
import { ChannelType } from './models';
import { ChannelStep } from './models/channel-step';
import { EmailChannelStep } from './models/email-channel-step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public selectedChannelStep: ChannelStep;

  SelectionType = SelectionType;
  ColumnMode = ColumnMode;
  channelTypes = [ChannelType.Voice, ChannelType.Web, ChannelType.Email, ChannelType.SMS];
  selected: any[] = [];
  channelsCount = 1;
  stepsCount = 1;
  rows = [{ stepNr: {rowNumber: this.stepsCount}}];
  columns = [{name: 'Nr', prop: 'stepNr'}];


  public onAddChannel(channelType: ChannelType) {
    this.columns.push({name: channelType, prop: 'prop' + (++this.channelsCount) });
  }

  public onAddStep() {
    this.rows.push({stepNr: {rowNumber: ++this.stepsCount}});
    this.rows = [...this.rows];
  }

  onSelect(event) {
    console.log('Event: select', event, this.selected);
  }

  onActivate(event) {
    console.log('Event: activate', event);
    if (event.type === 'click' || event.type === 'keydown' && event.event.key === 'Enter') {
      if (event.value === '') {
        const newChannelStep = this.createChannelStep(event.column.name, event.row.stepNr.rowNumber);
        event.row[event.column.prop] = newChannelStep;
        this.selectedChannelStep = newChannelStep;
      } else {
        if (event.row[event.column.prop].stepNumber) {// if it's not a row number indicator column
          this.selectedChannelStep = event.row[event.column.prop];
        }
      }
    }

    if (event.type === 'keydown' && event.event.key === 'ArrowDown'
        && event.row.stepNr.rowNumber === this.stepsCount // this is the last row
        && Object.keys(event.row).length !== 1) { // There is not only number column filled
        this.onAddStep();
      }
  }

  private createChannelStep(channelType: ChannelType, stepNumber: number): ChannelStep {
    switch (channelType) {
      case ChannelType.Voice:
          return {
            channelType,
            stepNumber,
            description: 'voice step',
          } as VoiceChannelStep;
      case ChannelType.Email:
        return {
          channelType,
          stepNumber,
          description: 'email step',
        } as EmailChannelStep;
      case ChannelType.Web:
          return {
            channelType,
            stepNumber,
            description: 'web step',
          } as WebChannelStep;
      case ChannelType.SMS:
        return {
          channelType,
          stepNumber,
          description: 'sms step',
        } as SmsChannelStep;
      default:
    }
  }
}
