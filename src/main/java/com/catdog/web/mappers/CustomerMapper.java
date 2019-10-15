package com.catdog.web.mappers;
import com.catdog.web.domains.CustomerDTO;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	public int countEmployees();
	public boolean insertEmployee(CustomerDTO param);
	public CustomerDTO selectByEmpnoEname(CustomerDTO param);
}
