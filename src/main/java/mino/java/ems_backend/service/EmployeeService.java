package mino.java.ems_backend.service;

import mino.java.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getElementById(Long employeeId);

    List<EmployeeDto> getAllEmployees();
}
