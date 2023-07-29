package com.edson.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

import com.edson.enums.Categoria;
import com.edson.enums.converters.CategoriaConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

// @Getter
// @Setter
@Data
@Entity
@Table(name = "curso")
@SQLDelete(sql = "UPDATE curso SET status = 'Inativo' WHERE id = ?")
@Where(clause = "status = 'Ativo'")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    // @JsonProperty("id")
    private Long id;

    @NotBlank
    @NotNull
    @Length(min = 5, max = 100)
    @Column(name = "nome", length = 100, nullable = false)
    private String nome;

    @NotNull
    @Column(name = "categoria", length = 10, nullable = false)
    @Convert(converter = CategoriaConverter.class)
    private Categoria categoria;

    @NotNull
    @Length(max = 10)
    @Pattern(regexp = "Ativo|Inativo")
    @Column(name = "status", length = 10, nullable = false)
    private String status = "Ativo";
}
