// 定义水印
let waterMarkDOM;
// 判断存在则移除
let clearWaterMark = () => {
    if (waterMarkDOM) waterMarkDOM.remove();
};

/**
 * @description: 创建水印
 * @param {String} waterMarkName 水印内容
 * @param ele 传递进来的元素
 */
function createWaterMark(waterMarkName, ele) {
    clearWaterMark();
    if (!waterMarkName) return
    let fontFamily = window.getComputedStyle(document.body)['font-family'];
    const fragment = document.createDocumentFragment(); // 创建文档碎片
    waterMarkDOM = document.createElement('div');
    waterMarkDOM.className = 'water-mark-wrap';
    let spanStr = ``;
    for (let i = 0; i < 100; i++) {
        spanStr += `
                <div class="water-word" style=height:200px;font: ${fontFamily}>
                    <img src="logo.png" class="water-img" alt=""/>
                    ${waterMarkName}
                </div>`;
    }
    waterMarkDOM.innerHTML = spanStr;
    fragment.appendChild(waterMarkDOM);
    document.body.appendChild(fragment);
    // ele.appendChild(fragment)
}
