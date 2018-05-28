	
	/*------------1.函数基本定义----------*/
	// function add(a,b) {
	// 	var totle = a * b;
	// 	//console.log(totle);
	// 	return totle;
	// }
	//调用才会生效，不调用不会生效
	//var t1 = add(1,3);
	//var t2 = add(7,8);
	//定义t1,t2接受add函数内返回的值
	//alert(t2);

	/*-----------2.arguments使用----------*/
	//函数内部是由arguments类似数组的对象来管理参数的
	// function textArguments() {
	// 	//读取值
	// 	var first =  arguments [0]; //a
	// 	alert(first);
	// 	var second = arguments[1];//b
	// 	console.log(second);
	// 	//更改参数值
	// 	arguments[2] = "Y";
	// 	var th = arguments[2]; //Y ，本来该是 c  的
	// 	console.log(th);
	// }
	
	//textArguments("a","b","c"); //调用函数传入参数

	/*-----------3. 案例:求任意一组数的平均值----------*/
	// function avg() {
	// 	var totle = 0,
	// 	       avg,
	// 	       len = arguments.length;
	// 		if (len > 0) {
	// 			for (var i = 0; i < len; i++) {
	// 				totle += arguments[i];
	// 			}
	// 		}
	// 	avg = totle/len;
	// 	return avg;
	// 	}
	//     console.log(avg(1,2,8));