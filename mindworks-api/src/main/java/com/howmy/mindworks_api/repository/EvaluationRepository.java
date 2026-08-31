package com.howmy.mindworks_api.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.howmy.mindworks_api.model.Evaluation;

public interface EvaluationRepository extends JpaRepository<Evaluation, UUID>{
    
}
