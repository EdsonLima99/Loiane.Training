package com.edson;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.edson.enums.Categoria;
import com.edson.model.Aula;
import com.edson.model.Curso;
import com.edson.repository.CursoRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CursoRepository cursoRepository) {
		return args -> {
			cursoRepository.deleteAll();

			Curso curso = new Curso();
			curso.setNome("Angular com Spring");
			curso.setCategoria(Categoria.FRONTEND);
			
			Aula a = new Aula();
			a.setNome("Introdução");
			a.setYoutubeURL("Nb4uxLxdvxo");
			a.setCurso(curso);
			curso.getAulas().add(a);

			Aula a1 = new Aula();
			a1.setNome("Angular");
			a1.setYoutubeURL("Nb4uxLxdvxp");
			a1.setCurso(curso);
			curso.getAulas().add(a1);

			cursoRepository.save(curso);
		};
	}

}
