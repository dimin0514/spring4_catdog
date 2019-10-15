package com.catdog.web.controllers;

import java.util.Locale;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.catdog.web.serviceimpls.CustomerServiceImpl;

//

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired CustomerServiceImpl customerService;
	
	@GetMapping("/")   //스프링 버전 4.0 이상에서는 이 방식으로 사용가능 get방식은 보안이 필요없어 가장 빠름. p.128
	public String home(Locale locale, Model model) {
		logger.info("Welcome {}.", "HomeController");
			
		int count = customerService.countEmplyoee();
		model.addAttribute("count",count);
		return "index";
	}
	
}
