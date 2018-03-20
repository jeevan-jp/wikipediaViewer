$(document).ready(function(){
	$('#keyword').focus();
	function searchOnWiki(){

		var key = $("#keyword").val();
		var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + key + "&format=json&callback=?";

		$.ajax({
			type: "GET",
			url: api,
			async: false,
			dataType: "json",
			success: function(data){
				console.log(data);
				$('#dataList ul').html('');
				for(var i=0; i<data[1].length; i++)
				{
					$("#dataList ul").append("<a href='"+ data[3][i] +"' target='_blank'><li><div class='decoration'><h5>"+ data[1][i] + "</h5><span>" + data[2][i] + "</span></div></li></a>");
				}
				$('#search1').hide();
			},
			error: function(errorMessage){
				alert("error!");
			}
		})
	}

	$('#basic-addon1').click(function(){
		searchOnWiki();
	});

	$('#search1').click(function(){
		searchOnWiki();
	});

	$('#middle').submit(function(e){
		e.preventDefault();
		searchOnWiki();
	});

	$('#random').click(function(e){
		e.preventDefault();
		window.open('https://en.wikipedia.org/wiki/Special:Random');
	})

})

