function count() {
    let data = document.getElementById("table1");
    let daDeductta = document.getElementById("table3");
    let Deduct = daDeductta.tBodies[0].rows[0]
    let viewWholeStaffWagesTable = document.getElementById("table2");
    let btn = document.getElementById("btn");
    let lateDeduct = Deduct.cells[0].childNodes[0].value;
    let LackCardsDeduct = Deduct.cells[1].childNodes[0].value;
    let seriousLateDeduct = Deduct.cells[2].childNodes[0].value;
    let absenteeismDeduct = Deduct.cells[3].childNodes[0].value;
    let ifonclick = 0;
    //data.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];
    //data.tBodies[0].rows[0].cells[0]
    // console.log(data);
    let wholeStaffWages = [];
    for (var i = 0; i < data.rows.length-1; i++) {
        var lineData = data.tBodies[0].rows[i];
        // 基本工资
        let basicSalary = parseFloat(lineData.cells[1].childNodes[0].value);
        // 全勤奖
        let FullAttendance = parseFloat(lineData.cells[2].childNodes[0].value);
        // 迟到次数
        let late = parseFloat(lineData.cells[3].childNodes[0].value);
        // 缺卡次数
        let LackCards = parseFloat(lineData.cells[4].childNodes[0].value);
        // 严重迟到次数
        let seriousLate = parseFloat(lineData.cells[5].childNodes[0].value);
        // 旷工次数
        let absenteeism = parseFloat(lineData.cells[6].childNodes[0].value);
        // 实际工资
        let total = basicSalary + FullAttendance 
        - (late * lateDeduct)
        - (LackCards * LackCardsDeduct)
        - (seriousLate * seriousLateDeduct)
        - (absenteeism * absenteeismDeduct);
        let staffName = lineData.cells[0].innerHTML;
        let Wages = new Object();
        Wages.Wagesname = staffName;
        Wages.staffTotal = total;
        // console.log(Wages);
        wholeStaffWages.push(Wages);
    }
    // console.log(wholeStaffWages);
    if (ifonclick == 0) {
        let header = viewWholeStaffWagesTable.createTHead();
        let tableBody = viewWholeStaffWagesTable.insertRow(0);
        let tableHead = header.insertRow(0);
        let abc = wholeStaffWages.reverse()
        let bbc = abc.map(function (item, index) {
            tableHead.insertCell(0).innerHTML = item.Wagesname;
            tableBody.insertCell(0).innerHTML = item.staffTotal;
            // console.log(abc);
        });
    }
    btn.disabled=true;
}