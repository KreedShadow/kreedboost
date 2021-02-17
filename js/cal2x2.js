var flag2;
function calc2(){
	ns1 = Number($("#ns1").val()); 
	ns2 = Number($("#ns2").val()); 
	
	if(ns1 >= ns2)
	{
		$("#summ2").val('Звания выбраны не верно!');
		flag2 = false;
	}
	else
	{
		full_summ2 = $("#ns2 option:selected").attr('data-price') - $("#ns1 option:selected").attr('data-price')
                
                if($("#onemore2").prop("checked")) full_summ2 = full_summ2 + 35;
                if($("#skincheck2").prop("checked")) full_summ2 = full_summ2 * 1.45;
                if($("#lobbycheck2").prop("checked")) full_summ2 = full_summ2 * 1.50;
                if($("#fastcheck2").prop("checked")) full_summ2 = full_summ2 * 2;
		$("#summ2").val(Math.round(full_summ2)+' рублей');
		$("#sum2").val(Math.round(full_summ2));
		
		flag2 = true;
	}
	
	
	
	$("#npic1").attr('src','images/rank2x2/'+ns1+'.png'); 
	$("#npic2").attr('src','images/rank2x2/'+ns2+'.png');
}

$("#ns1").change(function(){calc2();});
$("#ns2").change(function(){calc2();});
$("#skincheck2").change(function(){calc2();});
$("#lobbycheck2").change(function(){calc2();});
$("#fastcheck2").change(function(){calc2();});
$("#onemore2").change(function(){calc2();});

calc2();