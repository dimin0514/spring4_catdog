package com.catdog.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.catdog.web.services.CompanyService;

@Controller
public class CompanyController {
	public static Logger logger = LoggerFactory.getLogger(CompanyController.class);
	@Autowired CompanyService companyService;

}
