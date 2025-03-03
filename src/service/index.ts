import { Context, Service } from "koishi";
import { oobAdapter } from "./adapter";
import { oobPlugin } from "./plugin";

export default class oob extends Service
{
  public adapter: oobAdapter = new oobAdapter();
  public plugins: oobPlugin = new oobPlugin();

  constructor(ctx: Context)
  {
    super(ctx, 'oob');
  }
}