window.onload = function() {
	/*
		打开网页就会自动执行window.onload
		所以如果在里面定义function的话，在html页面无法调用
	 */
	//alert('window.onload 打开网页就执行');

}


function myName() {
	alert("shaniu");
}


var Person = {
	name: "yawei",
	age: "25",
	myFunction: function() { //Person里面的匿名函数
		alert(111);
	},
	xifu: "傻妞",
	'middle-school': 'NO.1'//特殊属性的特殊写法，和调用
}

// delete Person.age;删除的话，下面会是undefined

console.log(Person['middle-school']);

for(var i in Person){

	console.log(i);
	console.log(Person[i]);
}