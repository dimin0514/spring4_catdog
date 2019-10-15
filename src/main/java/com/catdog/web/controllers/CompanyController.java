package com.catdog.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.catdog.web.serviceimpls.CustomerServiceImpl;


@Controller          				//mvc 객체에게 controller 만들어 이야기 하는거 
@RequestMapping("/customer/*") 		//url 에서 customer 글자 나오면 이거 타라??
public class CompanyController {
	public static Logger logger = LoggerFactory.getLogger(CompanyController.class);
	@Autowired CompanyController companyController;
	@Autowired CustomerServiceImpl customerService;  //싱글톤,인스턴스가 스프링 컨테이너에서 싱글톤 객체 하나를 주입해라. 컨테스트가 스캔하면서 주입
	
	@GetMapping("/count")          //매핑에는 4가지 매핑 post get, put, delete  읽어오는거고 (파라미터 안은 url)
	public String count(Model model) {						
		int count = customerService.countEmplyoee();
		model.addAttribute("count", count);				
		return "index";		
	}
	
	@GetMapping("/info")
	public String findByCustomerCID(@RequestParam("cid") String cid,
			@RequestParam("pwd") String pwd) {
		
		return "index";
	}

}
