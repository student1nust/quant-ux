import Logger from 'common/Logger'

export default class FastDomUtil {

  constructor () {
    this.logger = new Logger('FastDomUtil')
    this.logger.log(-1, 'constructor', 'enter')
  }

  removeAllChildNodes(node) {
    while (node.lastChild) {
      node.removeChild(node.lastChild);
    }
  }

  setPos (div, pos) {
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    div.pos_x = pos.x;
    div.pos_y = pos.y
  }

  setXY (div, x, y) {
    div.style.left = "0px";
    div.style.top = "0px";
    div.pos_x = x;
    div.pos_y = y
    div.style.transform = `translate(${x}px, ${y}px)`
  }

  getPos (div) {
    let x = div.pos_x * 1;
    let y = div.pos_y *1;
    return {x : x , y : y};
  }
}