package com.edson.enums;

public enum Categoria {
    BACKEND("Back-End"), FRONTEND("Front-End");

    private String valor;

    private Categoria(String valor) {
        this.valor = valor;
    }

    public String getValor() {
        return valor;
    }

    @Override
    public String toString() {
        return valor;
    }
}
