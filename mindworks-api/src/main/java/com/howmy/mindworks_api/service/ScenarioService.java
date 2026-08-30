package com.howmy.mindworks_api.service;

import com.howmy.mindworks_api.dto.*;
import com.howmy.mindworks_api.model.Answer;
import com.howmy.mindworks_api.model.Question;
import com.howmy.mindworks_api.model.Scenario;
import com.howmy.mindworks_api.repository.ScenarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScenarioService {

    private final ScenarioRepository scenarioRepository;

    public ScenarioService(ScenarioRepository scenarioRepository) {
        this.scenarioRepository = scenarioRepository;
    }

    public List<ScenarioResponse> getActiveScenarios() {

        return scenarioRepository
                .findByActiveTrueOrderByOrderAsc()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ScenarioResponse getScenario(Long id) {

        Scenario scenario = scenarioRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Scenario not found")
                );

        return toResponse(scenario);
    }

    private ScenarioResponse toResponse(Scenario scenario) {

        List<QuestionResponse> questions =
                scenario.getQuestions()
                        .stream()
                        .map(this::toQuestionResponse)
                        .toList();

        return new ScenarioResponse(
                scenario.getId(),
                scenario.getTitle(),
                scenario.getDescription(),
                scenario.getCategory(),
                scenario.getOrder(),
                questions
        );
    }

    private QuestionResponse toQuestionResponse(Question question) {

        List<AnswerResponse> answers =
                question.getAnswers()
                        .stream()
                        .map(this::toAnswerResponse)
                        .toList();

        return new QuestionResponse(
                question.getId(),
                question.getText(),
                question.getType(),
                question.getOrder(),
                question.getRequired(),
                answers
        );
    }

    private AnswerResponse toAnswerResponse(
            Answer answer
    ) {

        return new AnswerResponse(
                answer.getId(),
                answer.getText(),
                answer.getOrder()
        );
    }
}