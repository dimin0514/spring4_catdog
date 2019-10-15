package com.catdog.web.serviceimpls;

import com.catdog.web.domains.CustomerDTO;
import com.catdog.web.mappers.CustomerMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.catdog.web.services.CustomerService;
@Service
public class CustomerServiceImpl implements CustomerService{
	@Autowired CustomerMapper customerMapper; //싱글톤 대신 이걸로 대체?? 바로 다오? mapper 로 ...

	@Override
	public int countEmplyoee() {
		return customerMapper.countEmployees();
	}
	
	@Override
	public boolean join(CustomerDTO param) {
		
		System.out.println(6);
		return false;
	}

	@Override
	public CustomerDTO login(CustomerDTO param) {
		return null;
	}

	

}
