package com.howmy.mindworks_api.dto;

import com.howmy.mindworks_api.model.QuestionType;

import java.util.List;

public record QuestionResponse(
        Long id,
        String text,
        QuestionType type,
        Integer order,
        Boolean required,
        List<AnswerResponse> answers
) {
}