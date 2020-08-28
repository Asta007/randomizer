function rand_between(min,max){
    let minus = max - min ; 
    return( Math.floor(Math.random() * minus ) + parseInt(min))
}

$(document).ready(function(){
    var ellipse1 = $('#ellipse1');
    var ellipse2 = $('#ellipse2');
    var num = $('#number') ;
    var gen_btn = $('#btn') ;

    gen_btn.on('click',function(){
        // ================== Declaration

        let min = $('#form #minimal').val();
        let max = $('#form #maximal').val();

        // ==================== The between function
         
        let rand = rand_between(min,max);
        console.log(rand);

        // ==================== View with Zero

        if(rand < 10){
            num.text('0' + rand)
        }
        else{
            num.text(rand);
        }
        
        // ===================== CountUp
        var count = new CountUp('number', 0 , rand , 0 , 2) ;
        count.start();

    })
})