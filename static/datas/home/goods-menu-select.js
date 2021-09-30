let goodsMenuSelectData = []
let obj = {}
let nameArr = ['手机', '平板', '电脑', '数码', '家电', '新人红包', '手机直播', '自营图书', '游戏', '二手车', '文玩玉翠', '免费领', '借钱', '拍卖', '分期商城']
// let iconArr = ['1','','','','','','','','','','','','','','','']
for (let i = 0; i < nameArr.length; i++) {
	obj = {
		id: i,
		title: nameArr[i],
		icon: "../../static/images/home/goods-menu-select/" + (i + 1) + '.png',
		count: i == 0 ? '必看':'' || i == 2 ? '热卖':''  || i == 7 ? '必看' : ''
	}
	goodsMenuSelectData.push(obj)
}


export default goodsMenuSelectData