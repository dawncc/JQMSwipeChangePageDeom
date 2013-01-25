
 	/*
 	 实现navbar分栏的滑动跳转页面，左划为上一页，又划为下一页，到尾页时跳转到头一页
 	 动态获取页数
 	 当前页高亮显示
 	 */
 	 (function($) {

 	 	var methods = {
 	 		init : function(options) {
 	 			var settings = {
          page_id : "page_",
          callback: function() {},
        };
        if ( options ) {
         $.extend( settings, options );
       }

       var pageCount = $(":jqmData(role='page')").length;
       var currentPage = 0;
         // page_id若以#开始，则为page的id， 否则为相对路径需要加载html后缀
        $(":jqmData(role='page')").each(function() {
         $(this).bind("swiperight", function() {

          // Get the current page number from the id and increment it by 1.
          currentPage = parseInt($(this).attr("id").split("_")[1]);
          var nextPage = currentPage +1;
          if (nextPage > pageCount) nextPage = 1;

          // Transition the page.


          $.mobile.changePage(options.page_id+"_"+nextPage);

        });
         $(this).bind("swipeleft", function() {

          // Get the current page number from the id and decrement it by 1.
          currentPage = parseInt($(this).attr("id").split("_")[1]);
          var nextPage = currentPage -1;
          if (nextPage === 0) nextPage = pageCount;

          // Transition the page.
          $.mobile.changePage(options.page_id+ "_"+nextPage);
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

