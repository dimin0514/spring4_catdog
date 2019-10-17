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
			$('#form_join')
			.html('<head>'+
					'    <meta charset="utf-8">'+
					'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
					'    <meta name="description" content="">'+
					'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
					'    <meta name="generator" content="Jekyll v3.8.5">'+
					'    <title>Checkout example · Bootstrap</title>'+
					'   <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/checkout/">'+			
					'   <!-- Bootstrap core CSS -->'+
					'<link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
					'   <style>'+
					'      .bd-placeholder-img {'+
					'        font-size: 1.125rem;'+
					'        text-anchor: middle;'+
					'        -webkit-user-select: none;'+
					'        -moz-user-select: none;'+
					'        -ms-user-select: none;'+
					'        user-select: none;'+
					'      }'+
					'     @media (min-width: 768px) {'+
					'        .bd-placeholder-img-lg {'+
					'          font-size: 3.5rem;'+
					'        }'+
					'      }'+
					'    </style>'+
					'    <!-- Custom styles for this template -->'+
					'    <link href="form-validation.css" rel="stylesheet">'+
					'  </head>'+
					'<div class="container" style="width:1000px;margin-left:-350px">'+
					'  <div class="py-5 text-center">'+
					'    <img class="d-block mx-auto mb-4" src="/web/resources/img/bootstrap-solid.svg" alt="" width="72" height="72">'+
					'    <h2>Checkout form</h2>'+
					'    <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>'+
					'  </div>'+
					' <div class="row">'+
					'    <div class="col-md-4 order-md-2 mb-4">'+
					'      <h4 class="d-flex justify-content-between align-items-center mb-3">'+
					'        <span class="text-muted">Your cart</span>'+
					'        <span class="badge badge-secondary badge-pill">3</span>'+
					'      </h4>'+
					'      <ul class="list-group mb-3">'+
					'        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
					'          <div>'+
					'            <h6 class="my-0">Product name</h6>'+
					'            <small class="text-muted">Brief description</small>'+
					'          </div>'+
					'          <span class="text-muted">$12</span>'+
					'        </li>'+
					'        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
					'          <div>'+
					'            <h6 class="my-0">Second product</h6>'+
					'            <small class="text-muted">Brief description</small>'+
					'          </div>'+
					'          <span class="text-muted">$8</span>'+
					'        </li>'+
					'        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
					'          <div>'+
					'            <h6 class="my-0">Third item</h6>'+
					'            <small class="text-muted">Brief description</small>'+
					'          </div>'+
					'          <span class="text-muted">$5</span>'+
					'        </li>'+
					'        <li class="list-group-item d-flex justify-content-between bg-light">'+
					'          <div class="text-success">'+
					'            <h6 class="my-0">Promo code</h6>'+
					'            <small>EXAMPLECODE</small>'+
					'          </div>'+
					'          <span class="text-success">-$5</span>'+
					'        </li>'+
					'        <li class="list-group-item d-flex justify-content-between">'+
					'          <span>Total (USD)</span>'+
					'          <strong>$20</strong>'+
					'        </li>'+
					'      </ul>'+
					'     <form class="card p-2">'+
					'        <div class="input-group">'+
					'          <input type="text" class="form-control" placeholder="Promo code">'+
					'          <div class="input-group-append">'+
					'            <button type="submit" class="btn btn-secondary">Redeem</button>'+
					'          </div>'+
					'        </div>'+
					'      </form>'+
					'    </div>'+
					'    <div class="col-md-8 order-md-1">'+
					'      <h4 class="mb-3">Billing address</h4>'+
					'      <form class="needs-validation" novalidate="">'+
					'        <div class="row">'+
					'          <div class="col-md-6 mb-3">'+
					'            <label for="userid">UserID</label>'+
					'            <input type="text" class="form-control" id="userid" placeholder="" value="" required="">'+
					'            <div class="invalid-feedback">'+
					'              Valid first name is required.'+
					'            </div>'+
					'          </div>'+
					'          <div class="col-md-6 mb-3">'+
					'            <label for="password">PassWord</label>'+
					'            <input type="text" class="form-control" id="password" placeholder="" value="" required="">'+
					'            <div class="invalid-feedback">'+
					'              Valid last name is required.'+
					'            </div>'+
					'          </div>'+
					'        </div>'+
					'       <div class="mb-3">'+
					'          <label for="username">Username</label>'+
					'          <div class="input-group">'+
					'            <div class="input-group-prepend">'+
					'              <span class="input-group-text">@</span>'+
					'            </div>'+
					'            <input type="text" class="form-control" id="username" placeholder="Username" required="">'+
					'            <div class="invalid-feedback" style="width: 100%;">'+
					'              Your username is required.'+
					'            </div>'+
					'          </div>'+
					'        </div>'+
					'       <div class="mb-3">'+
					'          <label for="email">Email <span class="text-muted">(Optional)</span></label>'+
					'          <input type="email" class="form-control" id="email" placeholder="you@example.com">'+
					'          <div class="invalid-feedback">'+
					'            Please enter a valid email address for shipping updates.'+
					'          </div>'+
					'        </div>'+
					'       <div class="mb-3">'+
					'          <label for="address">Address</label>'+
					'          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">'+
					'          <div class="invalid-feedback">'+
					'            Please enter your shipping address.'+
					'          </div>'+
					'        </div>'+
					'       <div class="mb-3">'+
					'          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>'+
					'          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">'+
					'        </div>'+
					'       <div class="row">'+
					'          <div class="col-md-5 mb-3">'+
					'            <label for="country">Country</label>'+
					'            <select class="custom-select d-block w-100" id="country" required="">'+
					'              <option value="">Choose...</option>'+
					'              <option>United States</option>'+
					'            </select>'+
					'            <div class="invalid-feedback">'+
					'              Please select a valid country.'+
					'            </div>'+
					'          </div>'+
					'          <div class="col-md-4 mb-3">'+
					'            <label for="state">State</label>'+
					'            <select class="custom-select d-block w-100" id="state" required="">'+
					'              <option value="">Choose...</option>'+
					'              <option>California</option>'+
					'            </select>'+
					'            <div class="invalid-feedback">'+
					'              Please provide a valid state.'+
					'            </div>'+
					'          </div>'+
					'          <div class="col-md-3 mb-3">'+
					'            <label for="zip">Zip</label>'+
					'            <input type="text" class="form-control" id="zip" placeholder="" required="">'+
					'            <div class="invalid-feedback">'+
					'              Zip code required.'+
					'            </div>'+
					'          </div>'+
					'        </div>'+
					'        <hr class="mb-4">'+
					'        <div class="custom-control custom-checkbox">'+
					'          <input type="checkbox" class="custom-control-input" id="same-address">'+
					'          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'+
					'        </div>'+
					'        <div class="custom-control custom-checkbox">'+
					'          <input type="checkbox" class="custom-control-input" id="save-info">'+
					'          <label class="custom-control-label" for="save-info">Save this information for next time</label>'+
					'        </div>'+
					'        <hr class="mb-4">'+
					'       <h4 class="mb-3">Payment</h4>'+
					'       <div class="d-block my-3">'+
					'          <div class="custom-control custom-radio">'+
					'            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'+
					'            <label class="custom-control-label" for="credit">Credit card</label>'+
					'          </div>'+
					'          <div class="custom-control custom-radio">'+
					'            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
					'            <label class="custom-control-label" for="debit">Debit card</label>'+
					'          </div>'+
					'          <div class="custom-control custom-radio">'+
					'            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
					'            <label class="custom-control-label" for="paypal">PayPal</label>'+
					'          </div>'+
					'        </div>'+
					'        <div class="row">'+
					'          <div class="col-md-6 mb-3">'+
					'            <label for="cc-name">Name on card</label>'+
					'            <input type="text" class="form-control" id="cc-name" placeholder="" required="">'+
					'            <small class="text-muted">Full name as displayed on card</small>'+
					'            <div class="invalid-feedback">'+
					'              Name on card is required'+
					'            </div>'+
					'          </div>'+
					'          <div class="col-md-6 mb-3">'+
					'            <label for="cc-number">Credit card number</label>'+
					'            <input type="text" class="form-control" id="cc-number" placeholder="" required="">'+
					'            <div class="invalid-feedback">'+
					'              Credit card number is required'+
					'            </div>'+
					'          </div>'+
					'        </div>'+
					'        <div class="row">'+
					'          <div class="col-md-3 mb-3">'+
					'            <label for="cc-expiration">Expiration</label>'+
					'            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'+
					'            <div class="invalid-feedback">'+
					'              Expiration date required'+
					'            </div>'+
					'          </div>'+
					'          <div class="col-md-3 mb-3">'+
					'            <label for="cc-cvv">CVV</label>'+
					'            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'+
					'            <div class="invalid-feedback">'+
					'              Security code required'+
					'            </div>'+
					'          </div>'+
					'        </div>'+
					'        <hr class="mb-4">'+
					'        <div id="btn_join"></div>'+
					'      </form>'+
					'    </div>'+
					'  </div>'+
					' <footer class="my-5 pt-5 text-muted text-center text-small">'+
					'    <p class="mb-1">© 2017-2019 Company Name</p>'+
					'    <ul class="list-inline">'+
					'      <li class="list-inline-item"><a href="#">Privacy</a></li>'+
					'      <li class="list-inline-item"><a href="#">Terms</a></li>'+
					'      <li class="list-inline-item"><a href="#">Support</a></li>'+
					'    </ul>'+
					'  </footer>'+
					'</div>')
			$('<button>',{
				text : 'Continue to checkout', //text에 값이 있으면 set 방식 , 빈칸으로 하면 get방식
				href : '#',
				
				click: e=>{
					e.preventDefault(); //이게 form 태그를 막는거? form 태그 방식으로 하려면 홈컨트롤러에서 soap 방식으로 해야함. ajax 는 soap 방식 안됨!! herf 도 삭제..
					let data = {cid:$('#userid').val(), pwd:$('#password').val()} //제이슨 타입으로 보내야 하니깐.. 제이슨이 들어가야함 !! 중요한건 자바 받는녀석과 맞춰야함!
					$.ajax({
						url : _+'/customer/join',
						type : 'POST',       //일단은 그냥 빠르게 보이게... 원래는 숨겨야 해서 POST 방식이어야함! 타입은 4개 crud, put get delete 
						dataType : 'json',  //자바스크립트의 객체를 던진다?
						data : JSON.stringify(data), //ify ~화 하다. 제이슨 던지는데 스트링화 해라! 받는입장(컨트롤러)와 맞춘다! 컨트롤러에서 스트링으로 받는다고 해놔서 스트링화.
						contentType : 'application/json',
						success : d => {
							alert('AJAX 성공아이디:'+d.cid+',성공비번'+d.pwd);
						}, //send , d는 자바에서의 map
						error : e => {
							alert('AJAX 실패')
						} //receive 
						//ajax 는 제이쿼리와 다르게 스트링은 안줌 $.({}) cf)제이쿼리는 $.( ,{})
					})
				}
			})
			.addClass("btn btn-primary btn-lg btn-block")
			.appendTo('#btn_join')
			$('<a>',{
				text:'추가된 a 태그2',
				href: '#',
				click: ()=>{
					alert('고스트가 클릭!!')
				}
			})
			.appendTo('#test')
			$('#join_btn').click(()=>{
				alert('회원가입')
			})
			
		});		
	}
	return{onCreate : onCreate}
})();