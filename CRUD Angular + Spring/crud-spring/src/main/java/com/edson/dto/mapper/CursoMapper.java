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
        return new CursoDTO(curso.getId(), curso.getNome(), curso.getCategoria().getValor(),
                curso.getAulas());
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
        curso.setCategoria(converterValorCategoria(cursoDTO.categoria()));
        return curso;
    }

    public Categoria converterValorCategoria(String valor) {
        if (valor == null) {
            return null;
        }

        return switch (valor) {
            case "Front-End" -> Categoria.FRONTEND;
            case "Back-End" -> Categoria.BACKEND;
            default -> throw new IllegalArgumentException("Categoria Inválida: " + valor);
        };
    }
}
