import Window from './window'

/**
 * 应用程序
 */
export default abstract class Application {
  /**
   * 应用程序名称
   */
  abstract name: string

  /**
   * 应用程序图标
   * 200x200 jpg/png
   */
  abstract icon: string

  /**
   * 当前的窗口对象
   */
  abstract window: Window
  
  /**
   * 创建一个应用程序
   */
  constructor() {

  }

  /**
   * 开启应用程序
   */
  abstract open(): void

  /**
   * 关闭应用程序
   */
  abstract close(): void
}
