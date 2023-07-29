package com.edson.enums.converters;

import java.util.stream.Stream;

import com.edson.enums.Categoria;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class CategoriaConverter implements AttributeConverter<Categoria, String> {

    @Override
    public String convertToDatabaseColumn(Categoria categoria) {
        if (categoria == null) {
            return null;
        }
        return categoria.getValor();
    }

    @Override
    public Categoria convertToEntityAttribute(String valor) {
        if (valor == null) {
            return null;
        }
        return Stream.of(Categoria.values())
                .filter(c -> c.getValor().equals(valor))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }

}
