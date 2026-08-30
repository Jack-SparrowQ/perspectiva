package com.howmy.mindworks_api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.howmy.mindworks_api.dto.ScenarioResponse;
import com.howmy.mindworks_api.service.ScenarioService;

@RestController
@RequestMapping("/api/scenarios")
public class ScenarioController {
    
    private final ScenarioService scenarioService;

    public ScenarioController(ScenarioService scenarioService) {
        this.scenarioService = scenarioService;
    }

    @GetMapping
    public List<ScenarioResponse> getScenarios() {
        return scenarioService.getActiveScenarios();
    }

    @GetMapping("/{id}")
    public ScenarioResponse getScenario(
        @PathVariable Long id
    ) {
        return scenarioService.getScenario(id);
    }
}
