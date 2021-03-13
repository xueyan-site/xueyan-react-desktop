export interface Point {
  x: number // 相对于参考点横向距离
  y: number // 相对于参考点纵向距离
}

export interface Rectangle {
  x: number // 左侧相对于参考点横向距离
  y: number // 上侧相对于参考点纵向距离
  w: number // 宽度
  h: number // 高度
}

/**
 * 计算贝塞尔曲线点
 * @param points 坐标点集合
 * @param rate 进度，rate属于[0,1]
 */
function bezier(points: Point[], rate: number): Point {
  if (points.length <= 1) {
    return points[0]
  }
  const newPoints: Point[] = []
  const allLength = points.length - 1
  let start: Point
  let end: Point
  for (let i = 0; i < allLength; i++) {
    start = points[i]
    end = points[i+1]
    newPoints.push({
      x: start.x + ((start.x - end.x) * rate),
      y: start.y + ((start.y - end.y) * rate)
    })
  }
  return bezier(newPoints, rate)
}





function transform(target: Rectangle, start: Point, end: Rectangle, time: number, ...handler: Point[]) {



  // const rect: Rectangle = {
  //   x: target.offsetLeft,
  //   y: target.offsetTop,
  //   w: target.offsetWidth,
  //   h: target.offsetHeight
  // }
  // target.style.transform = 
}





// function twoPointMove(target: HTMLElement, start: Point, end: Rectangle, time: number) {
//   const rect: Rectangle = {
//     x: target.offsetLeft,
//     y: target.offsetTop,
//     w: target.offsetWidth,
//     h: target.offsetHeight
//   }
//   target.style.transform = 
// }



// export interface MoveWindowProps {
//   start: CoordinateInfo,
//   end: CoordinateInfo,
//   mask: HTMLElement,
//   window: HTMLElement
// }

// export interface MoveWindowHandler {
//   set(): void
//   toEnd(): void
//   toStart(): void
// }

// function getMoveWindowHandler({
//   start,
//   end,
//   mask,
//   window
// }: MoveWindowProps): MoveWindowHandler {
//   return {
//     init() {

//     }
//     move() {

//     }
//     start() {

//     }
//     end() {

//     }
//   }
// }
