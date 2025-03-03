export interface adapter
{
  platform: string;
  modules: string[];
  chat: (model: string, data: any) => Promise<string>;
}

export class oobAdapter
{
  constructor() { }

  // 平台:适配器
  private adapterList: Record<string, adapter> = {};

  /**
   * 新增适配器
   * @param adapter 实例 
   */
  public pushAdapter(adapter: adapter): void
  {
    if (this.adapterList[adapter.platform]) { throw new Error(`Adapter ${adapter.platform} already exists.`); }
    this.adapterList[adapter.platform] = adapter;
  }

  /**
   * 获取适配器列表
   * @returns 适配器列表
   */
  public getAdapterList(): string[]
  {
    return Object.keys(this.adapterList);
  }

  /**
   * 获取某平台的模型
   * @param platform 平台
   * @returns 模型列表，格式是model
   */
  public getModel(platform: string): string[]
  {
    if (!this.adapterList[platform]) { return []; }
    return this.adapterList[platform].modules;
  }

  /**
   * 获取所有模型的列表
   * @returns 模型名称，格式是platform:model 
   */
  public getModelList(): string[]
  {
    const adapterList = this.getAdapterList();
    const modelList: string[] = [];
    adapterList.forEach((platform) =>
    {
      adapterList[platform].modules.forEach((model: string) =>
      {
        modelList.push(`${platform}:${model}`);
      });
    });
    return modelList;
  }

  /**
   * 解析模型名称
   * @param modelName 模型名称，格式是platform:model 
   * @returns 
   */
  public parModelName (modelName: string): { platform: string, model: string }
  {
    const [platform, model] = modelName.split(':');
    return { platform, model };
  }
  /**
   * 发起请求
   * @param platform 适配器平台 
   * @param model 聊天模型
   * @param data 请求数据
   * @returns 
   */
  public async chat(platform: string, model: string, data: any): Promise<string>
  {
    if (!this.adapterList[platform]) { throw new Error(`Adapter ${platform} does not exist.`); }
    return this.adapterList[platform].chat(model, data);
  }


}