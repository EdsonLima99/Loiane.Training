package com.edson.dto.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.edson.dto.AulaDTO;
import com.edson.dto.CursoDTO;
import com.edson.enums.Categoria;
import com.edson.model.Curso;

@Component
public class CursoMapper {

    public CursoDTO paraDTO(Curso curso) {
        if (curso == null) {
            return null;
        }

        List<AulaDTO> aulas = curso.getAulas().stream()
                .map(aula -> new AulaDTO(aula.getId(), aula.getNome(), aula.getYoutubeURL()))
                .collect(Collectors.toList());

        return new CursoDTO(curso.getId(), curso.getNome(), curso.getCategoria().getValor(),
                aulas);
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
