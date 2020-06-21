import { ChannelStep } from './channel-step';
import { ChannelType } from '.';
export class WebChannelStep implements ChannelStep {
    readonly channelType: ChannelType = ChannelType.Web;
    stepNumber: number;
    description: string;
    url: string;
    expect: string;
    action: string;
}
