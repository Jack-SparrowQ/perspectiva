package com.howmy.mindworks_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.howmy.mindworks_api.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {


}