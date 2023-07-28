package com.edson.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.edson.exception.RegistroNotFoundException;
import com.edson.model.Curso;
import com.edson.repository.CursoRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class CursoService {

    private final CursoRepository cursoRepository;

    public CursoService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    public @ResponseBody List<Curso> listar() {
        return cursoRepository.findAll();
    }

    public Curso buscarPorId(@PathVariable @NotNull @Positive Long id) {
        return cursoRepository.findById(id).orElseThrow(() -> new RegistroNotFoundException(id));
    }

    public Curso criar(@Valid Curso curso) {
        return cursoRepository.save(curso);
    }

    public Curso atualizar(@NotNull @Positive Long id, @Valid Curso curso) {
        return cursoRepository.findById(id)
                .map(registro -> {
                    registro.setNome(curso.getNome());
                    registro.setCategoria(curso.getCategoria());
                    return cursoRepository.save(registro);
                }).orElseThrow(() -> new RegistroNotFoundException(id));
    }

    public void excluir(@PathVariable @NotNull @Positive Long id) {
        cursoRepository.delete(cursoRepository.findById(id)
                .orElseThrow(() -> new RegistroNotFoundException(id)));
    }
}
