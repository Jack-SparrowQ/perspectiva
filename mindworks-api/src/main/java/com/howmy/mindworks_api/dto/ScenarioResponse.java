package com.howmy.mindworks_api.dto;

import java.util.List;

public record ScenarioResponse(
        Long id,
        String title,
        String description,
        String category,
        Integer order,
        List<QuestionResponse> questions
) {
}