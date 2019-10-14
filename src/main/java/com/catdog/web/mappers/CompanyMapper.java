package com.catdog.web.mappers;
import com.catdog.web.domains.EmployeeDTO;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyMapper {
	public boolean insertEmployee(EmployeeDTO param);
	public EmployeeDTO selectByEmpnoEname(EmployeeDTO param);
}
