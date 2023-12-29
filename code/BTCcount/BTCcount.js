window.onload = function(){
        document.getElementById('btc').focus(); 
}
function count() {
	//读取html标签内的值
	var btc = Number(document.getElementById("btc").value);
	var buy = Number(document.getElementById("buy_rate").value);
	var sell = Number(document.getElementById("sell_rate").value);
	var Percentage = Number(document.getElementById("Profit_Percentage").value);
	//计算并限制输出值为小数点后2位
	result = (btc * (1 + buy/100 + sell/100)).toFixed(5);
	profit = (btc * (1 + buy/100 + sell/100 + Percentage/100)).toFixed(5);
	//结果显示在网页上
	document.getElementById("result").innerHTML = result;
	document.getElementById("Selling_Price").innerHTML = profit;

}
document.onkeyup = function(e) {
	// 兼容FF和IE和Opera
	var event = e || window.event;
	var key = event.which || event.keyCode || event.charCode;
	if (key == 13) {
		count(); 
	}
  }