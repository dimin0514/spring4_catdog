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

@Controller   
@RequestMapping("/customer/*") 		//url 에서 customer 글자 나오면 이거 타라??
public class CustomerController {
	public static Logger logger = LoggerFactory.getLogger(CustomerController.class);
//	@Autowired Map<String,String> map;

	@PostMapping("/join")
	public @ResponseBody Map<?,?> join(@RequestBody CustomerDTO customer) {  //리쿼스트 바디 리스판스 바디!!!
		Map<String,String> map = new HashMap<>(); //컨트롤러에서 new가 안먹힐 수도 있어서 오토와이어드?
		logger.info("AJAX가 보낸 아이디 와 비번{}",customer.getCid()+","+customer.getPwd());
		map.put("cid", customer.getCid());
		map.put("pwd", customer.getPwd());
		logger.info("map에 담긴 아이디 와 비번{}",map.get("cid")+","+map.get("pwd"));
		return map;
	}

}
