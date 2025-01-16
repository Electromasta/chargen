export interface Label    {
    name: string,
    description: string
}

export class Arrayable  {
    public toArray(): Array<Label> {
        return Object.keys(this).map(key => this[key as keyof this] as Label);
    }
}
