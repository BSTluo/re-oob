import { Context } from "koishi";


declare module "koishi"
{
  interface Events
  {
    'oob/session/beginChat'(): string;
    'oob/session/beforeChat'(): void;
    'oob/session/beforSend'(): void;
  }
}

export class oobSession
{
  ctx: Context;
  constructor(ctx: Context) { this.ctx = ctx; }

  public beginChat()
  {
    this.ctx.emit('oob/session/beginChat');
  }

  public beforeChat()
  {
    this.ctx.emit('oob/session/beforeChat');
  }

  public beforSend()
  {
    this.ctx.emit('oob/session/beforSend');
  }
}