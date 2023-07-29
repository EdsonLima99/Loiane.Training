package com.edson.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import com.edson.dto.CursoDTO;
import com.edson.dto.mapper.CursoMapper;
import com.edson.exception.RegistroNotFoundException;
import com.edson.repository.CursoRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class CursoService {

    private final CursoRepository cursoRepository;
    private final CursoMapper cursoMapper;

    public CursoService(CursoRepository cursoRepository, CursoMapper cursoMapper) {
        this.cursoRepository = cursoRepository;
        this.cursoMapper = cursoMapper;
    }

    public List<CursoDTO> listar() {
        return cursoRepository.findAll()
                .stream()
                .map(cursoMapper::paraDTO)
                .collect(Collectors.toList());
    }

    public CursoDTO buscarPorId(@PathVariable @NotNull @Positive Long id) {
        return cursoRepository.findById(id).map(cursoMapper::paraDTO)
                .orElseThrow(() -> new RegistroNotFoundException(id));
    }

    public CursoDTO criar(@Valid @NotNull CursoDTO cursoDTO) {
        return cursoMapper.paraDTO(cursoRepository.save(cursoMapper.paraEntidade(cursoDTO)));
    }

    public CursoDTO atualizar(@NotNull @Positive Long id, @Valid @NotNull CursoDTO cursoDTO) {
        return cursoRepository.findById(id)
                .map(registro -> {
                    registro.setNome(cursoDTO.nome());
                    registro.setCategoria(cursoDTO.categoria());
                    return cursoMapper.paraDTO(cursoRepository.save(registro));
                }).orElseThrow(() -> new RegistroNotFoundException(id));
    }

    public void excluir(@PathVariable @NotNull @Positive Long id) {
        cursoRepository.delete(cursoRepository.findById(id)
                .orElseThrow(() -> new RegistroNotFoundException(id)));
    }
}
