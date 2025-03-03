import { Context, Schema } from 'koishi';
import oob from './service';

export const name = 're-oob';
export * from './service';

export interface Config { }

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context)
{
  ctx.plugin(oob);
}
