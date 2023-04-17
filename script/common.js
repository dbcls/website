$.ajax({
  url: "https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%80%E8%A6%A7?key=AIzaSyAIstRfTWKWRqNKpkMk-uGYAQJw0myzMh4",
  dataType: "json",
  async: true,
  success: function(data) {
    var elementArray = data.values;
    //column1に" "のあるrowをとってくる
    var symbolList = elementArray.filter((List) => {
      return (List[0] === "Y");
    })
    var element = "";
    element += '<div class="f-bg"><div class="f-services__contents" id="f-services__contents">';
    for (var i = 0; i < symbolList.length; i++) {
      element +=
	      '<a href="' + symbolList[i][4] + '">' +
        '<img src="./img/service_assets/' + symbolList[i][23] + '.png" alt="' + symbolList[i][2] + '" class="object-fit-img img_services">' + 
        '</a>'
    }
    element += '<a href="#" class="f-services__btn">more</a>' + '</div></div>';
  
    //#featured-servicesクリックイベントHeader-common gNav f-services
		$(document).on("click","#featured-services", function() {

		  if($('.f-bg').length){
		  	$(".f-bg").remove();
        $(".f-hide-box").remove();
		  }else {
			  $("#featured-services").append(element);
        $('body').append('<div class="f-hide-box"></div>');
			}
      //内をクリックした際非表示にしない
      $('.f-bg').click(function (event) {
        event.stopPropagation();
      });
      // 外をクリックした際非表示にする
      $('.f-hide-box').click(function () {
        $('.f-bg').remove();
        $(".f-hide-box").remove();
      });
		});
  }
});


