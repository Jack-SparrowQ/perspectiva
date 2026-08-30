package com.howmy.mindworks_api.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "scenarios")
public class Scenario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String category;

    @Column(name = "display_order", nullable = false)
    private Integer order;

    @Column(nullable = false)
    private Boolean active = true;

    @OneToMany(
            mappedBy = "scenario",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @OrderBy("order ASC")
    private List<Question> questions = new ArrayList<>();

    public Scenario() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;  
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;  
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;  
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;  
    }

    public List<Question> getQuestions() {
        return questions;
    }
}