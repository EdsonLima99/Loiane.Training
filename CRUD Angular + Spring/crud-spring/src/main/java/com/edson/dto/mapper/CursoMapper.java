package com.edson.dto.mapper;

import org.springframework.stereotype.Component;

import com.edson.dto.CursoDTO;
import com.edson.enums.Categoria;
import com.edson.model.Curso;

@Component
public class CursoMapper {

    public CursoDTO paraDTO(Curso curso) {
        if (curso == null) {
            return null;
        }
        return new CursoDTO(curso.getId(), curso.getNome(), "Front-End");
    }

    public Curso paraEntidade(CursoDTO cursoDTO) {
        if (cursoDTO == null) {
            return null;
        }

        Curso curso = new Curso();
        if (cursoDTO.id() != null) {
            curso.setId(cursoDTO.id());
        }
        curso.setNome(cursoDTO.nome());
        curso.setCategoria(Categoria.FRONTEND);
        curso.setStatus("Ativo");
        return curso;
    }
}
