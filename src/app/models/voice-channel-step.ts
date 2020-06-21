import { ChannelStep } from './channel-step';
import { ChannelType } from '.';
export class VoiceChannelStep implements ChannelStep {
    readonly channelType: ChannelType = ChannelType.Voice;
    stepNumber: number;
    description: string;
    phoneNumber: string;
    expectToHear: string;
    reply: string;
}
