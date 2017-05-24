import Vue from 'vue';
import { Component, Prop, Provide } from 'vue-property-decorator';
import Rx from 'rxjs';
import moment from 'moment';
import { LogLevel, LogEntry } from '../../models';

@Component
export default class DemoView
    extends Vue
{
    @Provide()
    partedLogs: Array<Array<LogEntry>>= [];

    partitionIntervalMillis: number= 3000;

    logLevel: LogLevel= LogLevel.Debug;

    mounted()
    {
        Rx.Observable.fromEvent(this.$refs.emitter as HTMLElement, 'click')
            .map(value => new LogEntry(new Date(), LogLevel.Debug, "clicked!"))
            .filter(value => value.level >= this.logLevel)
            .bufferWhen(() => Rx.Observable.timer(this.partitionIntervalMillis))
            .filter(value => value.length > 0)
            .forEach(value => this.partedLogs.push(value));
    }
};
