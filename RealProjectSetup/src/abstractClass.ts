abstract class TakePhoto {
  constructor(public camaraMode: string, public filter: string) {}

  abstract getSpepia(): void;

  getReelTime(): number{
    return 8
  }
}

class Instagram extends TakePhoto {
  constructor(
    public camaraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(camaraMode, filter);
  }

  getSpepia(): void {
    console.log("hello Type...");
  }
}

const kg = new Instagram("test", "Test", 3 );
