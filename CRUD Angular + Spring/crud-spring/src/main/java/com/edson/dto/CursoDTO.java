package com.edson.dto;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.edson.model.Aula;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record CursoDTO(Long id,
        @NotBlank @NotNull @Length(min = 5, max = 100) String nome,
        @NotNull @Length(max = 10) @Pattern(regexp = "Back-End|Front-End") String categoria,
        List<Aula> aulas) {
}
