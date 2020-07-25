function quydoi(score){
    if (score<4) return 0;
    else if (score<5) return 1;
    else if (score<5.5) return 1.5;
    else if (score<6.5) return 2;
    else if (score<7) return 2.5;
    else if (score<8) return 3.0;
    else if (score<8.5) return 3.5;
    else return 4.0;
}


var number = 1;

$("#add").click(() => {
    $("html, body").animate({ scrollTop: $("#result").offset().top }, 1000);
    number++;
    var child = `<div class="table-subject row" id="subject-${number}">
        <div class="input-field col s6">
            <input id="subject-${number}-mon" type="text" class="validate">
            <label for="subject-${number}-mon">Môn thứ ${number}</label>
        </div>

        <div class="input-field col s6">
            <input id="subject-${number}-heso" type="number" class="validate" step="0.1">
            <label for="subject-${number}-heso">Trọng số</label>
        </div>

        <div class="input-field col s6">
            <input id="subject-${number}-qt" type="number" class="validate" step="0.1">
            <label for="subject-${number}-qt">Điểm quá trình</label>
        </div>

        <div class="input-field col s6">
            <input id="subject-${number}-ck" type="number" class="validate" step="0.1">
            <label for="subject-${number}-ck">Điểm cuối kì</label>
        </div>

        <div class="input-field col s6">
            <input id="subject-${number}-hp" type="number" class="validate" step="0.1">
            <label for="subject-${number}-hp">Số tín chỉ</label>
        </div>

        <div class="col s6">
            <p id="subject-${number}-score">Điểm môn này (thang 4):</p>
        </div>
    </div>`;
    $(".main-table").append(child);
    console.log(child);
})

$("#remove").click(() => {
    
    $("html, body").animate({ scrollTop: $(`#subject-${number-1}-mon`).offset().top }, 1000);
    $(`#subject-${number}`).remove();
    number--;
    
})

$("#result").click(() => {
    var i, tongTin = 0, result = 0;
    for (i=1;i<=number;i++){
        var heso = $(`#subject-${i}-heso`).val();
        var qt = $(`#subject-${i}-qt`).val();
        var ck = $(`#subject-${i}-ck`).val();
        var hp = $(`#subject-${i}-hp`).val();
        var thang4 = quydoi((qt*heso + ck*(1-heso)));

        $(`#subject-${i}-score`).html("Điểm môn này (thang 4): " + thang4 );

        result = result + thang4*hp;
        tongTin = tongTin + parseInt(hp);
    }
        
        console.log("tong diem:" + result);
        console.log("tong tin:" + tongTin);
        
        result = result / tongTin;
        result = Math.round(result * 100) / 100
        $("#resultText").html("Kết quả: "+result);
        // console.log(result);
})
