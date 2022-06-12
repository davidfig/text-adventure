type Noun = Record<string, { say: string, do?: () => void }>;

export abstract class Room {
    abstract handle(noun: string, verb: string): void;
}