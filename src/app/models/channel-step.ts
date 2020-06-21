import { ChannelType } from './channel-type.enum';
export interface ChannelStep {
    readonly channelType: ChannelType;
    stepNumber: number;
    description: string;
}
