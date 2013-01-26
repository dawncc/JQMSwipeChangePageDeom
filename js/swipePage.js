
 	/*
 	 实现navbar分栏的滑动跳转页面，左划为上一页，又划为下一页，到尾页时跳转到头一页
 	 动态获取页数
 	 当前页高亮显示
 	 */
 	 (function($) {

 	 	var methods = {
 	 		init : function(options) {
 	 			var settings = {
          callback: function() {},
        };
        if ( options ) {
         $.extend( settings, options );
       }
       $(":jqmData(role='page')").each(function() {
        var currentPage = $(this);
        currentPage.bind("swiperight", function() {

          // // Get the current page number from the id and increment it by 1.
          // currentPage = parseInt(currentPage.attr("id").split("_")[1]);
          // var nextPage = currentPage +1;
          // if (nextPage > pageCount) nextPage = 1;
          // $.mobile.changePage(options.page_id+"_"+nextPage);
          var nextPage = currentPage.next(":jqmData(role=page)");
          if(!nextPage.length)
          {
            nextPage = $(":jqmData(role='page'):first");
          }
          $.mobile.changePage(nextPage);

        });
        currentPage.bind("swipeleft", function() {

          // Get the current page number from the id and decrement it by 1.
          // currentPage = parseInt(currentPage.attr("id").split("_")[1]);
          // var nextPage = currentPage -1;
          // if (nextPage === 0) nextPage = pageCount;
          //  $.mobile.changePage(options.page_id+ "_"+nextPage);
          var prePage = currentPage.prev(":jqmData(role=page)");
          if(!prePage.length)
          {
            prePage = $(":jqmData(role='page'):last");
          }

          $.mobile.changePage(prePage);

        });

      })

}
}

$.fn.initApp = function(method) {

    // Method calling logic
    if ( methods[method] ) {
    	return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
    	return methods.init.apply( this, arguments );
    } else {
    	$.error( 'Method ' +  method + ' does not exist' );
    } 
  }
})(jQuery);

