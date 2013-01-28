/**
 * Y.Slide
 * @info http://jayli.github.com/gallery/yuislide
 * @author 鎷旇丹/鐏电帀/铏庣墮
 * 骞荤伅鐗囩壒鏁�,鐗规晥榛樿涓簄one,fade:娓愰殣,h-slide:姘村钩鍒囨崲,'v-slide':鍨傜洿鍒囨崲<br/>
 * 瀹炰緥璇濊鏄庯細new Y.Slide(id,options);
 * @module slide
 * @class Y.Slide
 * @constructor
 * @param {string} id 瀹瑰櫒id
 * @param {object} config 鍒濆閰嶇疆椤癸紝鍏蜂綋鍙傛暟瀵硅薄濡備笅锛�
 * <ul>
 * <li>autoSlide:(boolean) 鏄惁鑷姩鎾斁锛岄粯璁や负false</li>
 * <li>speed:(float) 鍒囨崲鐗规晥鐨勯€熷害锛岄粯璁や负0.5</li>
 * <li>timeout:(Number) 鍒囨崲鏃堕棿闂撮殧,榛樿涓�1000姣</li>
 * <li>effect:(string) 鐗规晥绫诲瀷锛岄粯璁や负'none'锛屽彇鍊硷細'none',鏃犵壒鏁�,'fade',娓愰殣,'h-slide',姘村钩鍒囨崲,'v-slide',鍨傜洿鍒囨崲</li>
 * <li>eventype:(string) 瑙﹀彂tab鍒囨崲鐨勪簨浠剁被鍨嬶紝榛樿涓�'click',鍙栧€硷細'click',鐐瑰嚮锛�'mouseover',榧犳爣婊戣繃</li>
 * <li>easing:(string) 鍒囨崲闈㈡澘鐨勭壒鏁堥鏍硷紝榛樿涓�'easeBoth',鍙傝€僘UI doc</li>
 * <li>hoverStop:(boolean) 榧犳爣鎮仠闈㈡澘涓婃槸鍚﹀仠姝㈡挱鏀撅紝榛樿涓簍rue</li>
 * <li>selectedClass:(string) tab閫変腑鏃剁殑class name锛岄粯璁や负'selected'</li>
 * <li>conClass:(string) 瀹瑰櫒鐨刢lass name锛岄粯璁や负't-slide'锛岀洰鍓嶆病鏈夌敤</li>
 * <li>navClass:(string) tab瀹瑰櫒鐨刢lass name锛岄粯璁や负'tab-nav'</li>
 * <li>contentClass:(string) tab鍐呭瀹瑰櫒鐨刢lass name,榛樿涓簍ab-content</li>
 * <li>pannelClass:(string) tab闈㈡澘鐨刢lass name锛岄粯璁や负tab-pannel</li>
 * <li>id:(string) hook</li>
 * <li>before_switch:(function) 鍒囨崲涔嬪墠鎵ц鐨勫姩浣滐紝鍙傛暟鍚宻witch浜嬩欢鐨勫弬鏁帮紝杩斿洖true锛岀户缁墽琛岋紝杩斿洖false锛屽仠姝㈡墽琛�</li>
 * <li>ready:(function) 鍒濆鍖栧畬鎴愬悗鐨勫洖璋冿紝鍙傛暟鍚宻witch浜嬩欢鐨勫弬鏁帮紝褰撳墠index涓�0</li>
 * <li>carousel:(boolean) 鏄惁浠ユ棆杞湪椹舰寮忔挱鏀撅紝榛樿涓篺alse</li>
 * <li>touchmove:(boolean) 鏄惁鏀寔鎵嬫寚婊戝姩锛岄粯璁や负false</li>
 * <li>adaptive_fixed_width:(boolean) 灞忓箷鏄惁鏍规嵁鎺т欢鐨勫搴︽敼鍙橀噸鏂版覆鏌撳昂瀵革紝榛樿涓篺alse锛屼富瑕佸湪缁勪欢瀹氬楂樼殑鍦烘櫙涓紝淇濊瘉resize鏃秚ab-pannel灏哄姝ｇ‘</li>
 * <li>adaptive_fixed_height:(boolean) 灞忓箷鏄惁鏍规嵁鎺т欢鐨勯珮搴︽敼鍙橀噸鏂版覆鏌撳昂瀵革紝榛樿涓篺alse,涓昏鍦ㄧ粍浠跺畾瀹介珮鐨勫満鏅腑锛屼繚璇乺esize鏃秚ab-pannel灏哄姝ｇ‘</li>
 * <li>adaptive_fixed_size:(boolean) 灞忓箷鏄惁鏍规嵁鎺т欢鐨勫搴﹀拰楂樺害鏀瑰彉閲嶆柊娓叉煋灏哄锛岄粯璁や负false,涓昏鍦ㄧ粍浠跺畾瀹介珮鐨勫満鏅腑锛屼繚璇乺esize鏃秚ab-pannel灏哄姝ｇ‘</li>
 * <li>adaptive_width:(function)锛屽鏋滄槸鐧惧垎姣旇缃鍣ㄧ殑瀹藉害鐨勮瘽锛岄渶瑕佹寚瀹氳繖涓嚱鏁帮紝鍔ㄦ€佺殑寰楀埌鍙彉鍖栫殑瀹藉害,榛樿涓篺alse
 * <li>reverse:(boolean) "鎾斁涓嬩竴涓�"鍜�"鎾斁涓婁竴涓�"瀵硅皟锛岄粯璁や负false</li>
 * </ul>
 */
