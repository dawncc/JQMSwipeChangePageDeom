
 	/*
 	 实现navbar分栏的滑动跳转页面，左划为上一页，又划为下一页，到尾页时跳转到头一页
 	 动态获取页数
 	 当前页高亮显示
   1-25： 修改动态加载changePage路径，加载方式为从navbar下li获取对应的加载路径
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

     //遍历header->navba->a->href的值
     var pagePathList = [];
     /*
     jqm加载页面的方式采用ajax加载模式,加载多个页面后header会有多个
     */  
      $(":jqmData(role='header'):first :jqmData(role='navbar') a").each(function(index){
        pagePathList.push($(this).attr("href"));
      });
     var pageCount = pagePathList.length;
     var currentPage = 0;
         // page_id若以#开始，则为page的id， 否则为相对路径需要加载html后缀
         $(":jqmData(role='page')").each(function() {

           $(this).on("swiperight", function() {
          // Get the current page number from the id and increment it by 1.
          // 页面文件名和页面ID的前缀必须一样
          var currentPageName = $(this).attr("id") + ".html";
          currentPage = jQuery.inArray(currentPageName, pagePathList);

          var nextPage = currentPage +1;
          if (nextPage >= pageCount) {
            nextPage = 0;
          }
          var nextPagePath = pagePathList[nextPage];
          // Transition the page.
          $.mobile.changePage(nextPagePath);
           return false;
        });

           $(this).on("swipeleft", function() {

          // Get the current page number from the id and decrement it by 1.
          var currentPageName = $(this).attr("id") + ".html";
          currentPage = jQuery.inArray(currentPageName, pagePathList);
          var prePage = currentPage -1;
          if (prePage < 0) {
            prePage = pageCount -1;
          }
          var prePagePath = pagePathList[prePage];
          $.mobile.changePage(prePagePath);
          return false;
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

