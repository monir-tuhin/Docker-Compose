package com.example.springbootdocker.controller;


import com.example.springbootdocker.student.entity.Student;
import com.example.springbootdocker.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/student")
@RequiredArgsConstructor
@Slf4j
public class StudentController {
    private final StudentService studentService;

    @GetMapping("/test")
    public String apiTesting() {
        log.info("Hello World");
        return "Hello spring boot !!!";
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Student student) {
        try {
            studentService.saveStudent(student);
            log.info("Student saved successfully");
        } catch (RuntimeException e) {
            e.printStackTrace();
        }
    }

    @GetMapping
    public ResponseEntity<List<Student>> findAllStudents() {
        try {
            return ResponseEntity.ok(studentService.findAllStudents());
        } catch (RuntimeException e) {
            e.printStackTrace();
            return null;
        }
    }
}
