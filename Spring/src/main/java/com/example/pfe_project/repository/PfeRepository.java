package com.example.pfe_project.repository;

import com.example.pfe_project.model.Pfe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PfeRepository extends JpaRepository<Pfe, Integer> {


   // Object findByType(String type);

    Object findByTitle(String title);
}
