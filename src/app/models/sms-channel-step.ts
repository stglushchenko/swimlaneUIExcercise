import { ChannelStep } from './channel-step';
import { ChannelType } from '.';
export class SmsChannelStep implements ChannelStep {
    readonly channelType: ChannelType = ChannelType.SMS;
    stepNumber: number;
    description: string;
    phoneNumber: string;
    expect: string;
    reply: string;
}
