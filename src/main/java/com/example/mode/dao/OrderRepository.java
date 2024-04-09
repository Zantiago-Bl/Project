package com.example.mode.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mode.models.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
