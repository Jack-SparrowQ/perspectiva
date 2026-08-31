package com.howmy.mindworks_api.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record StartEvaluationResponse(
    UUID id,
    LocalDateTime startedAt,
    String status
) {
    
}
