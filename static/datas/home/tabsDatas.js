const tabsDatas = []
let obj = {}
for (let i = 0; i <= 12; i++) {

	obj = {
		id: i,
		data:[]
	}
	for (let j = 0; j < i + 2; j++) {
		obj.data.push({
			id: j+i,
			name: '这是第' + i + '版内容'
		})
		
	}
	tabsDatas.push(obj)
}



export default tabsDatas
