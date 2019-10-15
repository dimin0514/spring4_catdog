package com.catdog.web.services;

import org.springframework.stereotype.Component;

import com.catdog.web.domains.CustomerDTO;
@Component
public interface CustomerService {
	public int countEmplyoee();
	public boolean join (CustomerDTO param);
	public CustomerDTO login(CustomerDTO param);
}
