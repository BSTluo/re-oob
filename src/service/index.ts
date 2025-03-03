import { Context, Service } from "koishi";
import { oobAdapter } from "./adapter";
import { oobSession } from "./session";

declare module "koishi"
{
  interface Context 
  {
    oob: oob;
  }
}

export default class oob extends Service
{
  public adapter: oobAdapter = new oobAdapter();
  public session: oobSession = new oobSession(this.ctx);

  constructor(ctx: Context)
  {
    super(ctx, 'oob');
  }
}