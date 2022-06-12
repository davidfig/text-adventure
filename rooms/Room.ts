export abstract class Room {
    abstract enter(): void;
    abstract respond(text: string): void;
}