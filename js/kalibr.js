var flag3;
function calc3(){
	ss1 = Number($("#ss1").val()); 
	ss2 = Number($("#ss2").val()); 
	
	if(ss1 >= ss2)
	{
		$("#summ3").val('Звания выбраны не верно!');
		flag3 = false;
	}
	else
	{
		full_summ3 = $("#ss2 option:selected").attr('data-price') - $("#ss1 option:selected").attr('data-price')
                
                if($("#onemore3").prop("checked")) full_summ3 = full_summ3 + 35;
                if($("#skincheck3").prop("checked")) full_summ3 = full_summ3 * 1.45;
                if($("#lobbycheck3").prop("checked")) full_summ3 = full_summ3 * 1.50;
                if($("#fastcheck3").prop("checked")) full_summ3 = full_summ3 * 2;
		$("#summ3").val(Math.round(350)+' рублей');
		$("#sum3").val(Math.round(full_summ3));
		
		flag3 = true;
	}
	
	
	
	$("#spic1").attr('src','images/rank/'+ss1+'.png'); 
	$("#spic2").attr('src','images/rank/'+ss2+'.png');
}

$("#ss1").change(function(){calc3();});
$("#ss2").change(function(){calc3();});
$("#skincheck3").change(function(){calc3();});
$("#lobbycheck3").change(function(){calc3();});
$("#fastcheck3").change(function(){calc3();});
$("#onemore3").change(function(){calc3();});

calc3();