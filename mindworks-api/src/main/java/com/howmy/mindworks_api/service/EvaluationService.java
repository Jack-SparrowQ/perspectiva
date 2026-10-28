package com.howmy.mindworks_api.service;

import com.howmy.mindworks_api.dto.StartEvaluationResponse;
import com.howmy.mindworks_api.dto.SubmitAnswerRequest;
import com.howmy.mindworks_api.model.*;
import com.howmy.mindworks_api.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class EvaluationService {

    private final EvaluationRepository evaluationRepository;
    private final EvaluationAnswerRepository evaluationAnswerRepository;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

    public EvaluationService(
            EvaluationRepository evaluationRepository,
            EvaluationAnswerRepository evaluationAnswerRepository,
            QuestionRepository questionRepository,
            AnswerRepository answerRepository
    ) {
        this.evaluationRepository = evaluationRepository;
        this.evaluationAnswerRepository = evaluationAnswerRepository;
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
    }

    @Transactional
    public StartEvaluationResponse startEvaluation() {

        Evaluation evaluation = new Evaluation();

        evaluation.setStartedAt(LocalDateTime.now());
        evaluation.setStatus(EvaluationStatus.IN_PROGRESS);

        Evaluation saved =
                evaluationRepository.save(evaluation);

        return new StartEvaluationResponse(
                saved.getId(),
                saved.getStartedAt(),
                saved.getStatus().name()
        );
    }

    @Transactional
    public void submitAnswer(
            UUID evaluationId,
            SubmitAnswerRequest request
    ) {

        Evaluation evaluation =
                evaluationRepository.findById(evaluationId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Evaluation not found"
                                )
                        );

        if (evaluation.getStatus() ==
                EvaluationStatus.COMPLETED) {

            throw new IllegalStateException(
                    "Evaluation is already completed"
            );
        }

        Question question =
                questionRepository.findById(
                        request.questionId()
                ).orElseThrow(() ->
                        new RuntimeException(
                                "Question not found"
                        )
                );

        Answer answer =
                answerRepository.findById(
                        request.answerId()
                ).orElseThrow(() ->
                        new RuntimeException(
                                "Answer not found"
                        )
                );

        if (!answer.getQuestion().getId()
                .equals(question.getId())) {

            throw new IllegalArgumentException(
                    "Answer does not belong to question"
            );
        }

        boolean alreadyAnswered =
                evaluationAnswerRepository
                        .existsByEvaluationIdAndQuestionId(
                                evaluationId,
                                question.getId()
                        );

        if (alreadyAnswered) {

            throw new IllegalStateException(
                    "Question has already been answered"
            );
        }

        EvaluationAnswer evaluationAnswer =
                new EvaluationAnswer();

        evaluationAnswer.setEvaluation(evaluation);
        evaluationAnswer.setQuestion(question);
        evaluationAnswer.setAnswer(answer);
        evaluationAnswer.setAnsweredAt(
                LocalDateTime.now()
        );

        evaluationAnswerRepository.save(
                evaluationAnswer
        );
    }
}