package com.edson.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edson.model.Curso;
import com.edson.repository.CursoRepository;

@RestController
@RequestMapping("/api/cursos")
// @AllArgsConstructor
public class CursoController {

    private final CursoRepository cursoRepository;

    public CursoController(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Curso> listar() {
        return cursoRepository.findAll();
    }
}
