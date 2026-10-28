package com.howmy.mindworks_api.dto;

import java.util.Map;

public record AnswerResponse(
        Long id,
        String text,
        Integer order,
        Map<String, Double> weights
) {
}