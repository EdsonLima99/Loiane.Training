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

import com.edson.dto.CursoDTO;
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
    public @ResponseBody List<CursoDTO> listar() {
        return cursoService.listar();
    }

    @GetMapping("/{id}")
    public CursoDTO buscarPorId(@PathVariable @NotNull @Positive Long id) {
        return cursoService.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public CursoDTO criar(@RequestBody @Valid @NotNull CursoDTO cursodDTO) {
        return cursoService.criar(cursodDTO);
    }

    @PutMapping("/{id}")
    public CursoDTO atualizar(@PathVariable @NotNull @Positive Long id,
            @RequestBody @Valid @NotNull CursoDTO cursodDTO) {
        return cursoService.atualizar(id, cursodDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable @NotNull @Positive Long id) {
        cursoService.excluir(id);
    }
}
