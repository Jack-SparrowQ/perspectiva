package com.howmy.mindworks_api.dto;

import jakarta.validation.constraints.NotNull;

public record SubmitAnswerRequest(

        @NotNull
        Long questionId,

        @NotNull
        Long answerId

) {
}