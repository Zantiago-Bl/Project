package com.example.mode.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "orders")
public class Order {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long idOrder;
	
	@Column(name="flavor")
	private String flavor;
	
	@Column(name="stuffed")
	private String stuffed;
	
	@Column(name="glazed")
	private String glazed;
	
	@Column(name="toppings")
	private String toppings;
	
	@Column(name="description")
	private String description;
	
	@Column(name="price")
	private Long price;
	
	@ManyToOne
    @JoinColumn(name = "id_client", referencedColumnName = "id")
    private User client;
	
	
}
