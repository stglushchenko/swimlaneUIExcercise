import { ChannelType } from './channel-type.enum';
import { ChannelStep } from './channel-step';
export class EmailChannelStep implements ChannelStep {
    readonly channelType: ChannelType = ChannelType.Email;
    stepNumber: number;
    description: string;
    emailAddress: string;
    subject: string;
    body: string;
}
