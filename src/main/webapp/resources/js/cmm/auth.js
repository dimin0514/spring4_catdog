"use strict";
var auth = auth || {};  //있으면 가져오고 없으면 새로 널(빈땅)객체로 새로 만들어라.
auth = (()=>{
	let _,js;
	let init =()=>{
		_ = $.ctx();
		js = $.js();
	}
	let onCreate =()=>{
		init();
		$('#a_go_join').on('click',()=>{
			alert('회원가입 클릭');
		});		
	}
	return{onCreate : onCreate}
})();