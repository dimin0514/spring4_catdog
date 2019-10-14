package com.catdog.web.serviceimpls;

import com.catdog.web.domains.EmployeeDTO;
import com.catdog.web.mappers.CompanyMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.catdog.web.services.CompanyService;
@Service
public class CompanyServiceImpl implements CompanyService{
	@Autowired CompanyMapper mapper; //싱글톤 대신 이걸로 대체?? 바로 다오? mapper 로 ...

	@Override
	public boolean join(EmployeeDTO param) {
		
		System.out.println(6);
		return false;
	}

	@Override
	public EmployeeDTO login(EmployeeDTO param) {
		return null;
	}

}
