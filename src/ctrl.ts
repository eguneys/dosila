export type Context = {
  redraw: () => void
}

abstract class IDosi {

  constructor(readonly ctx: Context) {}

  init(): this {
    this._init()
    return this
  }

  abstract _init(): void;

}


export default class Ctrl extends IDosi {


  _init() {
  }


}