YUI.namespace('Y.Slide');
YUI.add('slide',function(Y){

	Slide = function(){
		this.init.apply(this,arguments);
	};

	Y.mix(Slide,{
		init:function(id,config){
			var that = this;
			that.id = id;
			//鎺ュ彈鍙傛暟
			that.buildParam(config);
			//鏋勫缓浜嬩欢涓績
			that.buildEventCenter();
			//鏋勯€犲嚱鏁�
			that.construct();
			//缁戝畾浜嬩欢
			that.bindEvent();

			//鎵цready
			that.ready({
				index:0,
				navnode:that.tabs.item(0),
				pannelnode:that.pannels.item(0)
			});

			if(that.reverse){
				var _t ;
				_t = that.previous,
				that.previous = that.next,
				that.next = _t;
			}

			// 鍦ㄧЩ鍔ㄧ粓绔腑鐨勪紭鍖�
			if(that.carousel){
				that.fix_for_transition_when_carousel();
			}

			that.fixSlideSize();

			return this;
		},
		//娓叉煋textarea涓殑鍐呭锛屽苟鏀惧湪涓庝箣鐩搁偦鐨勪竴涓猟iv涓紝鑻ユ湁鑴氭湰锛屾墽琛屽叾涓剼鏈�
		renderLazyData:function(textarea){
			textarea.setStyle('display','none');
			if(textarea.getAttribute('lazy-data')=='1'){
				return ;
			}
			textarea.setAttribute('lazy-data','1');
			var	id = Y.stamp(div),
				html = textarea.get('innerHTML').replace(/&lt;/ig,'<').replace(/&gt;/ig,'>'),
				div = Y.Node.create('<div>'+html+'</div>');
			textarea.insert(div,'before');

			var globalEval = function(data){
				if (data && /\S/.test(data)) {
					var head = document.getElementsByTagName('head')[0] || docElem,
						script = document.createElement('script');

					// 绁炲鐨勬敮鎸佹墍鏈夌殑娴忚鍣�
					script.text = data;

					head.insertBefore(script, head.firstChild);
					head.removeChild(script);
				}
			};

			var id = 'K_'+new Date().getTime().toString(),
				re_script = new RegExp(/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig); // 闃叉杩囨护閿欒


			var hd = Y.Node.getDOMNode(Y.one('head')),
				match, attrs, srcMatch, charsetMatch,
				t, s, text,
				RE_SCRIPT_SRC = /\ssrc=(['"])(.*?)\1/i,
				RE_SCRIPT_CHARSET = /\scharset=(['"])(.*?)\1/i;

			re_script.lastIndex = 0;
			while ((match = re_script.exec(html))) {
				attrs = match[1];
				srcMatch = attrs ? attrs.match(RE_SCRIPT_SRC) : false;
				// 閫氳繃src鎶撳彇鍒拌剼鏈�
				if (srcMatch && srcMatch[2]) {
					s = document.createElement('script');
					s.src = srcMatch[2];
					// 璁剧疆缂栫爜绫诲瀷
					if ((charsetMatch = attrs.match(RE_SCRIPT_CHARSET)) && charsetMatch[2]) {
						s.charset = charsetMatch[2];
					}
					s.async = true; // hack gecko
					hd.appendChild(s);
				}
				// 濡傛灉鏄唴鑱旇剼鏈�
				else if ((text = match[2]) && text.length > 0) {
					globalEval(text);
				}
			}
				
		},
		// 鏋勫缓浜嬩欢涓績
		buildEventCenter:function(){
			var that = this;
			var EventFactory = function(){
				this.publish("switch");//瀹為檯涓婂氨鏄痓efore_switch
				this.publish("after_switch");//鏈疄鐜�
				this.publish("before_switch");//鏈疄鐜�
			};
			Y.augment(EventFactory, Y.Event.Target);
			that.EventCenter = new EventFactory();
			return this;
		},
		// 缁戝畾鍑芥暟 
		on:function(type,foo){
			var that = this;
			that.EventCenter.subscribe(type,foo);
			return this;
		},
		//鏋勫缓html缁撴瀯
		construct: function() {
            var that = this;
			var con = that.con = Y.one('#' + that.id);
            that.tabs = con.all('.' + that.navClass + ' li');
            var tmp_pannels = con.all('.' + that.contentClass + ' div.' + that.pannelClass);
            that.length = tmp_pannels.size();
            if (that.tabs.size() == 0) {
                //nav.li娌℃湁鎸囧畾锛岄粯璁ゆ寚瀹�1234
                var t_con = con.all('.' + that.navClass);
				var t_str = '';
                for (var i = 0; i < that.length; i++) {
                    var t_str_prefix = '';
                    if (i == 0) {
                        t_str_prefix = that.selectedClass;
                    }
                    t_str += '<li class="' + t_str_prefix + '"><a href="javascript:void(0);">' + (i + 1) + '</a></li>';
                }
                t_con.set('innerHTML', t_str);
            }
            that.tabs = con.all('.' + that.navClass + ' li');//閲嶆柊璧嬪€�
            that.animcon = con.one('.' + that.contentClass);
            that.animwrap = null;
            if (that.effect == 'none') {
                that.pannels = con.all('.' + that.contentClass + ' div.' + that.pannelClass);
				//that.pannels.addClass('hidden');
				that.pannels.setStyles({
					display:'none'	
				});
				//that.pannels.item(that.defaultTab).removeClass('hidden');
				that.pannels.item(that.defaultTab).setStyles({
					'display':'block'	
				});
            } else if (that.effect == 'v-slide') {
                that.animwrap = Y.Node.create('<div style="position:absolute;"></div>');
                that.animwrap.set('innerHTML', that.animcon.get('innerHTML'));
                that.animcon.set('innerHTML', '');
                that.animcon.appendChild(that.animwrap);
                that.pannels = con.all('.' + that.contentClass + ' div.' + that.pannelClass);
                //缁熶竴瀹瑰櫒鍜宨tem鐨勫楂樺強閫変腑榛樿鍊�
                var animconRegion = that.animcon.get('region');
                that.pannels.setStyles({
                    'float': 'none',
                    'overflow': 'hidden'
                });
                that.animwrap.setStyles({
                    'height': that.length * animconRegion.height + 'px',
                    'overflow': 'hidden',
                    'top': -1 * that.defaultTab * animconRegion.height + 'px'
                });
            } else if (that.effect == 'h-slide') {
                that.animwrap = Y.Node.create('<div style="position:absolute;"></div>');
                that.animwrap.set('innerHTML', that.animcon.get('innerHTML'));
                that.animcon.set('innerHTML', '');
                that.animcon.appendChild(that.animwrap);
                that.pannels = con.all('.' + that.contentClass + ' div.' + that.pannelClass);
                //缁熶竴瀹瑰櫒鍜宨tem鐨勫楂樺強閫変腑榛樿鍊�
                var animconRegion = that.animcon.get('region');
                that.pannels.setStyles({
                    'float': 'left',
                    'overflow': 'hidden'
                });
                that.animwrap.setStyles({
                    'width': that.length * animconRegion.width + 'px',
                    'overflow': 'hidden',
                    'left': -1 * that.defaultTab * animconRegion.width + 'px'
                });
            } else if (that.effect == 'fade') {
                that.pannels = con.all('.' + that.contentClass + ' div.' + that.pannelClass);
                that.pannels.setStyles({
                    'position': 'absolute',
                    'zIndex': 0
                });
                that.pannels.each(function(node, i){
                    if (i == that.defaultTab) {
                        //node.removeClass('hidden');
                        node.setStyles({
							'opacity': 1,
							'display': 'block'
						});
                    } else {
                        //node.addClass('hidden');
                        node.setStyles({
							'opacity':0,
							'diaplay':'none'	
						});
                    }
                });
            }
			that.fixSlideSize(that.current_tab);
            //娣诲姞閫変腑鐨刢lass
			that.hightlightNav(that.getWrappedIndex(that.current_tab));
            //鏄惁鑷姩鎾斁
            if (that.autoSlide == true) {
                that.play();
            }
            return this;
        },


		// 閲嶆柊娓叉煋slide鍐呴〉(pannels)鐨勫搴�
		renderWidth:function(){
			var that = this;
			//鏈夊彲鑳絘nimcon娌℃湁瀹氫箟瀹藉害
			var width = that.animcon.get('region').width;
			that.pannels.setStyles({
				width:width + 'px'
			});
			return this;
		},
		
		//閲嶆柊娓叉煋slide鍐呴〉(pannels)鐨勯珮搴�
		renderHeight :function(){
			var that = this;
			//鏈夊彲鑳絘nimcon娌℃湁瀹氫箟楂樺害
			var height = that.animcon.get('region').height;
			that.pannels.setStyles({
				height:height + 'px'
			});
			return this;
		},

		//褰撳綋鍓嶅抚鐨勪綅缃笉姝ｇ‘鏃讹紝閲嶆柊瀹氫綅褰撳墠甯у埌姝ｇ‘鐨勪綅缃�,鏃犲姩鐢�
		relocateCurrentTab:function(){
			var that = this;
			var index = that.current_tab;
			if(that.effect != 'h-slide'){
				return;
			}

			if(that.transitions){
				that.animwrap.setStyles({
					'-webkit-transition-duration': '0s',
					'-webkit-transform':'translate3d('+(-1 * index * that.animcon.get('region').width)+'px,0,0)'
				});
			}else{
				that.animwrap.setStyles({
					left: -1 * index * that.animcon.get('region').width
					
				});
			}
			return this;
		},

		//鏍规嵁閰嶇疆鏉′欢淇鎺т欢灏哄
		// 閲嶆柊娓叉煋slide鐨勫昂瀵革紝
		// 鏍规嵁goto鍒扮殑index绱㈠紩鍊兼覆鏌撳綋鍓嶉渶瑕佺殑闀垮害鍜屽搴�
		fixSlideSize:function(index){
			var that = this;
			if(that.adaptive_fixed_width){
				that.renderWidth();
			}
			if(that.adaptive_fixed_height){
				that.renderHeight();
			}
			if(that.adaptive_fixed_size){
				that.renderHeight().renderWidth();
			}
			that.resetSlideSize(index);
			return this;
		},

		//鍦╞efore_switch鍜寃indowResize鐨勬椂鍊欐墽琛岋紝鏍规嵁spec_width鏄惁鎸囧畾锛屾潵鍐冲畾鏄惁閲嶇疆椤甸潰涓殑閫傞厤鍑烘潵鐨勫搴﹀拰楂樺害骞惰祴鍊�
		// index鏄痝oto鐨勭洰鏍噒ab-pannel鐨勭储寮�
		// 杩欎釜鍑芥暟涓昏閽堝妯悜婊氬姩鏃跺悇涓猵annel楂樺害涓嶅畾鐨勬儏鍐�
		resetSlideSize:function(index){
			var that = this;
			if(typeof index == 'undefined' || index == null){
				index = that.current_tab;
			}
			// 濡傛灉娌℃湁寮€鍏筹紝鎴栬€呮病鏈夋粦鍔ㄧ壒鏁堬紝鍒欓€€鍑哄嚱鏁帮紝涓嶆敮鎸佸瀭鐩存粦鍔ㄧ殑鎯呭喌
			if(that.effect != 'h-slide'){
				return;
			}
			//var width = that.spec_width();
			
			var width = that.adaptive_width ? 
									that.adaptive_width():
									that.animcon.get('region').width;


			// pannels鐨勯珮搴︽槸涓嶅畾鐨勶紝楂樺害鏄牴鎹唴瀹�
			// 鏉ユ拺寮€鐨勫洜姝や笉鑳借缃珮搴︼紝鑰屽搴﹀垯闇€瑕佽缃�
			that.pannels.setStyles({
				width:width+'px',
				display:'block'
			});
			var height = that.pannels.item(index).get('region').height;
			that.animcon.setStyles({
				width:width+'px',
				height:height+'px',
				//寮哄埗pannel鐨勫唴瀹逛笉瓒呰繃鍔ㄧ敾瀹瑰櫒鐨勮寖鍥�
				overflow:'hidden'
			});
			return this;
		},

		// 寰楀埌tabnav搴斿綋鏄剧ず鐨勫綋鍓峣ndex绱㈠紩锛�0,1,2,3...
		getWrappedIndex:function(index){
			var that = this,wrappedIndex = 0;

			if(index == 0){
				//debugger;
			}
			if(that.carousel){
				if(index == 0){
					wrappedIndex = that.length - 3;
				}else if(index == that.length - 1){
					wrappedIndex = 0;
				}else {
					wrappedIndex = index - 1;
				}
			}else{
				wrappedIndex = index;
			}
			return wrappedIndex;
		},


		// 缁戝畾榛樿浜嬩欢
		bindEvent:function(){
			var that = this;
			if(that.eventype == 'click' || that.eventype == 'mouseover'){
				that.con.delegate(that.eventype,function(e){
					e.halt();
					var ti = Number(that.tabs.indexOf(e.currentTarget));
					if(that.carousel){
						ti = (ti + 1) % that.length;
					}
					that.goto(ti);
					//if(that.autoSlide)that.stop().play();
				},'.'+that.navClass+' li');
			}

			// 鏄惁鏀寔榧犳爣鎮仠鍋滄鎾斁
			if(that.hoverStop){
				that.con.delegate('mouseover',function(e){
					//e.halt();
					if(that.autoSlide)that.stop();
				},'.'+that.contentClass+' div.'+that.pannelClass);
				that.con.delegate('mouseout',function(e){
					//e.halt();
					if(that.autoSlide)that.play();
				},'.'+that.contentClass+' div.'+that.pannelClass);
			}

			// 缁戝畾绐楀彛resize浜嬩欢 
			Y.on('resize',function(e){
				that.fixSlideSize(that.current_tab);
				that.relocateCurrentTab();
			},window);

			//缁堢浜嬩欢瑙﹀睆浜嬩欢缁戝畾
			if ('ontouchstart' in document.documentElement) {

				that.con.delegate('touchstart',function(e){
					that.stop();
					that.touching = true;
					if(that.is_last() && that.carousel){
						that.fix_next_carousel();
					}
					if(that.is_first() && that.carousel){
						that.fix_pre_carousel();
					}
					that.startX = e._event.changedTouches[0].clientX;
					that.startY = e._event.changedTouches[0].clientY;
					that.animwrap.setStyles({
						'-webkit-transition-duration': '0s'
					});
					that.startT = Number(new Date());//濡傛灉蹇€熸墜婊戯紝鍒欐帬杩噒ouchmove锛屽洜姝ら渶瑕佽绠楁椂闂�
				},'.tab-content'); 

				that.con.delegate('touchend',function(e){
					that.touching = false;
					var endX  = e._event.changedTouches[0].clientX;
					var width = Number(that.animcon.get('region').width);
					that.deltaX = Math.abs(endX - that.startX);//婊戣繃鐨勮窛绂�
					var swipeleft = (Math.abs(endX) < Math.abs(that.startX));//鏄惁鏄悜宸︽粦鍔�
					var swiperight = !swipeleft;
					//鍒ゆ柇鏄惁鍦ㄨ竟鐣屽弽婊戝姩锛宼rue锛屽嚭鐜颁簡鍙嶆粦鍔紝false锛屾甯告粦鍔�
					var anti = that.carousel ? false : ( that.is_last() && swipeleft || that.is_first() && swiperight );


					//澶嶄綅
					var reset = function(){
						that.animwrap.setStyles({
							'-webkit-transition-duration': (Number(that.speed) / 2) + 's',
							'-webkit-transform':'translate3d('+(-1 * that.current_tab * that.animcon.get('region').width)+'px,0,0)'
						});
					};

					//鏍规嵁鎵嬪娍璧板悜涓婁竴涓垨涓嬩竴涓�
					var goswipe = function(){
						if(swipeleft){//涓嬩竴甯�
							that.next();
						}else{//涓婁竴甯�
							that.previous();
						}
					};

					//濡傛灉妫€娴嬪埌鏄笂涓嬫粦鍔紝鍒欏浣嶅苟return
					if(that.isScrolling){
						reset();
						return;
					}

					//濡傛灉婊戝姩鐗╃悊璺濈澶皬锛屽垯澶嶄綅骞秗eturn
					//杩欎釜鏄伩鍏嶅皢涓嶇簿纭殑鐐瑰嚮璇涓烘槸婊戝姩
					if(that.touchmove && that.deltaX < 20){
						reset();
						return;
					}


					if(		!anti && (
								// 鏀寔touchmove锛岃窇椹伅鏁堟灉锛屼换鎰忓抚锛宼ouchmove瓒冲鐨勮窛绂�
								( that.touchmove && (that.deltaX > width / 3) ) ||
								// 涓嶆敮鎸乼ouchmove锛岃窇椹伅
								( !that.touchmove && that.carousel ) ||
								// 姝ｅ父tab锛屾敮鎸乼ouchmove锛屾í鍚戝垏鎹�
								( !that.carousel && that.touchmove && that.effect == 'h-slide' ) || 
								// 涓嶆敮鎸乼ouchmove锛屼笉鏀寔璺戦┈鐏�
								( !that.touchmove && !that.carousel) ||
								//蹇€熸墜婊�
								( Number(new Date()) - that.startT < 550 )
							)
						
						){

							//鏍规嵁鏍规嵁鎵嬫粦鏂瑰悜缈诲埌涓婁竴椤靛拰涓嬩竴椤�
							goswipe();

					}else{
						//澶嶄綅
						reset();
					}

					if(that.autoSlide){
						that.play();
					}
				},'.tab-content');


				//澶勭悊鎵嬫寚婊戝姩浜嬩欢鐩稿叧
				if(that.touchmove){

					that.con.delegate('touchmove',function(e){
						// 纭繚鍗曟墜鎸囨粦鍔紝鑰屼笉鏄鐐硅Е纰�
						if(e._event.touches.length > 1 ) return;

						//deltaX > 0 锛屽彸绉伙紝deltaX < 0 宸︾Щ
						that.deltaX = e._event.touches[0].pageX - that.startX; 

						//鍒ゆ柇鏄惁鍦ㄨ竟鐣屽弽婊戝姩锛宼rue锛屽嚭鐜颁簡鍙嶆粦鍔紝false锛屾甯告粦鍔�
						var anti = ( that.is_last() && that.deltaX < 0 || that.is_first() && that.deltaX > 0 );

						if(!that.carousel && that.effect == 'h-slide' && anti){
							that.deltaX = that.deltaX / 2; //濡傛灉鏄竟鐣屽弽婊戝姩锛屽垯澧炲姞闃诲凹鏁堟灉
						}

						// 鍒ゆ柇鏄惁闇€瑕佷笂涓嬫粦鍔ㄩ〉闈�
						that.isScrolling = ( Math.abs(that.deltaX) < Math.abs(e._event.touches[0].pageY - that.startY) ) ? true: false;

						if(!that.isScrolling){
							// 闃绘榛樿涓婁笅婊戝姩浜嬩欢
							e.halt();

							that.stop();
							var width = Number(that.animcon.get('region').width);
							var dic = that.deltaX - that.current_tab * width;

							// 绔嬪嵆璺熼殢绉诲姩
							that.animwrap.setStyles({
								'-webkit-transition-duration': '0s',
								'-webkit-transform':'translate3d('+dic+'px,0,0)'
							});

						}
						
					},'.tab-content'); 
					//that.animwrap.on('webkitTransitionEnd',that.onTransitionEnd'); 
				}

			}

			return this;

		},
		//姝ｄ氦杩愬姩
		quadraturemotion:function(){


		},
		// 鏋勫缓鍙傛暟鍒楄〃
		buildParam:function(o){
			var that = this;
			//鍩烘湰鍙傛暟
			var o = (typeof o == 'undefined' || o == null)?{}:o;
			that.autoSlide = (typeof o.autoSlide == 'undefined' || o.autoSlide == null)?false:o.autoSlide;
			that.speed = (typeof o.speed == 'undefined' || o.speed == null)?0.5:o.speed;
			that.timeout = (typeof o.timeout == 'undefined' || o.timeout == null)?1000:o.timeout;
			that.effect = (typeof o.effect == 'undefined' || o.effect == null)?'none':o.effect;
			that.eventype = (typeof o.eventype == 'undefined' || o.eventype == null)?'click':o.eventype;
			that.easing = (typeof o.easing == 'undefined' || o.easing == null)?'easeBoth':o.easing;
			that.hoverStop = (typeof o.hoverStop== 'undefined' || o.hoverStop == null)?true:o.hoverStop;
			that.selectedClass = (typeof o.selectedClass == 'undefined' || o.selectedClass == null)?'selected':o.selectedClass;
			that.conClass = (typeof o.conClass == 'undefined' || o.conClass == null)?'t-slide':o.conClass;
			that.navClass = (typeof o.navClass == 'undefined' || o.navClass == null)?'tab-nav':o.navClass;
			that.contentClass = (typeof o.contentClass == 'undefined' || o.contentClass == null)?'tab-content':o.contentClass;
			that.pannelClass = (typeof o.pannelClass == 'undefined' || o.pannelClass == null)?'tab-pannel':o.pannelClass;
			that.before_switch = (typeof o.before_switch== 'undefined' || o.before_switch == null)?new Function:o.before_switch;
			that.ready = (typeof o.ready == 'undefined' || o.ready == null)?new Function:o.ready;
			that.carousel = (typeof o.carousel == 'undefined' || o.carousel == null)?false:o.carousel;
			that.reverse = (typeof o.reverse == 'undefined' || o.reverse == null)?false:o.reverse;
			that.touchmove = (typeof o.touchmove == 'undefined' || o.touchmove == null)?false:o.touchmove;
			that.adaptive_fixed_width = (typeof o.adaptive_fixed_width == 'undefined' || o.adaptive_fixed_width == null)?false:o.adaptive_fixed_width;
			that.adaptive_fixed_height = (typeof o.adaptive_fixed_height == 'undefined' || o.adaptive_fixed_height == null)?false:o.adaptive_fixed_height;
			that.adaptive_fixed_size = (typeof o.adaptive_fixed_size == 'undefined' || o.adaptive_fixed_size == null)?false:o.adaptive_fixed_size;
			that.adaptive_width = (typeof o.adaptive_width == 'undefined' || o.adaptive_width == null)?false:o.adaptive_width;
			that.id = that.id;
			//鏋勯€犲弬鏁�
			that.tabs = [];
			that.animcon = null;
			that.pannels = [];
			that.timer = null;
			that.touching = false;
			//榛樿閫変腑鐨則ab锛岄粯璁ゅ€间负0锛屾坊鍔犻粯璁ら€変腑鐨勫姛鑳�
			//modified by huya
            that.defaultTab = (typeof o.defaultTab == 'undefined' || o.defaultTab == null) ? 0 : Number(o.defaultTab) - 1;//闅愯棌鎵€鏈塸annel
			// 濡傛灉鏄窇椹伅锛屽垯涓嶈€冭檻榛樿閫変腑鐨勫姛鑳斤紝涓€寰嬪畾浣嶅湪绗竴椤�,涓斿彧鑳芥槸宸﹀彸鍒囨崲鐨勪笉鏀寔涓婁笅鍒囨崲
			if(that.carousel){
				that.defaultTab = 1;//璺戦┈鐏樉绀虹殑鏄湡瀹炵殑绗簩椤�
				that.effect = 'h-slide';
			}
			that.current_tab = that.defaultTab;//0,1,2,3...

			//鍒ゆ柇鏄惁寮€鍚簡鍐呯疆鍔ㄧ敾
			that.transitions = "webkitTransition" in document.body.style;

            return this;
			
		},
		//閽堝绉诲姩缁堢鐨勮窇椹伅鐨刪ack
		fix_for_transition_when_carousel: function(){
			var that = this;
			var con = that.con = Y.one('#' + that.id);
            that.animcon = that.con.one('.' + that.contentClass);
			that.animwrap = that.animcon.one('div');
			that.pannels = con.all('.' + that.contentClass + ' div.' + that.pannelClass);
			var width = Number(that.animcon.get('region').width);
			var height = Number(that.animcon.get('region').height);
			if(that.effect == 'h-slide'){
				that.animwrap.setStyle('width',that.pannels.size() * width + 2 * width);
				var first = that.pannels.item(0).cloneNode(true);
				var last = that.pannels.item(that.pannels.size()-1).cloneNode(true);
				that.animwrap.append(first);
				that.animwrap.prepend(last);
				if(that.transitions){
					//杩欐鎿嶄綔浼氭墜鎸佺粓绔腑閫犳垚涓€娆￠棯鐑�,寰呰В鍐�
					that.animwrap.setStyles({
						'-webkit-transition-duration': '0s',
						'-webkit-transform':'translate3d('+(-1 * width)+'px,0,0)',
						'left':'0'
					});
				}else {
					that.animwrap.setStyle('left',-1 * width);
				}
			}
			//閲嶆柊鑾峰彇閲嶇粍涔嬪悗鐨則abs
			that.pannels = con.all('.' + that.contentClass + ' div.' + that.pannelClass);
			that.length += 2;

		},

		//涓婁竴涓�
		previous:function(){
			var that = this;
			//闃叉鏃嬭浆鏈ㄩ┈鐘舵€佷笅鍒囨崲杩囧揩甯︽潵鐨勬檭鐪�
			try{
				if(that.anim.get('running') && that.carousel){
					return this;
				}
			}catch(e){}
			var _index = that.current_tab+that.length-1;
			if(_index >= that.length){
				_index = _index % that.length;
			}
			if(that.carousel){

				if(that.is_first()){
					that.fix_pre_carousel();
					arguments.callee.call(that);
					return this;

				}
			}
			that.goto(_index);
			return this;
		},
		//鍒ゆ柇褰撳墠tab鏄惁鏄渶鍚庝竴涓�
		is_last:function(){
			var that = this;
			if(that.current_tab == (that.length - 1)){
				return true;
			}else{
				return false;
			}
		},
		//鍒ゆ柇褰撳墠tab鏄惁鏄涓€涓�
		is_first:function(){
			var that = this;
			if(that.current_tab == 0){
				return true;
			}else{
				return false;
			}
		},
		//涓嬩竴涓�
		next:function(){
			var that = this;
			//闃叉鏃嬭浆鏈ㄩ┈鐘舵€佷笅鍒囨崲杩囧揩甯︽潵鐨勬檭鐪�
			try{
				if(that.anim.get('running') && that.carousel){
					return this;
				}
			}catch(e){}
			var _index = that.current_tab+1;
			if(_index >= that.length){
				_index = _index % that.length;
			}
			if(that.carousel){
				
				if(that.is_last()){
					that.fix_next_carousel();
					arguments.callee.call(that);
					return this;

				}

			}
			that.goto(_index);
			return this;
		},
		// 淇璺戦┈鐏粨灏剧殑婊氬姩浣嶇疆
		fix_next_carousel:function(){
			var that = this;

			that.current_tab = 1;
			var con = that.con = Y.one('#'+that.id);
			if(that.effect != 'none'){
				that.pannels = con.all('.'+that.contentClass+' div.'+that.pannelClass);
			}

			//鐩爣offset锛�'-234px'
			var dic = '-' + Number(that.animcon.get('region').width).toString()+'px';

			if(that.effect == 'h-slide'){

				if(that.transitions){
					that.animwrap.setStyles({
						'-webkit-transition-duration': '0s',
						'-webkit-transform':'translate3d('+dic+',0,0)'
					});

				}else{
					that.animwrap.setStyle('left',dic);
				}
			}else if (that.effect == 'v-slide'){
				// 鏆備笉鏀寔绾靛悜璺戦┈鐏殑婊氬姩

			}


			return;

		},

		// 淇璺戦┈鐏紑濮嬬殑婊氬姩浣嶇疆
		fix_pre_carousel:function(){
			var that = this;

			that.current_tab = that.length - 2;
			var con = that.con = Y.one('#'+that.id);
			if(that.effect != 'none'){
				that.pannels = con.all('.'+that.contentClass+' div.'+that.pannelClass);
			}
			// 鐩爣offset,鏄竴涓瓧绗︿覆 '-23px'
			var dic = '-' + (Number(that.animcon.get('region').width) * (that.length - 2)).toString() + 'px';

			if(that.effect == 'h-slide'){
				if(that.transitions){
					that.animwrap.setStyles({
						'-webkit-transition-duration': '0s',
						'-webkit-transform':'translate3d('+dic +',0,0)'
					});

				}else{
					that.animwrap.setStyle('left',dic);
				}
			}else if (that.effect == 'v-slide'){
				//绔栧悜婊氬姩鏆傛椂鏈疄鐜�

			}

			return;

		},
		//楂樹寒鏄剧ず绗琲ndex(0,1,2,3...)涓猲av
		hightlightNav:function(index){
			var that = this;
            that.tabs.removeClass(that.selectedClass);
            that.tabs.item(index).addClass(that.selectedClass);
			return this;
		},
		//鍒囨崲鑷砳ndex,杩欓噷鐨刬ndex涓虹湡瀹炵殑绱㈠紩
		switch_to:function(index){
			var that = this;
			//棣栧厛楂樹寒鏄剧ずtab
			that.hightlightNav(that.getWrappedIndex(index));
			that.fixSlideSize(index);
			if(that.autoSlide){
				that.stop().play();
			}
            if (index >= that.length) {
                index = index % that.length;
            }
            if (index == that.current_tab) {
                return this;
            }
            if (that.effect == 'none') {
                //that.pannels.addClass('hidden');
				that.pannels.setStyles({
					'display':'none'	
				});
                //that.pannels.item(index).removeClass('hidden');
                that.pannels.item(index).setStyles({
					'display':'block'	
				});
            }
            else if (that.effect == 'v-slide') {
                if (that.anim) {
                    try {
                        that.anim.stop();
                        //fix IE6涓嬪唴瀛樻硠闇茬殑闂锛屼粎鏀寔3.2.0鍙�3.3.0,3.1.0鍙�3.0.0闇€淇敼Y.Anim鐨勪唬鐮�
						//modified by huya
                        that.anim.destroy();
                        that.anim = null;
                    } catch (e) {}
                }

				if(that.transitions){
					that.animwrap.setStyles({
						'-webkit-transition-duration': that.speed + 's',
						'-webkit-transform':'translate3d(0,'+(-1 * index * that.animcon.get('region').height)+'px,0)'
					});
				}else {
					that.anim = new Y.Anim({
						node: that.animwrap,
						to: {
							top: -1 * index * that.animcon.get('region').height
						},
						easing: that.easing,
						duration: that.speed
					});
					that.anim.run();
				}
            } else if (that.effect == 'h-slide') {
                if (that.anim) {
                    try {
                        that.anim.stop();
                        that.anim.destroy();
                        that.anim = null;
                    } catch (e) {}
                }
				

				if(that.transitions){
					that.animwrap.setStyles({
						'-webkit-transition-duration': that.speed + 's',
						'-webkit-transform':'translate3d('+(-1 * index * that.animcon.get('region').width)+'px,0,0)'
					});
				}else{

					that.anim = new Y.Anim({
						node: that.animwrap,
						to: {
							left: -1 * index * that.animcon.get('region').width
						},
						easing: that.easing,
						duration: that.speed
					});
					that.anim.run();

				}
            } else if (that.effect == 'fade') {
				//閲嶅啓fade鏁堟灉閫昏緫
				//modified by huya
                var _curr = that.current_tab;
                if (that.anim) {
                    try {
                        that.anim.stop();
                        that.anim.destroy();
                        that.anim = null;
                    } catch (e) {}
                }
                that.anim = new Y.Anim({
                    node: that.pannels.item(index),
                    to: {
                        opacity: 1
                    },
                    easing: that.easing,
                    duration: that.speed
                });
                that.anim.on('start', function(){
                    //that.pannels.item(index).removeClass('hidden');
                    that.pannels.item(index).setStyles({
						'display':'block'	
					});
                    that.pannels.item(index).setStyle('opacity', 0);
                    that.pannels.item(_curr).setStyle('zIndex', 1);
                    that.pannels.item(index).setStyle('zIndex', 2);
                });
                that.anim.on('end', function(){
                    that.pannels.item(_curr).setStyle('zIndex', 0);
                    that.pannels.item(index).setStyle('zIndex', 1);
                    that.pannels.item(_curr).setStyle('opacity', 0);
                    //that.pannels.item(_curr).addClass('hidden');
                    that.pannels.item(_curr).setStyles({
						'display':'none'	
					});
                });
                that.anim.run();
            }
            that.current_tab = index;
            that.EventCenter.fire('switch', {
                index: index,
                navnode: that.tabs.item(that.getWrappedIndex(index)),
                pannelnode: that.pannels.item(index)
            });
			//寤惰繜鎵ц鐨勮剼鏈�
			var scriptsArea = that.pannels.item(index).all('.lazyload');
			if(scriptsArea){
				scriptsArea.each(function(node,i){
					that.renderLazyData(node);
					//that.pannels.item(index).append(node.get('value'));
				});
				//scriptsArea.remove();
			}
		},
		//鍘诲線浠绘剰涓€涓�,0,1,2,3...
		"goto":function(index){
			var that = this;
			if(that.before_switch({
				index:index,
				navnode:that.tabs.item(index),
				pannelnode:that.pannels.item(index)
			}) == false){
				return;
			}
			//鍙戠敓goto鐨勬椂鍊欓鍏堝垽鏂槸鍚﹂渶瑕佹暣鐞嗙┖闂寸殑闀垮灏哄
			//that.renderSize(index);
			that.switch_to(index);
		},
		//鑷姩鎾斁
		play:function(){
			var that = this;
			if(that.timer != null)clearTimeout(that.timer);
			that.timer = setTimeout(function(){
				that.next().play();
			},Number(that.timeout));
			return this;
		},
		//鍋滄鑷姩鎾斁
		stop:function(){
			var that = this;
			clearTimeout(that.timer);
			that.timer = null;
			return this;
		}

	},0,null,4);

	Y.Slide = Slide;
	
},'',{requires:['node','anim']});

/*
 * TODO
 * 	1锛屾祴璇曞悇涓儏鍐电殑宸ヨ鐘跺喌
 *
 * */