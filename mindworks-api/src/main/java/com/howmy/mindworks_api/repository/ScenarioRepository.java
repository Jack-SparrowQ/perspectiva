package com.howmy.mindworks_api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.howmy.mindworks_api.model.Scenario;

public interface ScenarioRepository extends JpaRepository<Scenario, Long> {
    List<Scenario> findByActiveTrueOrderByOrderAsc();
}
