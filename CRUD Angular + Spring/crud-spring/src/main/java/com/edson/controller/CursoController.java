package com.edson.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.edson.model.Curso;
import com.edson.service.CursoService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    private final CursoService cursoService;

    public CursoController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    @GetMapping
    public @ResponseBody List<Curso> listar() {
        return cursoService.listar();
    }

    @GetMapping("/{id}")
    public Curso buscarPorId(@PathVariable @NotNull @Positive Long id) {
        return cursoService.buscarPorId(id);
    }

    // @RequestMapping(method = RequestMethod.POST)
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Curso criar(@RequestBody @Valid Curso curso) {
        return cursoService.criar(curso);
    }

    @PutMapping("/{id}")
    public Curso atualizar(@PathVariable @NotNull @Positive Long id, @RequestBody @Valid Curso curso) {
        return cursoService.atualizar(id, curso);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable @NotNull @Positive Long id) {
        cursoService.excluir(id);
    }
}
