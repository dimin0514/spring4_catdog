package com.catdog.web.mappers;
import com.catdog.web.domains.CustomerDTO;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	public int countEmployees();
	public CustomerDTO selectByCid(CustomerDTO param);
	public void insertCustomer(CustomerDTO param);
	//<insert id= parametertype="com.catdog.web.domain.CustomerDTO>"
	public CustomerDTO selectCustomerId(CustomerDTO param);
}
