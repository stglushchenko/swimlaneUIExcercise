import { ChannelType } from './../models/channel-type.enum';
import { ChannelStep } from './../models/channel-step';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-channel-step-details',
  templateUrl: './channel-step-details.component.html',
  styleUrls: ['./channel-step-details.component.scss']
})
export class ChannelStepDetailsComponent implements OnInit {
  @Input() channelStep: ChannelStep;
  ChannelType = ChannelType;

  constructor() { }

  ngOnInit() {
  }
}
