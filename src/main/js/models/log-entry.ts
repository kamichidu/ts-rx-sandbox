enum LogLevel
{
    Debug,
    Info,
    Error,
    Off,
}

class LogEntry
{
    constructor(
        public timestamp: Date,
        public level: LogLevel,
        public message: string
    ){}
}

export { LogLevel, LogEntry };
