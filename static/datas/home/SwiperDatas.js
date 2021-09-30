let swiperDatas = []
let obj = {}
for (let i = 1; i <=3; i++) {
	obj = {
		id: i,
		title: "这是第" + i + "张图片的标题",
		image: '../../static/images/home/swiper/swiper-'+i+'.png'
	}
	swiperDatas.push(obj)
}

export default swiperDatas