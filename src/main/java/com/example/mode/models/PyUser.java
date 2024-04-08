package com.example.mode.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "pymes_users")
public class PyUser {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Getter @Setter @Column(name="pymes_id")
	private Long pyId;
	
	@Getter @Setter @Column(name="pymes_name")
	private String pyName;
	
	@Getter @Setter @Column(name="pymes_nit")
	private String pyNit;
	
	@Getter @Setter @Column(name="pymes_number")
	private String pyNumber;
	
	@Getter @Setter @Column(name="pymes_password")
	private String pyPassword;

	
}