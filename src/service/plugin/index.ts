export class oobPlugin {
  constructor() {}

  // 插件列表：tts等
  private pluginList: Record<string, any> = {};

  /**
   * 新增插件
   * @param plugin 实例 
   */
  public pushPlugin(plugin: any, type: 'begin' | ''): void
  {
    if (this.pluginList[plugin.name]) { throw new Error(`Plugin ${plugin.name} already exists.`); }
    this.pluginList[plugin.name] = plugin;
  }
}