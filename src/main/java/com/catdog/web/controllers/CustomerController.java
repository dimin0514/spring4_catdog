package com.catdog.web.controllers;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.catdog.web.domains.CustomerDTO;
import com.catdog.web.serviceimpls.CustomerServiceImpl;
import com.catdog.web.services.CustomerService;

@Controller   
@RequestMapping("/customer/*") 		//url 에서 customer 글자 나오면 이거 타라??
public class CustomerController {
	public static Logger logger = LoggerFactory.getLogger(CustomerController.class);
//	@Autowired Map<String,Object> map;
	@Autowired CustomerServiceImpl customerService;
	@Autowired CustomerDTO customer;

	@PostMapping("/join")
	public @ResponseBody CustomerDTO join(@RequestBody CustomerDTO param) {  //리쿼스트 바디 리스판스 바디!!!
		logger.info("AJAX가 보낸 아이디 와 비번 pname{}",param.getCid()+","+param.getPwd()+","+param.getPname());
		customer.setCid(param.getCid());
		customer.setPwd(param.getPwd());
		customer.setPname(param.getPname());
		customerService.join(param);
		logger.info("조인에서 에 담긴 사용자정보",customer.getCid()+","+customer.getPwd()+","+customer.getPname());
		return customer;
	}
	@PostMapping("/login")
	public @ResponseBody CustomerDTO login(@RequestBody CustomerDTO param){
		logger.info("AJAX가 보낸 아이디 와 비번{}",param.getCid()+","+param.getPwd());
		customer.setCid(param.getCid());
		customer.setPwd(param.getPwd());
		customer.setPname(param.getPname());
		customer = customerService.login(param);
		logger.info("customer 에 담긴 사용자정보{}",customer.toString());
		return customer;
	}

}
