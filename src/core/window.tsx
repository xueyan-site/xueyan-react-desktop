
interface Location {
  width: string
}

/**
 * 应用程序
 */
export default abstract class Window {
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
