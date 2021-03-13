/**
 * 代指一切对象  
 * means any object  
 */
export interface AnyObject {
  [prop: string]: any
}
 
export interface DesktopProps {
  className?: string
  style?: React.CSSProperties
  wallpaper?: string // 壁纸 wallpaper
}

export interface DockProps {
  className?: string
  style?: React.CSSProperties
}

export interface WindowProps {
  className?: string
  style?: React.CSSProperties
}

export interface DesktopSetting {

}
