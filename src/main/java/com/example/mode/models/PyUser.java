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
<<<<<<< HEAD
@Table(name = "pymes_users")
=======
@Table(name = "pymesUsers")
>>>>>>> abfd7c7e9e41c5da5079c6298d9d0fe57ed1010e
public class PyUser {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
<<<<<<< HEAD
	@Getter @Setter @Column(name="pymes_id")
	private Long pyId;
	
	@Getter @Setter @Column(name="pymes_name")
	private String pyName;
	
	@Getter @Setter @Column(name="pymes_nit")
	private String pyNit;
	
	@Getter @Setter @Column(name="pymes_number")
	private String pyNumber;
	
	@Getter @Setter @Column(name="pymes_password")
=======
	@Getter @Setter @Column(name="pymesId")
	private Long pyId;
	
	@Getter @Setter @Column(name="pymesName")
	private String pyName;
	
	@Getter @Setter @Column(name="pymesNit")
	private String pyNit;
	
	@Getter @Setter @Column(name="pymesNumber")
	private String pyNumber;
	
	@Getter @Setter @Column(name="pymesPassword")
>>>>>>> abfd7c7e9e41c5da5079c6298d9d0fe57ed1010e
	private String pyPassword;

	
}