package com.howmy.mindworks_api.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.howmy.mindworks_api.model.EvaluationAnswer;

public interface EvaluationAnswerRepository extends JpaRepository<EvaluationAnswer, Long> {

    boolean existsByEvaluationIdAndQuestion(
        UUID evaluationId, 
        Long questionId
    );
}