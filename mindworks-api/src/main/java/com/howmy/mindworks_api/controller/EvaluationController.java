package com.howmy.mindworks_api.controller;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.howmy.mindworks_api.dto.StartEvaluationResponse;
import com.howmy.mindworks_api.dto.SubmitAnswerRequest;
import com.howmy.mindworks_api.service.EvaluationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/evaluations")
public class EvaluationController {
    
    private final EvaluationService evaluationService;

    public EvaluationController(
        EvaluationService evaluationService
    ) {
        this.evaluationService = evaluationService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StartEvaluationResponse startEvaluation() {
        return evaluationService.startEvaluation();
    }

    @PostMapping("/{evaluationId}/answers")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void submitAnswer(
            @PathVariable UUID evaluationId,
            @Valid @RequestBody SubmitAnswerRequest request
    ) {

        evaluationService.submitAnswer(evaluationId, request);
    }
}
