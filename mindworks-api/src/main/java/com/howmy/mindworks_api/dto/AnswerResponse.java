package com.howmy.mindworks_api.dto;

public record AnswerResponse(
        Long id,
        String text,
        Integer order
) {
}