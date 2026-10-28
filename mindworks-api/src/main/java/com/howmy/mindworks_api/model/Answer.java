package com.howmy.mindworks_api.model;

import jakarta.persistence.*;

import java.util.HashMap;
import java.util.Map;

@Entity
@Table(name = "answers")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String text;

    @Column(name = "display_order", nullable = false)
    private Integer order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id", nullable = false)
    private Question question;

    // patternId -> weight; drives the cognitive pattern score in the frontend
    @ElementCollection
    @CollectionTable(
            name = "answer_weights",
            joinColumns = @JoinColumn(name = "answer_id"),
            uniqueConstraints = @UniqueConstraint(columnNames = {"answer_id", "pattern_id"})
    )
    @MapKeyColumn(name = "pattern_id")
    @Column(name = "weight", nullable = false)
    private Map<String, Double> weights = new HashMap<>();

    public Answer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Map<String, Double> getWeights() {
        return weights;
    }
}